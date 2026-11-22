// Monta o link do WhatsApp a partir do número (55 + DDD + número).
// Sem mensagem inicial: o texto não está no PRD e não deve ser inventado.
export function montarLinkWhatsapp(numero: string): string {
  return `https://wa.me/${numero}`;
}
