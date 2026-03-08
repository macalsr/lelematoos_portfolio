import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant =
  | "navCta"
  | "miniPrimary"
  | "miniSecondary"
  | "contactAction"
  | "contactMain"
  | "floating";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant: Variant;
};

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> &
  BaseProps & {
    href: string;
  };

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  BaseProps & {
    href?: never;
  };

function isWhatsAppHref(href: string): boolean {
  return href.includes("wa.me") || href.includes("api.whatsapp.com");
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[1.05em] w-[1.05em] shrink-0"
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.49 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.65a11.87 11.87 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.34 11.92-11.91 0-3.18-1.24-6.17-3.47-8.43ZM12.07 21.8a9.84 9.84 0 0 1-5.01-1.37l-.36-.22-3.74.98 1-3.64-.24-.37a9.85 9.85 0 1 1 8.35 4.62Zm5.4-7.37c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.1-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.03-1.41.25-.7.25-1.28.18-1.41-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

const variantStyles: Record<Variant, string> = {
  navCta:
    "rounded-full bg-pink-soft px-[18px] py-3 text-[13px] max-md:text-xs",
  miniPrimary:
    "rounded-2xl bg-button-primary px-4 py-[14px] text-center text-xs text-white max-md:py-3",
  miniSecondary:
    "rounded-2xl bg-button-secondary px-4 py-[14px] text-center text-xs max-md:py-3",
  contactAction:
    "rounded-[20px] bg-surface px-[18px] py-[18px] text-[13px] tracking-[0.12em] max-md:text-xs max-md:leading-[1.5]",
  contactMain:
    "rounded-[22px] bg-button-primary px-[18px] py-[18px] text-center text-[13px] tracking-[0.15em] text-white max-md:text-xs",
  floating:
    "fixed bottom-3 left-3 right-3 z-[60] rounded-full bg-button-secondary px-[18px] py-[14px] text-center text-[13px] sm:bottom-[18px] sm:left-auto sm:right-[18px]",
};

const baseStyle =
  "font-ui border border-green-dark/20 font-black uppercase tracking-[0.14em] max-md:tracking-[0.11em]";

function isAnchorProps(props: AnchorProps | NativeButtonProps): props is AnchorProps {
  return typeof (props as AnchorProps).href === "string";
}

export function Button(props: AnchorProps | NativeButtonProps) {
  const className = `${baseStyle} ${variantStyles[props.variant]} ${props.className ?? ""}`;

  if (isAnchorProps(props)) {
    const { children, variant, className: classNameProp, ...anchorProps } = props;
    void variant;
    void classNameProp;

    const hasWhatsAppIcon = isWhatsAppHref(anchorProps.href);
    return (
      <a className={className} {...anchorProps}>
        {hasWhatsAppIcon ? (
          <span className="inline-flex items-center justify-center gap-2">
            <WhatsAppIcon />
            <span>{children}</span>
          </span>
        ) : (
          children
        )}
      </a>
    );
  }

  const { children, variant, className: classNameProp, ...buttonProps } = props;
  void variant;
  void classNameProp;
  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}
