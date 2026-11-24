import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
  test: {
    include: [
      "src/**/*.test.ts",
      "tests/unit/**/*.test.ts",
      "tests/componentes/**/*.test.tsx",
    ],
    // A cobertura mede a lógica (conteúdo e funções puras). Os componentes
    // visuais são cobertos pelos testes de navegador, que o v8 não enxerga.
    coverage: {
      provider: "v8",
      include: ["src/lib/**", "src/content/**"],
      thresholds: { statements: 90, branches: 85, functions: 90, lines: 90 },
    },
  },
});
