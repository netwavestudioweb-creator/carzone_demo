import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function AdminPage() {
  if (!isSanityConfigured) {
    return (
      <main className="grid min-h-screen place-content-center gap-3 p-8 text-center">
        <h1 className="text-2xl font-extrabold">Administration CARZONE</h1>
        <p className="max-w-md text-cz-mute">
          L&apos;espace d&apos;administration n&apos;est pas encore relié à un projet Sanity. Renseignez
          NEXT_PUBLIC_SANITY_PROJECT_ID dans les variables d&apos;environnement, puis redéployez le site.
        </p>
      </main>
    );
  }
  return <NextStudio config={config} />;
}
