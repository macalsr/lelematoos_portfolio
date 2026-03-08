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
    defineField({
      name: "archived",
      title: "Arquivar esta pergunta",
      type: "boolean",
      description:
        "Marque para ocultar esta pergunta do site sem excluir o cadastro.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "answer",
      archived: "archived",
    },
    prepare: ({ title, subtitle, archived }) => ({
      title,
      subtitle: archived ? `Arquivada · ${subtitle}` : subtitle,
    }),
  },
});
