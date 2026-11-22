import { contatos } from "./contatos";
import { cabecalho, hero } from "./hero";

// Dados estruturados schema.org/Dentist, montados só com dados já confirmados.
export function montarDadosEstruturados() {
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
  };
}

// Evita que um "</script>" dentro dos dados feche a tag por engano.
export function serializarDadosEstruturados(): string {
  return JSON.stringify(montarDadosEstruturados()).replace(/</g, "\u003c");
}
