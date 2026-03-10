"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProductImageLightboxProps = {
  src: string;
  alt: string;
  className?: string;
  triggerClassName?: string;
};

export function ProductImageLightbox({
  src,
  alt,
  className,
  triggerClassName = "h-full w-full",
}: ProductImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`group relative ${triggerClassName}`}
        aria-label="Ampliar imagem do produto"
      >
        <Image src={src} alt={alt} fill className={className} />
        <span className="pointer-events-none absolute inset-x-4 bottom-4 rounded-full border border-white/22 bg-header-bg/88 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-header-text opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          Ampliar imagem
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(47,22,31,0.82)] p-4 backdrop-blur-md sm:p-8"
          onClick={() => setIsOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div className="editorial-panel relative w-full max-w-5xl rounded-[30px] p-3 sm:p-4 max-h-[92vh] overflow-y-auto" onClick={(event) => event.stopPropagation()}>
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-green-dark/12 bg-surface px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-green-dark"
              >
                Fechar
              </button>
            </div>
            <div className="overflow-hidden rounded-[24px] bg-[linear-gradient(155deg,rgba(var(--color-accent-soft),0.82),rgba(var(--color-surface),0.98)_42%,rgba(var(--color-surface-alt),0.98))] p-4 sm:p-6">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={1200}
                className="max-h-[82vh] w-full rounded-[20px] object-contain object-center"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
