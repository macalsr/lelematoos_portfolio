import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig([
  {
    name: "production",
    title: "Lele Matos Studio (Production)",
    projectId: "qtnabn6i",
    dataset: "production",
    basePath: "/production",
    plugins: [structureTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: "homolog",
    title: "Lele Matos Studio (Homolog)",
    projectId: "qtnabn6i",
    dataset: "homolog",
    basePath: "/homolog",
    plugins: [structureTool()],
    schema: {
      types: schemaTypes,
    },
  },
]);
