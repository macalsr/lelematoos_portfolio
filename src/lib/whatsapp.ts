const WHATSAPP_BASE_URL = "https://wa.me";

export function buildWhatsAppUrl(phone: string, message: string): string {
  return `${WHATSAPP_BASE_URL}/${phone}?text=${encodeURIComponent(message)}`;
}
