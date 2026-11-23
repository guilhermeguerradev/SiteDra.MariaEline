import { Consultorio } from "@/src/components/Consultorio";
import { Contato } from "@/src/components/Contato";
import { DadosEstruturados } from "@/src/components/DadosEstruturados";
import { Depoimentos } from "@/src/components/Depoimentos";
import { Duvidas } from "@/src/components/Duvidas";
import { Familia } from "@/src/components/Familia";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { Prevenir } from "@/src/components/Prevenir";
import { ProgressoRolagem } from "@/src/components/ProgressoRolagem";
import { RevelarAoRolar } from "@/src/components/RevelarAoRolar";
import { Resultados } from "@/src/components/Resultados";
import { Rodape } from "@/src/components/Rodape";
import { Sobre } from "@/src/components/Sobre";
import { Tratamentos } from "@/src/components/Tratamentos";

export default function Home() {
  return (
    <>
      <DadosEstruturados />
      <ProgressoRolagem />
      <RevelarAoRolar />
      <Header />
      <main>
        <Hero />
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
