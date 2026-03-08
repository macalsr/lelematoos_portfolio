import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Categorias",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome da categoria",
      type: "string",
      description: "Nome exibido no filtro e na seção de categorias.",
      validation: (rule) => rule.required().min(2),
    }),
    defineField({
      name: "slug",
      title: "Identificador da categoria",
      type: "slug",
      description: "Código interno usado para relacionar categoria e produto.",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição da categoria",
      type: "string",
      description: "Texto curto que aparece na seção de categorias.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Ordem de exibição",
      type: "number",
      description: "Menor número aparece primeiro.",
      initialValue: 0,
    }),
    defineField({
      name: "archived",
      title: "Arquivar esta categoria",
      type: "boolean",
      description:
        "Marque para ocultar esta categoria do site sem excluir o cadastro.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      archived: "archived",
    },
    prepare: ({ title, subtitle, archived }) => ({
      title,
      subtitle: archived ? `Arquivada · ${subtitle}` : subtitle,
    }),
  },
});
