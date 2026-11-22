type Props = {
  texto: string;
  icone: string;
  cor: "menta" | "azul";
  variante: "mobile" | "desktop";
};

const estilos = {
  mobile:
    "gap-3 rounded-[18px] border-creme/25 bg-creme/10 px-[18px] py-3 text-[15px]",
  desktop:
    "gap-3 rounded-[20px] border-creme/35 bg-petroleo/75 px-5 py-3.5 text-[15px] backdrop-blur-[14px]",
} as const;

const tamanhoIcone = {
  mobile: "size-[30px]",
  desktop: "size-8",
} as const;

export function ChipHero({ texto, icone, cor, variante }: Props) {
  const fundoIcone = cor === "menta" ? "bg-menta" : "bg-azul";
  return (
    <div className={`flex items-center border text-creme ${estilos[variante]}`}>
      <span
        aria-hidden="true"
        className={`flex items-center justify-center rounded-full text-petroleo ${fundoIcone} ${tamanhoIcone[variante]}`}
      >
        {icone}
      </span>
      {texto}
    </div>
  );
}
