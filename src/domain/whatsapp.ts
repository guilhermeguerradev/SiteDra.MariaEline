// Monta o link do WhatsApp a partir do número (55 + DDD + número).
// A mensagem inicial é opcional e só entra quando o texto vem do design.
export function montarLinkWhatsapp(numero: string, mensagem?: string): string {
  const base = `https://wa.me/${numero}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}
