import { defineField, defineType } from "sanity";

export const galleryItemType = defineType({
  name: "galleryItem",
  title: "Galeria",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "Título que aparece no card da galeria.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição curta",
      type: "text",
      rows: 3,
      description: "Texto curto exibido abaixo do título na galeria.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      description: "Imagem principal exibida no card da galeria.",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          description: "Descrição da imagem para acessibilidade.",
        }),
      ],
    }),
    defineField({
      name: "category",
      title: "Categoria visual (opcional)",
      type: "string",
      description: "Use para organizar internamente os itens da galeria.",
    }),
    defineField({
      name: "order",
      title: "Ordem de exibição",
      type: "number",
      description: "Menor número aparece primeiro.",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle ? `Categoria: ${subtitle}` : "Sem categoria",
      media,
    }),
  },
});
