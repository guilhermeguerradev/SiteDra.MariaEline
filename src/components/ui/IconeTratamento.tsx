import type { IdTratamento } from "@/src/content/tratamentos";

type Props = { id: IdTratamento };

const DENTE =
  "M8 34C8 26 6 20 6 14C6 8 10 5 14 5C17 5 18 7 20 7C22 7 23 5 26 5C30 5 34 8 34 14C34 20 32 26 32 34C32 36 29 36 28 33L25 25C24 22 16 22 15 25L12 33C11 36 8 36 8 34Z";

const traco24 = {
  viewBox: "0 0 24 24",
  strokeWidth: 1.4,
} as const;

const traco40 = {
  viewBox: "0 0 40 40",
  strokeWidth: 2.2,
} as const;

function Desenho({ id }: Props) {
  switch (id) {
    case "prevencao":
      return (
        <>
          <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
          <path d="M9 12l2 2 4-4" />
        </>
      );
    case "limpeza":
      return <path d="M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z" />;
    case "restauracoes":
      return (
        <>
          <path d={DENTE} />
          <circle cx="20" cy="14" r="3" />
        </>
      );
    case "extracoes":
      return <path d={DENTE} />;
    case "periodontal":
      return (
        <>
          <path d="M3 9c3 3 6 3 9 0s6-3 9 0" />
          <path d="M7 11v7M12 10v8M17 11v7" />
        </>
      );
    case "coroas":
      return <path d="M4 10l3-5 5 3 5-3 3 5-2 9H6z" />;
    case "proteses":
      return (
        <>
          <path d="M4 14c0-4 3.5-7 8-7s8 3 8 7" />
          <path d="M7 14v3M10 13v4M14 13v4M17 14v3" />
        </>
      );
    case "clareamento":
      return <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />;
  }
}

export function IconeTratamento({ id }: Props) {
  const usaDente = id === "restauracoes" || id === "extracoes";
  const medidas = usaDente ? traco40 : traco24;
  return (
    <svg
      width="26"
      height="26"
      viewBox={medidas.viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={medidas.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <Desenho id={id} />
    </svg>
  );
}
