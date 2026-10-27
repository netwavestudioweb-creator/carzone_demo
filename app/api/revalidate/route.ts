import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { CACHE_TAG } from "@/lib/sanity";

// Appelé par le webhook Sanity à chaque publication : le site relit le catalogue en moins d'une minute.
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET manquant" }, { status: 500 });
  }
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true);
    if (!isValidSignature) {
      return NextResponse.json({ message: "Signature invalide" }, { status: 401 });
    }
    revalidateTag(CACHE_TAG);
    return NextResponse.json({ revalidated: true, type: body?._type ?? null, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: err instanceof Error ? err.message : "Erreur" }, { status: 500 });
  }
}
