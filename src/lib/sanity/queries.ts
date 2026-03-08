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
  "ogImageUrl": coalesce(ogImageSvg.asset->url, ogImage.asset->url),
  "ogImageAlt": coalesce(ogImage.alt, seoTitle, seo.title, "Lele Matoos"),
  whatsapp,
  instagram,
  headerTitle,
  "headerLogoUrl": coalesce(headerLogoSvg.asset->url, headerLogo.asset->url),
  "headerLogoAlt": coalesce(headerLogo.alt, headerTitle, "Logo da marca"),
  heroTitle,
  heroSubtitle,
  heroNote,
  heroImageSize,
  "heroImageUrl": coalesce(heroImageSvg.asset->url, heroImage.asset->url),
  "heroImageAlt": coalesce(heroImage.alt, heroTitle, "Imagem do hero"),
  brandTagline,
  fontVariant,
  themeVariant,
  contactFloatingText,
  contactFloatingInstagramText
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
