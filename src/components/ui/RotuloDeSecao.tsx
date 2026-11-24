type Props = {
  /** Cor do fundo onde o rótulo aparece. */
  fundo?: "claro" | "escuro";
  /** Tamanho do texto: o padrão é o das telas grandes (14 px). */
  tamanho?: "padrao" | "medio" | "pequeno" | "minimo";
  children: React.ReactNode;
};

const COR = {
  claro: "text-azul-escuro",
  escuro: "text-menta",
} as const;

// Os valores precisam estar escritos por inteiro para o Tailwind enxergá-los.
const TAMANHO = {
  padrao: "",
  medio: "[--rotulo-tamanho:13px] [--rotulo-altura-linha:1.5]",
  pequeno: "[--rotulo-tamanho:12px] [--rotulo-altura-linha:16px]",
  minimo: "[--rotulo-tamanho:11px] [--rotulo-altura-linha:1.5]",
} as const;

// Rótulo pequeno em maiúsculas que fica acima do título de uma seção.
export function RotuloDeSecao({
  fundo = "claro",
  tamanho = "padrao",
  children,
}: Props) {
  return (
    <span
      className={`rotulo-secao animar-rotulo ${COR[fundo]} ${TAMANHO[tamanho]}`}
    >
      {children}
    </span>
  );
}
