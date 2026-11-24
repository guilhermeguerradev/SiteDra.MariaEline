import { z } from "@/src/content/zod";

const urlSchema = z.url({ protocol: /^https?$/ });

// Lê o endereço público do site (ex.: https://dramariaeline.pages.dev ou
// https://dramariaeline.com.br) da variável NEXT_PUBLIC_SITE_URL.
// Sem a variável, ou com valor inválido, devolve undefined e o site funciona
// normalmente, só sem URL absoluta (og:image, sitemap e url no JSON-LD).
export function obterUrlSite(
  valor: string | undefined = process.env.NEXT_PUBLIC_SITE_URL,
): string | undefined {
  const texto = valor?.trim();
  if (!texto) return undefined;
  const resultado = urlSchema.safeParse(texto);
  if (!resultado.success) return undefined;
  return new URL(resultado.data).origin;
}

export function montarUrl(base: string, caminho: string): string {
  return new URL(caminho, `${base}/`).toString();
}
