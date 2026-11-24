import { describe, expect, it } from "vitest";
import { z } from "@/src/content/zod";
import { globalConfig } from "zod/v4/core";

describe("zod do site", () => {
  it("roda sem compilar esquemas com Function (compatível com a CSP)", () => {
    expect(globalConfig.jitless).toBe(true);
  });

  it("continua validando normalmente", () => {
    const esquema = z.object({ numero: z.string().regex(/^\d+$/) });
    expect(esquema.safeParse({ numero: "123" }).success).toBe(true);
    expect(esquema.safeParse({ numero: "abc" }).success).toBe(false);
  });
});
