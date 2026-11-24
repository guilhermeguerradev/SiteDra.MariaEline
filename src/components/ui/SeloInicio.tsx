type Props = {
  texto: string;
  icone: string;
  cor: "menta" | "azul";
};

// Selo flutuante do inicio. Só aparece no desktop (o design do celular não tem).
export function SeloInicio({ texto, icone, cor }: Props) {
  const fundoIcone = cor === "menta" ? "bg-menta" : "bg-azul";
  return (
    <div className="flex items-center gap-3 rounded-[20px] border border-creme/35 bg-petroleo/75 px-5 py-3.5 text-[15px] text-creme backdrop-blur-[14px]">
      <span
        aria-hidden="true"
        className={`flex size-8 items-center justify-center rounded-full text-petroleo ${fundoIcone}`}
      >
        {icone}
      </span>
      {texto}
    </div>
  );
}
