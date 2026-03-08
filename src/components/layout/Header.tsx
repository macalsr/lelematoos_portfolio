"use client";

import { useState } from "react";
import { siteContent } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const mobileMenuLinks = [
  { label: "Flashes", href: "#flash" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const agendarHref = buildWhatsAppUrl(
    siteContent.contact.whatsappPhone,
    "Oi! Quero agendar uma tattoo.",
  );

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="sticky top-0 z-[80] border-b-2 border-b-[rgba(25,63,49,0.1)] bg-[rgba(245,239,232,0.95)] backdrop-blur-[10px]"
      style={{ position: "sticky", top: 0, zIndex: 80 }}
    >
      <Container className="flex min-h-[84px] flex-wrap items-center justify-between gap-6 max-md:min-h-[52px] max-md:gap-2 max-md:py-1">
        <a href="#home" className="flex min-w-0 flex-col gap-1" onClick={closeMenu}>
          <strong className="text-[22px] font-black uppercase tracking-[0.18em] text-green-dark max-md:text-[15px] max-md:tracking-[0.09em] max-[380px]:text-[14px]">
            {siteContent.brand.name}
          </strong>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-muted max-md:hidden">
            {siteContent.brand.tagline}
          </span>
        </a>

        <nav className="flex min-w-0 flex-wrap items-center gap-[18px] max-md:hidden">
          {siteContent.nav.map((item) =>
            item.cta ? (
              <Button key={item.href} href={item.href} variant="navCta">
                {item.label}
              </Button>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[13px] font-black uppercase tracking-[0.16em] text-green-dark max-[380px]:text-xs max-[380px]:tracking-[0.12em]"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="hidden min-h-10 items-center rounded-xl border-[3px] border-green-dark bg-pink-soft px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-green-dark shadow-green-mid max-md:inline-flex"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? "Fechar" : "Menu"}
        </button>
      </Container>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="hidden max-h-[75vh] overflow-y-auto border-t-2 border-t-[rgba(25,63,49,0.1)] bg-bg/95 px-0 pb-2.5 pt-1 max-md:block"
        >
          <Container>
            <nav className="grid gap-1.5">
              {mobileMenuLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border-[4px] border-green-dark bg-surface px-3.5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-green-dark shadow-green-mid"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={agendarHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="rounded-2xl border-[4px] border-green-dark bg-green-dark px-3.5 py-2.5 text-center text-xs font-black uppercase tracking-[0.1em] text-white shadow-[4px_4px_0_#cb5c88]"
              >
                Agendar
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
