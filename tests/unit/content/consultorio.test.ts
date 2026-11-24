import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { consultorio } from "@/src/content/consultorio";
import { secaoExiste } from "@/src/content/navegacao";
import { caminhoPublico } from "../auxiliares";

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
      expect(existsSync(caminhoPublico(foto.src))).toBe(true);
    }
  });

  it("as seções entram na página", () => {
    expect(secaoExiste("familia")).toBe(true);
    expect(secaoExiste("consultorio")).toBe(true);
  });
});
