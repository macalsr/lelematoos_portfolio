"use client";

import { useState } from "react";
import { siteContent as mockSiteContent } from "@/data/site";
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
  const navItems = content.nav.length > 0 ? content.nav : mockSiteContent.nav;
  const brandName = content.brand.name;
  const brandDisplayName = brandName || mockSiteContent.brand.name;
  const brandTagline = content.brand.tagline;
  const brandLogoImageUrl = content.brand.logoImageUrl;
  const brandLogoImageAlt = content.brand.logoImageAlt || brandName || "Logo da marca";
  const mobileMenuLinks = navItems.filter((item) => !item.cta);
  const ctaItem = navItems.find((item) => item.cta);

  const agendarHref = buildWhatsAppUrl(
    content.contact.whatsappPhone,
    "Oi! Quero falar sobre produtos da marca Lele Matoos.",
  );

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="sticky top-0 z-[80] border-b border-b-header-text/20 bg-header-bg/95 text-header-text backdrop-blur-[10px]"
      style={{ position: "sticky", top: 0, zIndex: 80 }}
    >
      <Container className="flex min-h-[84px] flex-wrap items-center justify-between gap-6 max-md:min-h-[52px] max-md:gap-2 max-md:py-1">
        <a href={toSectionHref("#home")} className="flex min-w-0 flex-col gap-1" onClick={closeMenu}>
          <div className="flex min-w-0 items-center gap-2">
            {brandLogoImageUrl ? (
              <img
                src={brandLogoImageUrl}
                alt={brandLogoImageAlt}
                className="h-10 w-auto max-w-[220px] shrink-0 object-contain max-md:h-7 max-md:max-w-[150px]"
              />
            ) : null}

            {brandDisplayName ? (
              <strong className="font-logo truncate text-[22px] font-black uppercase tracking-[0.18em] text-header-text max-md:text-[15px] max-md:tracking-[0.09em] max-[380px]:text-[14px]">
                {brandDisplayName}
              </strong>
            ) : null}
          </div>
          <span className="font-ui text-[11px] font-extrabold uppercase tracking-[0.24em] text-header-text/80 max-md:hidden">
            {brandTagline}
          </span>
        </a>

        <nav className="flex min-w-0 flex-wrap items-center gap-[18px] max-md:hidden">
          {navItems.map((item) =>
            item.cta ? (
              <Button
                key={getNavItemKey(item)}
                href={toSectionHref(item.href)}
                variant="navCta"
                className="border-header-text/30 bg-header-text text-header-bg"
              >
                {item.label}
              </Button>
            ) : (
              <a
                key={getNavItemKey(item)}
                href={toSectionHref(item.href)}
                className="font-heading whitespace-nowrap text-[13px] font-black uppercase tracking-[0.16em] text-header-text max-[380px]:text-xs max-[380px]:tracking-[0.12em]"
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
          className="hidden min-h-10 items-center rounded-xl border border-header-text/35 bg-header-text/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-header-text max-md:inline-flex"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? "Fechar" : "Menu"}
        </button>
      </Container>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="hidden max-h-[75vh] overflow-y-auto border-t border-t-header-text/20 bg-header-bg/95 px-0 pb-2.5 pt-1 max-md:block"
        >
          <Container>
            <nav className="grid gap-1.5">
              {mobileMenuLinks.map((item) => (
                <a
                  key={getNavItemKey(item)}
                  href={toSectionHref(item.href)}
                  onClick={closeMenu}
                  className="font-heading rounded-2xl border border-header-text/25 bg-header-text/10 px-3.5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-header-text"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={toSectionHref(ctaItem?.href ?? agendarHref)}
                onClick={closeMenu}
                className="rounded-2xl border border-header-text/30 bg-header-text px-3.5 py-2.5 text-center text-xs font-black uppercase tracking-[0.1em] text-header-bg"
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
