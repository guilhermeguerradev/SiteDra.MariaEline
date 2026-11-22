import { z } from "zod";
import { contatos } from "./contatos";

// Textos da seção Contato. Fonte: docs/design/Site Completo.dc.html.
// Textos extras (prédio, horário e chamada) confirmados pela dona do projeto
// em 2026-11-22 (DECISOES D19).
export const contato = {
  rotulo: "Agendamento",
  titulo: "Vamos cuidar do sorriso da sua família?",
  texto:
    "Atendo com hora marcada e horários flexíveis. Fale direto comigo pelo WhatsApp e combinamos o melhor momento para você.",
  botao: "Agendar pelo WhatsApp",
  instagram: "Instagram",
  predio: "Prédio Empório Bahamas",
  sala: "Sala 1007",
  atendimento: "Com hora marcada, em horários flexíveis combinados com você",
  mapaTitulo: "Localização do consultório",
  abrirRota: "Abrir rota →",
} as const;

// Endereço em três linhas, como no design.
export function linhasEndereco(): string[] {
  const { logradouro, bairro, cidade, uf } = contatos.endereco;
  return [
    `${logradouro} · ${contato.sala}`,
    contato.predio,
    `${bairro}, ${cidade} – ${uf}`,
  ];
}

// Mapa incorporado do Google, gerado para o endereço do consultório.
const mapaSchema = z.url({ protocol: /^https$/ }).refine((valor) => {
  const url = new URL(valor);
  return (
    url.hostname === "www.google.com" && url.pathname.startsWith("/maps/embed")
  );
}, "O mapa deve ser um embed do Google Maps");

export const urlMapaIncorporado = mapaSchema.parse(
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.3366730234616!2d-43.348662899999994!3d-21.7672272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b5e02e55553%3A0x9ecf3ef5579b2103!2sAv.%20Bar%C3%A3o%20do%20Rio%20Branco%2C%202872%20-%20Sl%201007%20-%20Centro%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036010-021!5e0!3m2!1spt-BR!2sbr!4v1795369875671!5m2!1spt-BR!2sbr",
);
