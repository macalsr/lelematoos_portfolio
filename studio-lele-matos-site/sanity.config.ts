import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Lele Matos Site Studio",
  projectId: "qtnabn6i",
  dataset: "production",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
