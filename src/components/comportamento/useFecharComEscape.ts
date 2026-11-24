import { useEffect } from "react";

// Chama `aoFechar` quando a pessoa aperta Esc, enquanto `ativo` for verdadeiro.
export function useFecharComEscape(ativo: boolean, aoFechar: () => void) {
  useEffect(() => {
    if (!ativo) return;
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") aoFechar();
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [ativo, aoFechar]);
}
