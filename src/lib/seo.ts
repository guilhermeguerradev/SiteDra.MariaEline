import { dadosDeContato } from "@/src/content/dadosDeContato";
import { cabecalho } from "@/src/content/cabecalho";
import { inicio } from "@/src/content/inicio";
import { montarUrl } from "@/src/lib/site";

// Dados estruturados schema.org/Dentist, montados só com dados já confirmados.
// Com a URL do site, inclui também "url" e "image".
export function montarDadosEstruturados(urlSite?: string) {
  const { endereco } = dadosDeContato;
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: cabecalho.nome,
    description: inicio.frase,
    telephone: `+${dadosDeContato.whatsapp}`,
    email: dadosDeContato.email,
    sameAs: [dadosDeContato.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: [endereco.logradouro, endereco.complemento]
        .filter(Boolean)
        .join(", "),
      addressLocality: endereco.cidade,
      addressRegion: endereco.uf,
      addressCountry: "BR",
    },
    ...(urlSite && {
      url: urlSite,
      image: montarUrl(urlSite, inicio.foto.src),
    }),
  };
}

// Evita que um "</script>" dentro dos dados feche a tag por engano.
export function serializarDadosEstruturados(urlSite?: string): string {
  return JSON.stringify(montarDadosEstruturados(urlSite)).replace(
    /</g,
    "\\u003c",
  );
}
