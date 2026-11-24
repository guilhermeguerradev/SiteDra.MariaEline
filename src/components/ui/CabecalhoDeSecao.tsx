import { RotuloDeSecao } from "./RotuloDeSecao";
import { TituloDeSecao } from "./TituloDeSecao";

type Props = {
  rotulo: string;
  titulo: string;
  idTitulo: string;
  fundo?: "claro" | "escuro";
};

// Rótulo e título de uma seção, empilhados, na versão para telas grandes.
export function CabecalhoDeSecao({
  rotulo,
  titulo,
  idTitulo,
  fundo = "claro",
}: Props) {
  return (
    <div className="revelar flex max-w-[680px] flex-col gap-4">
      <RotuloDeSecao fundo={fundo}>{rotulo}</RotuloDeSecao>
      <TituloDeSecao id={idTitulo} fundo={fundo}>
        {titulo}
      </TituloDeSecao>
    </div>
  );
}
