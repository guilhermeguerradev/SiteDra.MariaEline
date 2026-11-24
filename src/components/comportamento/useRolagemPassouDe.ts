import { useEffect, useState } from "react";

// Diz se a página já rolou mais do que `limite` pixels. Atualiza ao rolar.
export function useRolagemPassouDe(limite: number): boolean {
  const [passou, setPassou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setPassou(window.scrollY > limite);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, [limite]);

  return passou;
}
