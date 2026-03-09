import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { messageProductInterest } from "@/lib/whatsappMessages";
import type { ProductItem } from "@/types/site";

type ProductCardProps = {
  product: ProductItem;
  categoryLabel: string;
  whatsappPhone: string;
  imageClassName?: string;
};

export function ProductCard({
  product,
  categoryLabel,
  whatsappPhone,
  imageClassName = "flex aspect-[4/3] items-center justify-center border-b border-b-green-dark/10 bg-[linear-gradient(135deg,rgba(var(--color-accent-soft),0.92),rgba(var(--color-surface),0.96)_42%,rgba(var(--color-surface-alt),0.96))] p-[22px] max-md:p-4",
}: ProductCardProps) {
  return (
    <Card variant="flash">
      <Link href={`/produtos/${product.slug}`} className={imageClassName}>
        <img
          src={product.imagemPrincipal}
          alt={product.nome}
          className="h-full w-full rounded-xl object-contain object-center"
          loading="lazy"
        />
      </Link>

      <div className="flex h-full flex-col gap-[14px] p-[22px] max-md:gap-3.5 max-md:p-5">
        <div className="w-fit rounded-full border border-green-dark/20 bg-pink-soft px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-green-dark">
          {categoryLabel}
        </div>

        <h3 className="m-0 text-[26px] font-black uppercase leading-[0.95] text-green-dark max-md:text-2xl">
          <Link href={`/produtos/${product.slug}`}>{product.nome}</Link>
        </h3>

        <p className="m-0 text-[15px] leading-[1.75] text-muted">{product.descricaoCurta}</p>
        <div className="mt-0.5 text-[22px] font-black uppercase text-pink-dark">{product.preco}</div>

        <div className="mt-auto grid gap-3">
          <Button
            href={buildWhatsAppUrl(whatsappPhone, messageProductInterest(product.nome))}
            variant="miniPrimary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar
          </Button>

          <Button href={`/produtos/${product.slug}`} variant="miniSecondary">
            Ver produto
          </Button>
        </div>
      </div>
    </Card>
  );
}
