import type { Trecho } from "@/src/content/sobre";

type Props = {
  trechos: readonly Trecho[];
  className: string;
};

// Parágrafo em que alguns trechos aparecem em destaque. Usado pelas duas
// versões (larga e celular) da seção Sobre, que só diferem no tamanho do texto.
export function ParagrafoComDestaque({ trechos, className }: Props) {
  return (
    <p className={`m-0 text-pretty ${className}`}>
      {trechos.map((trecho) =>
        trecho.emDestaque ? (
          <strong key={trecho.texto} className="text-petroleo">
            {trecho.texto}
          </strong>
        ) : (
          trecho.texto
        ),
      )}
    </p>
  );
}
