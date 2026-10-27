"use client";

import { frFRLocale } from "@sanity/locale-fr-fr";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "carzone",
  title: "CARZONE · Administration",
  basePath: "/admin",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Les coordonnées sont un document unique : pas de création ni de suppression.
    templates: (templates) => templates.filter(({ schemaType }) => schemaType !== "settings"),
  },
  document: {
    actions: (actions, { schemaType }) =>
      schemaType === "settings" ? actions.filter(({ action }) => action === "publish" || action === "discardChanges" || action === "restore") : actions,
  },
  plugins: [structureTool({ structure }), frFRLocale()],
  apiVersion,
});
