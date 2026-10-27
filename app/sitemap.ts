import type { MetadataRoute } from "next";
import { CATALOGUE_PATH, getModels, groupPaths } from "@/lib/catalogue";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const models = await getModels();
  const pages = ["/", CATALOGUE_PATH, "/nos-services", "/qui-sommes-nous", "/contactez-nous"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p === "/" ? "" : p}`, changeFrequency: "weekly" as const, priority: p === "/" ? 1 : 0.8 })),
    ...groupPaths(models).map((seg) => ({ url: `${SITE_URL}${CATALOGUE_PATH}/${seg.join("/")}`, changeFrequency: "weekly" as const, priority: 0.6 })),
    ...models.map((m) => ({ url: `${SITE_URL}${m.path}`, changeFrequency: "weekly" as const, priority: 0.7 })),
  ];
}
