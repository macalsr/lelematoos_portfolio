"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { SiteContent } from "@/types/site";

function toSectionHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

function getNavItemKey(item: SiteContent["nav"][number]) {
  return item.id ?? `${item.label}-${item.href}`;
}

type HeaderProps = {
  content: SiteContent;
};

export function Header({ content }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuLinks = content.nav.filter((item) => !item.cta);
  const ctaItem = content.nav.find((item) => item.cta);

  const agendarHref = buildWhatsAppUrl(
    content.contact.whatsappPhone,
    "Oi! Quero falar sobre produtos da marca Lele Matoos.",
  );

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="sticky top-0 z-[80] border-b-2 border-b-[rgba(25,63,49,0.1)] bg-[rgba(245,239,232,0.95)] backdrop-blur-[10px]"
      style={{ position: "sticky", top: 0, zIndex: 80 }}
    >
      <Container className="flex min-h-[84px] flex-wrap items-center justify-between gap-6 max-md:min-h-[52px] max-md:gap-2 max-md:py-1">
        <a href={toSectionHref("#home")} className="flex min-w-0 flex-col gap-1" onClick={closeMenu}>
          <strong className="text-[22px] font-black uppercase tracking-[0.18em] text-green-dark max-md:text-[15px] max-md:tracking-[0.09em] max-[380px]:text-[14px]">
            {content.brand.name}
          </strong>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-muted max-md:hidden">
            {content.brand.tagline}
          </span>
        </a>

        <nav className="flex min-w-0 flex-wrap items-center gap-[18px] max-md:hidden">
          {content.nav.map((item) =>
            item.cta ? (
              <Button key={getNavItemKey(item)} href={toSectionHref(item.href)} variant="navCta">
                {item.label}
              </Button>
            ) : (
              <a
                key={getNavItemKey(item)}
                href={toSectionHref(item.href)}
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
                  key={getNavItemKey(item)}
                  href={toSectionHref(item.href)}
                  onClick={closeMenu}
                  className="rounded-2xl border-[4px] border-green-dark bg-surface px-3.5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-green-dark shadow-green-mid"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={toSectionHref(ctaItem?.href ?? agendarHref)}
                onClick={closeMenu}
                className="rounded-2xl border-[4px] border-green-dark bg-green-dark px-3.5 py-2.5 text-center text-xs font-black uppercase tracking-[0.1em] text-white shadow-[4px_4px_0_#cb5c88]"
              >
                {ctaItem?.label ?? "Agendar"}
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
