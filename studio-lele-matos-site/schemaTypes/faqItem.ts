import { defineField, defineType } from "sanity";

export const faqItemType = defineType({
  name: "faqItem",
  title: "Perguntas frequentes",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Pergunta",
      type: "string",
      description: "Pergunta que será exibida na seção de FAQ.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Resposta",
      type: "text",
      rows: 4,
      description: "Resposta mostrada logo abaixo da pergunta.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "answer",
    },
  },
});
