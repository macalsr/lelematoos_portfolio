export const productsQuery = `*[_type == "product" && archived != true] | order(_createdAt desc){
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

export const productBySlugQuery = `*[_type == "product" && archived != true && slug.current == $slug][0]{
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

export const productSlugsQuery = `*[_type == "product" && archived != true && defined(slug.current)]{
  "slug": slug.current
}`;

export const categoriesQuery = `*[_type == "category" && archived != true] | order(order asc, name asc){
  _id,
  name,
  "slug": slug.current,
  description,
  order
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
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
  contactFloatingText,
  contactFloatingInstagramText,
  sectionProductsKicker,
  sectionProductsTitle,
  sectionProductsText,
  sectionCatalogKicker,
  sectionCatalogTitle,
  sectionCatalogText,
  sectionFaqKicker,
  sectionFaqTitle,
  sectionFaqText
}`;

export const faqItemsQuery = `*[_type == "faqItem" && archived != true] | order(_createdAt asc){
  _id,
  question,
  answer
}`;

export const galleryItemsQuery = `*[_type == "galleryItem"] | order(order asc, _createdAt asc){
  _id,
  title,
  description,
  category,
  order,
  "imageUrl": image.asset->url,
  "alt": coalesce(image.alt, title)
}`;
