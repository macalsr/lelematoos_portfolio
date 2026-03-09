const SAFE_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

export function sanitizeHref(href: string): string {
  const value = href.trim();
  if (!value) return "#";

  if (value.startsWith("#") || value.startsWith("/")) return value;

  try {
    const parsed = new URL(value);
    return SAFE_PROTOCOLS.has(parsed.protocol) ? value : "#";
  } catch {
    return "#";
  }
}
