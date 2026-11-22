import { contatos } from "./contatos";
import { cabecalho, hero } from "./hero";
import { montarUrl } from "./site";

// Dados estruturados schema.org/Dentist, montados só com dados já confirmados.
// Com a URL do site, inclui também "url" e "image".
export function montarDadosEstruturados(urlSite?: string) {
  const { endereco } = contatos;
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: cabecalho.nome,
    description: hero.frase,
    telephone: `+${contatos.whatsapp}`,
    email: contatos.email,
    sameAs: [contatos.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: endereco.logradouro,
      addressLocality: endereco.cidade,
      addressRegion: endereco.uf,
      addressCountry: "BR",
    },
    ...(urlSite && {
      url: urlSite,
      image: montarUrl(urlSite, hero.foto.src),
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
