import { Contato } from "@/src/components/Contato";
import { DadosEstruturados } from "@/src/components/DadosEstruturados";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { ProgressoRolagem } from "@/src/components/ProgressoRolagem";
import { Tratamentos } from "@/src/components/Tratamentos";
import { Rodape } from "@/src/components/Rodape";

export default function Home() {
  return (
    <>
      <DadosEstruturados />
      <ProgressoRolagem />
      <Header />
      <main>
        <Hero />
        <Tratamentos />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
