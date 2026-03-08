import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getProductBySlug, getProductSlugs } from "@/lib/products";
import { getSiteContent } from "@/lib/siteContent";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { messageProductInterest, messageProductQuestion } from "@/lib/whatsappMessages";
import { sectionStyles } from "@/lib/sectionStyles";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

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
              className="mb-6 inline-block rounded-full border border-green-dark/20 bg-surface px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-green-dark"
            >
              Voltar para produtos
            </Link>

            <div className="grid grid-cols-[1fr_1fr] gap-6 max-lg:grid-cols-1">
              <Card variant="flash">
                <div className="flex aspect-square items-center justify-center border-b border-b-green-dark/10 bg-[linear-gradient(135deg,#f6d5df,#f8e6ec_42%,#dcebcf)] p-[22px]">
                  <img
                    src={product.imagemPrincipal}
                    alt={product.nome}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>

                <div className="p-[22px] max-md:p-5">
                  <div className="w-fit rounded-full border border-green-dark/20 bg-pink-soft px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-green-dark">
                    {product.categoria}
                  </div>
                  <h1 className="mt-4 text-[clamp(30px,4.6vw,48px)] font-black uppercase leading-[0.92] text-green-dark">
                    {product.nome}
                  </h1>
                  <p className="mt-4 text-[16px] leading-[1.75] text-muted">{product.descricaoLonga}</p>
                </div>
              </Card>

              <Card variant="process">
                <h2 className="mb-4 text-2xl font-black uppercase text-green-dark">Detalhes do produto</h2>
                <div className="grid gap-3 text-[15px] text-muted">
                  <p>
                    <strong className="text-green-dark">Preço:</strong> {product.preco}
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
