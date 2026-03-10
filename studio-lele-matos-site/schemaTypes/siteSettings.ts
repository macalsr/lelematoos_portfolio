import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Configurações do site",
  type: "document",
  fieldsets: [
    { name: "seo", title: "SEO" },
    { name: "brand", title: "Marca e topo" },
    { name: "sections", title: "Textos das seções" },
    { name: "contact", title: "Contato e atendimento" },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "SEO (estrutura principal)",
      type: "object",
      fieldset: "seo",
      description: "Dados de SEO usados na metadata global do site.",
      fields: [
        defineField({
          name: "title",
          title: "Título SEO",
          type: "string",
          description: "Título que aparece no Google e na aba do navegador.",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "description",
          title: "Descrição SEO",
          type: "text",
          rows: 3,
          description: "Resumo que aparece nos resultados de busca.",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "Título SEO (campo simples)",
      type: "string",
      fieldset: "seo",
      description: "Alternativa simples ao campo SEO estruturado.",
    }),
    defineField({
      name: "seoDescription",
      title: "Descrição SEO (campo simples)",
      type: "text",
      rows: 3,
      fieldset: "seo",
      description: "Alternativa simples ao campo SEO estruturado.",
    }),
    defineField({
      name: "ogImage",
      title: "Imagem de compartilhamento",
      type: "image",
      fieldset: "seo",
      description: "Imagem usada quando o link do site é compartilhado (WhatsApp/Instagram).",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "ogImageSvg",
      title: "Imagem de compartilhamento (SVG opcional)",
      type: "file",
      fieldset: "seo",
      description:
        "Use este campo se quiser enviar a versão em SVG. Se preenchido, terá prioridade sobre a imagem comum.",
      options: {
        accept: ".svg,image/svg+xml",
      },
    }),
    defineField({
      name: "headerTitle",
      title: "Título principal do header (texto)",
      type: "string",
      fieldset: "brand",
      description:
        "Texto principal do topo do site. Use quando não quiser usar imagem como logo.",
    }),
    defineField({
      name: "headerLogo",
      title: "Logo do header (imagem opcional)",
      type: "image",
      fieldset: "brand",
      description:
        "Se enviar uma imagem, ela será usada no lugar do texto no título principal do header.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo da logo",
          type: "string",
          description: "Descrição da logo para acessibilidade.",
        }),
      ],
    }),
    defineField({
      name: "headerLogoSvg",
      title: "Logo do header (SVG opcional)",
      type: "file",
      fieldset: "brand",
      description:
        "Se enviar um SVG aqui, ele será usado no header com prioridade sobre a imagem comum.",
      options: {
        accept: ".svg,image/svg+xml",
      },
    }),
    defineField({
      name: "heroTitle",
      title: "Título principal (hero)",
      type: "string",
      fieldset: "brand",
      description: "Texto principal exibido no centro do topo da página.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Subtítulo principal (hero)",
      type: "string",
      fieldset: "brand",
      description: "Texto menor abaixo do título principal no hero.",
    }),
    defineField({
      name: "heroNote",
      title: "Linha de apoio do hero",
      type: "string",
      fieldset: "brand",
      description: "Frase curta de apoio que aparece no hero.",
    }),
    defineField({
      name: "heroImage",
      title: "Imagem do hero",
      type: "image",
      fieldset: "brand",
      description:
        "Imagem principal exibida no hero. Se não enviar, o site usa o visual padrão.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo da imagem",
          type: "string",
          description: "Descrição da imagem para acessibilidade.",
        }),
      ],
    }),
    defineField({
      name: "heroImageSvg",
      title: "Imagem do hero (SVG opcional)",
      type: "file",
      fieldset: "brand",
      description:
        "Use este campo para subir um SVG no hero. Se preenchido, ele terá prioridade sobre a imagem comum.",
      options: {
        accept: ".svg,image/svg+xml",
      },
    }),
    defineField({
      name: "heroImageSize",
      title: "Tamanho da imagem do hero",
      type: "string",
      fieldset: "brand",
      description: "Define o tamanho da imagem no topo da página inicial.",
      options: {
        list: [
          { title: "Pequena", value: "small" },
          { title: "Média", value: "medium" },
          { title: "Grande", value: "large" },
        ],
      },
      initialValue: "medium",
    }),
    defineField({
      name: "brandTagline",
      title: "Tagline da marca",
      type: "string",
      fieldset: "brand",
      description: "Texto curto exibido no header, abaixo do nome da marca.",
    }),
    defineField({
      name: "sectionProductsKicker",
      title: "Produtos: label pequena",
      type: "string",
      fieldset: "sections",
      description: "Texto pequeno que aparece acima do título da seção de produtos em destaque.",
    }),
    defineField({
      name: "sectionProductsTitle",
      title: "Produtos: título principal",
      type: "string",
      fieldset: "sections",
      description: "Título principal da seção de produtos em destaque na home.",
    }),
    defineField({
      name: "sectionProductsText",
      title: "Produtos: texto de apoio",
      type: "text",
      rows: 3,
      fieldset: "sections",
      description: "Descrição opcional exibida abaixo do título da seção de produtos em destaque.",
    }),
    defineField({
      name: "sectionCatalogKicker",
      title: "Catálogo: label pequena",
      type: "string",
      fieldset: "sections",
      description: "Texto pequeno acima do título na página geral de produtos.",
    }),
    defineField({
      name: "sectionCatalogTitle",
      title: "Catálogo: título principal",
      type: "string",
      fieldset: "sections",
      description: "Título principal da página geral de produtos.",
    }),
    defineField({
      name: "sectionCatalogText",
      title: "Catálogo: texto de apoio",
      type: "text",
      rows: 3,
      fieldset: "sections",
      description: "Descrição exibida abaixo do título na página geral de produtos.",
    }),
    defineField({
      name: "sectionFaqKicker",
      title: "FAQ: label pequena",
      type: "string",
      fieldset: "sections",
      description: "Texto pequeno acima do título da seção de FAQ.",
    }),
    defineField({
      name: "sectionFaqTitle",
      title: "FAQ: título principal",
      type: "string",
      fieldset: "sections",
      description: "Título principal da seção de FAQ na home.",
    }),
    defineField({
      name: "sectionFaqText",
      title: "FAQ: texto de apoio",
      type: "text",
      rows: 3,
      fieldset: "sections",
      description: "Texto de apoio da seção FAQ, exibido abaixo do título.",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp de contato",
      type: "string",
      fieldset: "contact",
      description:
        "Este número ou link será usado nos botões de WhatsApp do site. Exemplo: 5561999999999 ou https://wa.me/5561999999999",
      validation: (rule) =>
        rule.required().custom((value) => {
          const input = String(value ?? "").trim();
          if (!input) return "Preencha o WhatsApp de contato.";
          const hasPhoneDigits = input.replace(/\D/g, "").length >= 10;
          const hasWhatsappLink = /wa\.me|api\.whatsapp\.com/i.test(input);
          return hasPhoneDigits || hasWhatsappLink
            ? true
            : "Informe um número válido com DDI/DDD ou um link de WhatsApp.";
        }),
    }),
    defineField({
      name: "instagram",
      title: "Instagram da marca",
      type: "url",
      fieldset: "contact",
      description: "Link completo do Instagram usado nos botões do site.",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Configurações do site",
      subtitle: "Textos globais, contato, navegação e SEO",
    }),
  },
});
