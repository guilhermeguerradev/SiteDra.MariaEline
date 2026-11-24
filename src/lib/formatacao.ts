import type { DadosDeContato } from "@/src/content/dadosDeContato";

// "5532988747651" -> "(32) 98874-7651". Aceita número com ou sem o 55 do Brasil.
export function formatarTelefone(numero: string): string {
  const digitos = numero.replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, "");
  const ddd = digitos.slice(0, 2);
  const resto = digitos.slice(2);
  const corte = resto.length - 4;
  return `(${ddd}) ${resto.slice(0, corte)}-${resto.slice(corte)}`;
}

// "Av. Barão do Rio Branco, 2872 · Sl 1007, Juiz de Fora – MG" (texto do design).
export function formatarEndereco(endereco: DadosDeContato["endereco"]): string {
  const rua = endereco.complemento
    ? `${endereco.logradouro} · ${endereco.complemento}`
    : endereco.logradouro;
  return `${rua}, ${endereco.cidade} – ${endereco.uf}`;
}

// Link de busca no Google Maps, sem chave de API.
export function montarLinkMapa(endereco: DadosDeContato["endereco"]): string {
  const consulta = `${endereco.logradouro} - ${endereco.bairro}, ${endereco.cidade} - ${endereco.uf}`;
  return `https://www.google.com/maps/search/?${new URLSearchParams({ api: "1", query: consulta }).toString()}`;
}
