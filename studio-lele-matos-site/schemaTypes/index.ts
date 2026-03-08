import type { SchemaTypeDefinition } from "sanity";
import { productType } from "./product";
import { categoryType } from "./category";
import { siteSettingsType } from "./siteSettings";
import { faqItemType } from "./faqItem";
import { galleryItemType } from "./galleryItem";

export const schemaTypes: SchemaTypeDefinition[] = [
  productType,
  categoryType,
  siteSettingsType,
  faqItemType,
  galleryItemType,
];
