"""Importe le catalogue du site Webador topcarzone.com.

Lit chaque fiche modèle listée dans le menu « Nos marques de voitures », en extrait
le contenu (titres, paragraphes, listes), le prix, la garantie et les
caractéristiques, télécharge jusqu'à 8 photos par modèle et écrit :
  - data/catalogue.json
  - public/images/catalogue/<slug>/<n>.jpg

Usage : python scripts/import-catalogue.py
Dépendances : beautifulsoup4, Pillow
"""

import io
import json
import re
import sys
import time
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup
from PIL import Image

BASE = "https://www.topcarzone.com"
ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = ROOT / "data" / "catalogue.json"
IMG_DIR = ROOT / "public" / "images" / "catalogue"
MAX_IMAGES = 8
UA = {"User-Agent": "Mozilla/5.0 (CARZONE catalogue import)"}

BRANDS = {
    "baic": "BAIC",
    "byd": "BYD",
    "changan": "Changan",
    "exeed": "Exeed",
    "forthing": "Forthing",
    "geely-2026": "Geely",
    "jetour-2026": "Jetour",
    "kaiyi": "Kaiyi",
    "toyota": "Toyota",
    "wuling-bingo": "Wuling",
}

SKIP_SECTIONS = re.compile(r"^(galerie|garantie|prix|contactez)", re.I)
PRICE_RE = re.compile(r"Prix\s*:?\s*([\d\s  .]{6,})\s*F\s*CFA", re.I)
WARRANTY_RE = re.compile(r"(\d+\s*ans?\s*ou\s*[\d\s  ]+\s*km)", re.I)
SPEC_RE = re.compile(r"^([^:]{2,40}?)\s*:\s*(.{1,160})$")


def fetch(url: str, retries: int = 3) -> bytes:
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except Exception as e:  # réseau instable : on réessaie
            if attempt == retries - 1:
                raise
            print(f"  nouvel essai ({e})", file=sys.stderr)
            time.sleep(2 * (attempt + 1))
    raise RuntimeError("unreachable")


def clean(text: str) -> str:
    text = text.replace(" ", " ").replace(" ", " ")
    text = re.sub(r"\s*\[\s*\d+(?:\s*,\s*\d+)*\s*\]", "", text)  # renvois [1, 2]
    return re.sub(r"\s+", " ", text).strip()


def model_paths(home_html: str) -> list[str]:
    soup = BeautifulSoup(home_html, "html.parser")
    hrefs = []
    for a in soup.select('a[href^="/nos-marques-de-voitures/"]'):
        h = a["href"].split("#")[0].rstrip("/")
        if h not in hrefs:
            hrefs.append(h)
    # Une fiche modèle est un lien qui n'est le parent d'aucun autre lien
    # et qui se trouve sous une marque.
    leaves = []
    for h in hrefs:
        parts = h.split("/")[2:]
        is_parent = any(o != h and o.startswith(h + "/") for o in hrefs)
        if len(parts) >= 2 and not is_parent:
            leaves.append(h)
    return leaves


def engine_of(text: str) -> str:
    t = text.lower()
    if re.search(r"rehev|reev|prolongateur|range extender|erev", t):
        return "Hybride à prolongateur"
    if re.search(r"hybride rechargeable|phev|i-dm|dm-i|em-p|plug-in", t):
        return "Hybride rechargeable"
    if re.search(r"\bhev\b|hybride", t):
        return "Hybride"
    if re.search(r"100 ?% ?électrique|tout électrique|\bev\b|électrique", t):
        return "Électrique"
    if "diesel" in t:
        return "Diesel"
    return "Essence"


def category_of(text: str) -> str:
    t = text.lower()
    if re.search(r"pick-?up|double cabine|rich 7", t):
        return "Pick-up"
    if re.search(r"monospace|\bmpv\b|minivan", t):
        return "Monospace"
    if re.search(r"berline|sedan", t):
        return "Berline"
    return "SUV"


def seats_of(text: str) -> int | None:
    m = re.search(r"Places\s*:\s*(\d)", text) or re.search(r"(\d)\s*places", text, re.I)
    return int(m.group(1)) if m else None


