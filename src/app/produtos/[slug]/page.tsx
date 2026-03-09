import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ProductImageLightbox } from "@/components/ui/ProductImageLightbox";
import { getProductBySlug } from "@/lib/products";
import { getSiteContent } from "@/lib/siteContent";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { messageProductInterest, messageProductQuestion } from "@/lib/whatsappMessages";
import { sectionStyles } from "@/lib/sectionStyles";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const content = await getSiteContent();
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produto não encontrado",
    };
  }

  const brandName = content.brand.name?.trim();

  return {
    title: brandName ? `${product.nome} | ${brandName}` : product.nome,
    description: product.descricaoCurta,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const content = await getSiteContent();
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const buyHref = buildWhatsAppUrl(
    content.contact.whatsappPhone,
    messageProductInterest(product.nome),
  );
  const detailsHref = buildWhatsAppUrl(
    content.contact.whatsappPhone,
    messageProductQuestion(product.nome),
  );

  return (
    <>
      <Header content={content} />
      <main>
        <section className={`${sectionStyles.base} ${sectionStyles.tinted}`}>
          <Container>
            <Link
              href="/produtos"
              className="mb-8 inline-flex rounded-full border border-green-dark/15 bg-surface/85 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-green-dark transition-colors duration-200 hover:bg-pink-soft/65"
            >
              Voltar para produtos
            </Link>

            <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] gap-6 max-lg:grid-cols-1">
              <Card variant="flash" className="bg-[rgba(var(--color-surface),0.96)]">
                <div className="relative flex aspect-[4/4.3] items-center justify-center border-b border-b-green-dark/10 bg-[linear-gradient(155deg,rgba(var(--color-accent-soft),0.82),rgba(var(--color-surface),0.98)_42%,rgba(var(--color-surface-alt),0.98))] p-5 max-md:aspect-[4/4.1] max-md:p-4">
                  <div className="absolute left-4 top-4 z-10 rounded-full border border-green-dark/10 bg-surface/92 px-3 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-green-dark">
                    Toque para ampliar
                  </div>
                  <ProductImageLightbox
                    src={product.imagemPrincipal}
                    alt={product.nome}
                    className="h-full w-full rounded-[24px] object-contain object-center"
                    triggerClassName="h-full w-full"
                  />
                </div>

                <div className="p-6 max-md:p-5">
                  <div className="w-fit rounded-full border border-green-dark/12 bg-pink-soft/75 px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-green-dark">
                    {product.categoria}
                  </div>
                  <h1 className="mt-5 text-[clamp(30px,4.6vw,52px)] font-black uppercase leading-[0.9] text-green-dark">
                    {product.nome}
                  </h1>
                  <p className="mt-4 max-w-[54ch] text-[16px] leading-[1.85] text-muted">{product.descricaoLonga}</p>
                </div>
              </Card>

              <Card variant="process" className="editorial-panel">
                <div className="font-ui text-[10px] font-black uppercase tracking-[0.28em] text-pink-dark">Detalhes</div>
                <h2 className="mb-4 mt-3 text-[clamp(28px,3.4vw,40px)] font-black uppercase leading-[0.94] text-green-dark">
                  Detalhes do produto
                </h2>
                <p className="mb-5 text-lg font-black uppercase leading-[1.1] text-pink-dark">{product.nome}</p>
                <div className="grid gap-3 text-[15px] text-muted">
                  <p>
                    <strong className="text-green-dark">Preco:</strong> {product.preco}
                  </p>
                  <p>
                    <strong className="text-green-dark">Disponibilidade:</strong> {product.disponivel ? "Disponível" : "Indisponível"}
                  </p>
                  <p>
                    <strong className="text-green-dark">Material:</strong> {product.material}
                  </p>
                  <p>
                    <strong className="text-green-dark">Tamanho:</strong> {product.tamanho}
                  </p>
                </div>

                <div className="mt-8 grid gap-3">
                  <Button href={buyHref} variant="miniPrimary" target="_blank" rel="noopener noreferrer">
                    Comprar no WhatsApp
                  </Button>
                  <Button href={detailsHref} variant="miniSecondary" target="_blank" rel="noopener noreferrer">
                    Tirar dúvidas
                  </Button>
                </div>
              </Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
