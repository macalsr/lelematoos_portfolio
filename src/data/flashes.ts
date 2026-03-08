import type { FlashItem } from "@/types/site";

export const flashes: FlashItem[] = [
  {
    id: "rosa-classica",
    tag: "Old school",
    title: "Rosa clássica",
    description:
      "Composição tradicional com traço marcado, contraste forte e leitura limpa.",
    price: "R$ 290",
    signal: "Sinal para reserva: R$ 90",
    primaryMessage:
      "Oi! Quero reservar o flash Rosa clássica. Qual o valor do sinal e horários disponíveis?",
    secondaryMessage: "Oi! Quero mais detalhes sobre o flash Rosa clássica.",
    kind: "rose",
  },
  {
    id: "coracao-vintage",
    tag: "Colorido",
    title: "Coração vintage",
    description:
      "Flash clássico para composições pequenas e médias com pegada retrô.",
    price: "R$ 250",
    signal: "Sinal para reserva: R$ 70",
    primaryMessage:
      "Oi! Quero reservar o flash Coração vintage. Pode me passar o sinal?",
    secondaryMessage: "Oi! Quero mais detalhes sobre o flash Coração vintage.",
    kind: "heart",
  },
  {
    id: "estrela-old-school",
    tag: "Flash exclusivo",
    title: "Estrela old school",
    description:
      "Desenho direto e gráfico para quem quer um clássico sem exagero.",
    price: "R$ 230",
    signal: "Sinal para reserva: R$ 60",
    primaryMessage:
      "Oi! Quero reservar o flash Estrela old school. Qual o valor do sinal?",
    secondaryMessage: "Oi! Quero mais detalhes sobre o flash Estrela old school.",
    kind: "star",
  },
];