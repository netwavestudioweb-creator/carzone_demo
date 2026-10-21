import type { MetadataRoute } from "next";
import { CATALOGUE_PATH, groupPaths, models } from "@/lib/catalogue";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", CATALOGUE_PATH, "/nos-services", "/qui-sommes-nous", "/contactez-nous"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p === "/" ? "" : p}`, changeFrequency: "weekly" as const, priority: p === "/" ? 1 : 0.8 })),
    ...groupPaths().map((seg) => ({ url: `${SITE_URL}${CATALOGUE_PATH}/${seg.join("/")}`, changeFrequency: "weekly" as const, priority: 0.6 })),
    ...models.map((m) => ({ url: `${SITE_URL}${m.path}`, changeFrequency: "weekly" as const, priority: 0.7 })),
  ];
}
