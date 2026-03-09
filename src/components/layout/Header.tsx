"use client";

import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-[80] text-header-text transition-all duration-300 ${
        isScrolled
          ? "border-b border-b-header-text/20 bg-header-bg/94 shadow-[0_18px_44px_rgba(95,47,64,0.22)] backdrop-blur-xl"
          : "border-b border-b-header-text/10 bg-header-bg/86 backdrop-blur-[12px]"
      }`}
      style={{ position: "sticky", top: 0, zIndex: 80 }}
    >
      <Container
        className={`flex flex-wrap items-center justify-between gap-6 transition-all duration-300 max-md:gap-2 ${
          isScrolled ? "min-h-[72px] py-2 max-md:min-h-[58px]" : "min-h-[92px] py-3 max-md:min-h-[62px]"
        }`}
      >
        <a href={toSectionHref("#home")} className="flex min-w-0 flex-col gap-1.5 overflow-visible" onClick={closeMenu}>
          <div className="flex min-w-0 items-center gap-3 overflow-visible">
            {brandLogoImageUrl ? (
              <img
                src={brandLogoImageUrl}
                alt={brandLogoImageAlt}
                className={`w-auto shrink-0 object-contain transition-all duration-300 ${
                  isScrolled ? "h-9 max-w-[200px] max-md:h-7 max-md:max-w-[140px]" : "h-11 max-w-[220px] max-md:h-8 max-md:max-w-[150px]"
                }`}
              />
            ) : null}

            {brandDisplayName ? (
              <strong className="font-signature text-[30px] font-normal leading-[1.15] text-pink-dark max-md:text-[24px] max-[380px]:text-[22px]">
                {brandDisplayName}
              </strong>
            ) : null}
          </div>
          <span className="font-ui text-[10px] font-extrabold uppercase tracking-[0.34em] text-pink-dark/70 max-md:hidden">
            {brandTagline}
          </span>
        </a>

        <nav className="hidden min-w-0 items-center gap-2 rounded-full border border-pink-dark/12 bg-header-text/92 p-2 shadow-[0_12px_28px_rgba(83,39,55,0.12)] max-md:hidden md:flex">
          {navItems.map((item) =>
            item.cta ? (
              <Button
                key={getNavItemKey(item)}
                href={toSectionHref(item.href)}
                variant="navCta"
                className="border-header-text/30 bg-header-text text-header-bg shadow-[0_10px_24px_rgba(255,239,234,0.14)]"
              >
                {item.label}
              </Button>
            ) : (
              <a
                key={getNavItemKey(item)}
                href={toSectionHref(item.href)}
                className="font-heading whitespace-nowrap rounded-full px-4 py-3 text-[12px] font-black uppercase tracking-[0.18em] text-pink-dark transition-colors duration-200 hover:bg-header-bg hover:text-header-text focus-visible:bg-header-bg focus-visible:text-header-text max-[380px]:text-xs max-[380px]:tracking-[0.12em]"
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
          className={`hidden min-h-11 items-center rounded-full border px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-200 max-md:inline-flex ${
            isOpen
              ? "border-pink-dark/14 bg-header-text text-header-bg shadow-[0_12px_28px_rgba(83,39,55,0.14)]"
              : "border-pink-dark/12 bg-header-text/92 text-pink-dark shadow-[0_12px_28px_rgba(83,39,55,0.1)] hover:border-pink-dark/18 hover:bg-header-text"
          }`}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? "Fechar" : "Menu"}
        </button>
      </Container>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="hidden max-h-[75vh] overflow-y-auto border-t border-t-header-text/20 bg-header-bg/95 px-0 pb-3 pt-1.5 shadow-[0_20px_34px_rgba(83,39,55,0.22)] max-md:block"
        >
          <Container>
            <nav className="grid gap-2">
              {mobileMenuLinks.map((item) => (
                <a
                  key={getNavItemKey(item)}
                  href={toSectionHref(item.href)}
                  onClick={closeMenu}
                  className="font-heading rounded-[22px] border border-pink-dark/12 bg-header-text/90 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-pink-dark transition-colors duration-200 hover:bg-header-text hover:text-header-bg focus-visible:bg-header-text focus-visible:text-header-bg"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={toSectionHref(ctaItem?.href ?? agendarHref)}
                onClick={closeMenu}
                className="rounded-[22px] border border-header-text/30 bg-header-text px-4 py-3 text-center text-xs font-black uppercase tracking-[0.14em] text-header-bg"
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
