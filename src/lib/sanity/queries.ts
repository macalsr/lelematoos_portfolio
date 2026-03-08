import groq from "groq";

export const productsQuery = groq`*[_type == "product" && archived != true] | order(_createdAt desc){
  _id,
  name,
  "slug": slug.current,
  "category": category->{
    _id,
    name,
    "slug": slug.current
  },
  price,
  shortDescription,
  longDescription,
  material,
  size,
  visualKind,
  novelty,
  currentCollection,
  featured,
  available,
  "mainImageUrl": mainImage.asset->url
}`;

export const productBySlugQuery = groq`*[_type == "product" && archived != true && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  "category": category->{
    _id,
    name,
    "slug": slug.current
  },
  price,
  shortDescription,
  longDescription,
  material,
  size,
  visualKind,
  novelty,
  currentCollection,
  featured,
  available,
  "mainImageUrl": mainImage.asset->url
}`;

export const productSlugsQuery = groq`*[_type == "product" && archived != true && defined(slug.current)]{
  "slug": slug.current
}`;

export const categoriesQuery = groq`*[_type == "category" && archived != true] | order(order asc, name asc){
  _id,
  name,
  "slug": slug.current,
  description,
  order
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  _id,
  seo,
  seoTitle,
  seoDescription,
  "ogImageUrl": ogImage.asset->url,
  "ogImageAlt": coalesce(ogImage.alt, seoTitle, seo.title, "Lele Matoos"),
  whatsapp,
  instagram,
  heroTitle,
  heroSubtitle,
  heroNote,
  "heroImageUrl": heroImage.asset->url,
  "heroImageAlt": coalesce(heroImage.alt, heroTitle, "Imagem do hero"),
  brandTagline,
  fontVariant,
  themeVariant,
  location,
  contactDescription,
  contactActions[]{
    label,
    href,
    messageOnly
  },
  contactMainCtaText,
  contactFloatingText
}`;

export const faqItemsQuery = groq`*[_type == "faqItem" && archived != true] | order(_createdAt asc){
  _id,
  question,
  answer
}`;

export const galleryItemsQuery = groq`*[_type == "galleryItem"] | order(order asc, _createdAt asc){
  _id,
  title,
  description,
  category,
  order,
  "imageUrl": image.asset->url,
  "alt": coalesce(image.alt, title)
}`;
