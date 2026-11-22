import { Contato } from "@/src/components/Contato";
import { DadosEstruturados } from "@/src/components/DadosEstruturados";
import { Duvidas } from "@/src/components/Duvidas";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { Prevenir } from "@/src/components/Prevenir";
import { ProgressoRolagem } from "@/src/components/ProgressoRolagem";
import { Rodape } from "@/src/components/Rodape";
import { Sobre } from "@/src/components/Sobre";
import { Tratamentos } from "@/src/components/Tratamentos";

export default function Home() {
  return (
    <>
      <DadosEstruturados />
      <ProgressoRolagem />
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Tratamentos />
        <Prevenir />
        <Duvidas />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
