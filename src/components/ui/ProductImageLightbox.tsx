"use client";

import { useEffect, useState } from "react";

type ProductImageLightboxProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ProductImageLightbox({ src, alt, className }: ProductImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="h-full w-full"
        aria-label="Ampliar imagem do produto"
      >
        <img src={src} alt={alt} className={className} />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 sm:p-8"
          onClick={() => setIsOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 rounded-full bg-surface px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-green-dark sm:right-3 sm:top-3"
            >
              Fechar
            </button>
            <img
              src={src}
              alt={alt}
              className="max-h-[85vh] w-full rounded-xl object-contain object-center"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
