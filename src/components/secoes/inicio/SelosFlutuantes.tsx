import { inicio } from "@/src/content/inicio";
import { SelosComParalaxe } from "@/src/components/comportamento/SelosComParalaxe";
import { SeloInicio } from "@/src/components/ui/SeloInicio";
import { atrasoDeAnimacao, variaveisCss } from "@/src/lib/animacao";
import { TEMPOS_DE_ENTRADA } from "./temposDeEntrada";

// Ícone e cor de cada selo, na mesma ordem de `inicio.chips`.
const APARENCIA = [
  { icone: "♡", cor: "menta" },
  { icone: "✓", cor: "azul" },
] as const;

// Selos que flutuam ao lado da foto. Só aparecem no desktop.
export function SelosFlutuantes() {
  return (
    <SelosComParalaxe className="absolute right-[clamp(40px,8vw,120px)] bottom-[72px] z-[2] hidden flex-col items-end gap-3 largo:flex">
      {inicio.chips.map((texto, indice) => (
        <div
          key={texto}
          style={atrasoDeAnimacao(TEMPOS_DE_ENTRADA.seloFlutuante(indice))}
          className="animar-chip"
        >
          <div
            style={variaveisCss({
              "--duracao": `${6 + indice * 1.5}s`,
              "--atraso": `${indice * 0.8}s`,
            })}
            className="animar-flutuar"
          >
            <SeloInicio texto={texto} {...APARENCIA[indice]} />
          </div>
        </div>
      ))}
    </SelosComParalaxe>
  );
}
