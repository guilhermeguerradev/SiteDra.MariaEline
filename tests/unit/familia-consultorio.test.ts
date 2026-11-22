import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { consultorio } from "@/src/domain/consultorio";
import { familia } from "@/src/domain/familia";
import { secaoExiste } from "@/src/domain/navegacao";

function arquivoPublico(src: string): string {
  return `public${src}`;
}

describe("seção Família", () => {
  it("usa os textos do design", () => {
    expect(familia.titulo).toBe(
      "Uma experiência mais tranquila para toda a sua família",
    );
    expect(familia.perguntas).toEqual([
      "Seu filho tem medo de dentista?",
      "Você adia a consulta por ansiedade?",
      "Seus pais precisam de um cuidado mais paciente?",
    ]);
    expect(familia.fecho).toBe(
      "Sua família merece se sentir em casa no consultório.",
    );
  });

  it("tem as duas fotos, com texto alternativo e arquivo existente", () => {
    for (const foto of [familia.fotoPrincipal, familia.fotoDestaque]) {
      expect(foto.alt.trim()).not.toBe("");
      expect(existsSync(arquivoPublico(foto.src))).toBe(true);
    }
  });
});

describe("seção Consultório", () => {
  it("usa os textos do design", () => {
    expect(consultorio.titulo).toBe(
      "Um espaço pensado para você se sentir bem",
    );
    expect(consultorio.exclusivo.destaque).toBe(
      "Do agendamento ao retorno, você é atendido sempre por mim.",
    );
    expect(consultorio.exclusivo.titulos).toBe(
      "Cirurgiã-Dentista · Saúde da Família · CRO-MG 64493",
    );
  });

  it("tem 4 fotos na galeria e 1 de destaque, todas com alt e arquivo", () => {
    expect(consultorio.fotos).toHaveLength(4);
    for (const foto of [...consultorio.fotos, consultorio.exclusivo.foto]) {
      expect(foto.alt.trim()).not.toBe("");
      expect(existsSync(arquivoPublico(foto.src))).toBe(true);
    }
  });

  it("as seções entram na página", () => {
    expect(secaoExiste("familia")).toBe(true);
    expect(secaoExiste("consultorio")).toBe(true);
  });
});
