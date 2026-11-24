import { Consultorio } from "@/src/components/secoes/consultorio/Consultorio";
import { Contato } from "@/src/components/secoes/contato/Contato";
import { DadosEstruturados } from "@/src/components/seo/DadosEstruturados";
import { Depoimentos } from "@/src/components/secoes/depoimentos/Depoimentos";
import { Duvidas } from "@/src/components/secoes/duvidas/Duvidas";
import { Familia } from "@/src/components/secoes/familia/Familia";
import { Cabecalho } from "@/src/components/layout/Cabecalho";
import { Inicio } from "@/src/components/secoes/inicio/Inicio";
import { NavegacaoPorSecao } from "@/src/components/comportamento/NavegacaoPorSecao";
import { Prevenir } from "@/src/components/secoes/prevenir/Prevenir";
import { ProgressoRolagem } from "@/src/components/comportamento/ProgressoRolagem";
import { RevelarAoRolar } from "@/src/components/comportamento/RevelarAoRolar";
import { Resultados } from "@/src/components/secoes/resultados/Resultados";
import { Rodape } from "@/src/components/layout/Rodape";
import { Sobre } from "@/src/components/secoes/sobre/Sobre";
import { Tratamentos } from "@/src/components/secoes/tratamentos/Tratamentos";

export default function Home() {
  return (
    <>
      <DadosEstruturados />
      <ProgressoRolagem />
      <RevelarAoRolar />
      <NavegacaoPorSecao />
      <Cabecalho />
      <main>
        <Inicio />
        <Sobre />
        <Familia />
        <Tratamentos />
        <Prevenir />
        <Consultorio />
        <Resultados />
        <Depoimentos />
        <Duvidas />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
