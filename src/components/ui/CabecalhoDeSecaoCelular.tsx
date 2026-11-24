type Props = {
  rotulo: string;
  titulo: string;
  idTitulo: string;
  escuro?: boolean;
  tamanho?: "grande" | "medio";
};

// Rótulo + título das seções na versão do celular (design "Site Completo").
export function CabecalhoDeSecaoCelular({
  rotulo,
  titulo,
  idTitulo,
  escuro = false,
  tamanho = "grande",
}: Props) {
  return (
    <div className="revelar flex flex-col gap-3">
      <span
        className={`text-[13px] font-medium animar-rotulo tracking-[.14em] uppercase ${
          escuro ? "text-menta" : "text-azul-escuro"
        }`}
      >
        {rotulo}
      </span>
      <h2
        id={idTitulo}
        className={`m-0 leading-[1.08] font-medium tracking-[-0.015em] text-pretty ${
          tamanho === "grande" ? "text-[34px]" : "text-[28px]"
        } ${escuro ? "text-creme" : "text-petroleo"}`}
      >
        {titulo}
      </h2>
    </div>
  );
}
