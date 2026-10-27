import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, isSanityConfigured, projectId } from "@/sanity/env";

export const CACHE_TAG = "catalogue";

export const sanityClient = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: false, perspective: "published" })
  : null;

const builder = isSanityConfigured ? imageUrlBuilder({ projectId, dataset }) : null;

type ImageSource = Parameters<NonNullable<typeof builder>["image"]>[0];

export function imageUrl(source: unknown, width = 1600): string | null {
  if (!builder || !source) return null;
  return builder.image(source as ImageSource).width(width).fit("max").auto("format").url();
}

/** Lecture mise en cache, invalidée par le webhook de publication (app/api/revalidate). */
export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  if (!sanityClient) throw new Error("Sanity n'est pas configuré");
  return sanityClient.fetch<T>(query, params, { next: { tags: [CACHE_TAG], revalidate: 3600 } });
}
