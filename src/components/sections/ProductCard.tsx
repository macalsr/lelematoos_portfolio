import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { ProductItem } from "@/types/site";

type ProductCardProps = {
  product: ProductItem;
  categoryLabel: string;
  imageClassName?: string;
};

export function ProductCard({
  product,
  categoryLabel,
  imageClassName = "group/image relative flex aspect-[4/4.2] items-center justify-center overflow-hidden bg-[linear-gradient(155deg,rgba(var(--color-accent-soft),0.76),rgba(255,248,245,0.98)_42%,rgba(var(--color-surface-alt),0.94))] px-4 pb-2 pt-3.5 max-md:aspect-[4/4.1] max-md:px-3.5 max-md:pb-2 max-md:pt-3",
}: ProductCardProps) {
  return (
    <Card variant="flash" className="section-reveal group cursor-pointer border-pink-dark/10 bg-[rgba(255,246,242,0.94)] shadow-[0_16px_36px_rgba(138,72,94,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(138,72,94,0.1)]">
      <div className={imageClassName}>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-end p-3.5 max-md:p-3">
          <div className="rounded-full border border-white/18 bg-header-bg/86 px-3 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-header-text opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
            Ver produto
          </div>
        </div>

        <Link
          href={`/produtos/${product.slug}`}
          className="relative block h-full w-full cursor-pointer"
          aria-label={`Ver produto ${product.nome}`}
        >
          <Image
            src={product.imagemPrincipal}
            alt={product.nome}
            fill
            className="object-contain object-center mix-blend-multiply transition-transform duration-500 group-hover/image:scale-[1.045]"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-2 border-t border-pink-dark/8 px-4 pb-3.5 pt-3 max-md:px-3.5 max-md:pb-3 max-md:pt-2.5">
        <div className="font-ui text-[9px] font-black uppercase tracking-[0.24em] text-pink-dark/88">
          {categoryLabel}
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className="m-0 min-w-0 text-[25px] font-black uppercase leading-[0.92] text-green-dark max-md:text-[22px]">
            <Link
              href={`/produtos/${product.slug}`}
              className="cursor-pointer decoration-pink-dark/60 decoration-2 underline-offset-4 transition-[color,text-decoration-color] duration-200 group-hover:text-pink-dark group-hover:underline"
            >
              {product.nome}
            </Link>
          </h3>
          <div className="shrink-0 text-[17px] font-black uppercase leading-none text-pink-dark">
            {product.preco}
          </div>
        </div>

        <p className="m-0 line-clamp-1 max-w-[30ch] text-[12px] leading-[1.45] text-muted">
          {product.descricaoCurta}
        </p>
      </div>
    </Card>
  );
}
