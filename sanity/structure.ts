import type { StructureResolver } from "sanity/structure";
import { BRANDS } from "./brands";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("CARZONE")
    .items([
      S.documentTypeListItem("model").title("Tous les modèles"),
      S.listItem()
        .title("Modèles par marque")
        .child(
          S.list()
            .title("Marques")
            .items(
              BRANDS.map((b) =>
                S.listItem()
                  .id(`marque-${b.slug.replace(/\//g, "-")}`)
                  .title(b.title)
                  .child(S.documentList().title(b.title).filter('_type == "model" && brand == $brand').params({ brand: b.value })),
              ),
            ),
        ),
      S.listItem()
        .title("Sans prix")
        .child(S.documentList().title("Modèles sans prix").filter('_type == "model" && !defined(price)')),
      S.divider(),
      S.listItem().title("Coordonnées du showroom").id("settings").child(S.document().schemaType("settings").documentId("settings")),
    ]);