def parse_model(path: str, html: str) -> dict | None:
    soup = BeautifulSoup(html, "html.parser")
    main = soup.find("main")
    if not main:
        return None
    h1 = main.find("h1")
    if not h1 or not clean(h1.get_text()):
        return None
    name = clean(h1.get_text())
    full_text = clean(main.get_text(" "))

    sections: list[dict] = []
    current = {"title": None, "blocks": []}
    tagline = None
    images: list[str] = []

    for el in main.find_all(["h2", "h3", "p", "ul", "img"]):
        if el.name == "img":
            src = (el.get("src") or el.get("data-src") or "").split("?")[0]
            if "jwwb.nl" in src and "logo" not in src.lower() and src not in images:
                images.append(src)
            continue
        if el.name in ("h2", "h3"):
            title = clean(el.get_text())
            if not title:
                continue
            if tagline is None and not sections and not current["blocks"]:
                tagline = title
                continue
            if current["blocks"] or current["title"]:
                sections.append(current)
            current = {"title": title, "blocks": []}
            continue
        if el.name == "p":
            if el.find_parent("li"):
                continue
            text = clean(el.get_text(" "))
            if text and not PRICE_RE.search(text) and text.upper() != "CONTACTEZ-NOUS":
                current["blocks"].append({"type": "p", "text": text})
            continue
        if el.name == "ul" and not el.find_parent("ul"):
            items = []
            for li in el.find_all("li", recursive=False):
                # Webador colle parfois la phrase suivante dans le dernier <li>
                t = clean(li.get_text(" "))
                if t:
                    items.append(t)
            if items:
                current["blocks"].append({"type": "ul", "items": items})
    if current["blocks"] or current["title"]:
        sections.append(current)

    sections = [
        s for s in sections
        if s["blocks"] and not (s["title"] and SKIP_SECTIONS.search(s["title"]))
    ]

    specs = []
    for s in sections:
        for b in s["blocks"]:
            for line in b.get("items", []):
                m = SPEC_RE.match(line)
                if m and len(specs) < 40:
                    specs.append({"label": clean(m.group(1)), "value": clean(m.group(2))})

    price_m = PRICE_RE.search(full_text)
    price = int(re.sub(r"\D", "", price_m.group(1))) if price_m else None
    warranty_m = WARRANTY_RE.search(full_text)

    parts = path.split("/")[2:]
    brand_slug = parts[0]
    brand = BRANDS.get(brand_slug, brand_slug.title())
    if brand_slug == "baic" and len(parts) > 1 and parts[1] == "arcfox":
        brand = "ARCFOX"
    sub_brand = "Deepal" if "deepal" in path else ("Kaicene" if "kaicene" in path else None)

    head = f"{name} {tagline or ''} {path}"
    slug = "-".join(parts)
    return {
        "slug": slug,
        "path": path,
        "segments": parts,
        "brand": brand,
        "brandSlug": brand_slug,
        "subBrand": sub_brand,
        "name": name,
        "tagline": tagline,
        "price": price,
        "warranty": clean(warranty_m.group(1)) if warranty_m else None,
        "engine": engine_of(head + " " + full_text[:1500]),
        "category": category_of(head + " " + full_text[:800]),
        "seats": seats_of(full_text),
        "specs": specs,
        "sections": sections,
        "remoteImages": images[:MAX_IMAGES],
        "images": [],
        "hasContent": len(full_text) > 300,
    }


def save_image(url: str, dest: Path) -> bool:
    try:
        raw = fetch(url + "?enable-io=true&width=1200")
        im = Image.open(io.BytesIO(raw))
        if im.mode in ("RGBA", "LA", "P"):
            im = im.convert("RGBA")
            bg = Image.new("RGB", im.size, "white")
            bg.paste(im, mask=im.split()[-1])
            im = bg
        else:
            im = im.convert("RGB")
        im.thumbnail((1200, 1200))
        dest.parent.mkdir(parents=True, exist_ok=True)
        im.save(dest, "JPEG", quality=80, optimize=True, progressive=True)
        return True
    except Exception as e:
        print(f"  image ignorée {url}: {e}", file=sys.stderr)
        return False


def main() -> None:
    home = fetch(BASE + "/").decode("utf-8")
    paths = model_paths(home)
    print(f"{len(paths)} fiches trouvées")
    models = []
    for i, path in enumerate(paths, 1):
        html = fetch(BASE + path).decode("utf-8")
        model = parse_model(path, html)
        time.sleep(0.4)
        if not model:
            print(f"[{i}] {path} : pas de contenu")
            continue
        for n, url in enumerate(model["remoteImages"], 1):
            rel = f"/images/catalogue/{model['slug']}/{n}.jpg"
            if (ROOT / "public" / rel.lstrip("/")).exists() or save_image(url, ROOT / "public" / rel.lstrip("/")):
                model["images"].append(rel)
            time.sleep(0.15)
        del model["remoteImages"]
        models.append(model)
        price = f"{model['price']:,}".replace(",", " ") + " F CFA" if model["price"] else "sans prix"
        print(f"[{i}] {model['brand']} {model['name']} · {price} · {len(model['images'])} photos")
    DATA_FILE.write_text(json.dumps(models, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(models)} modèles écrits dans {DATA_FILE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
