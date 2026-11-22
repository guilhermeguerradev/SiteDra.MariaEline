import { DadosEstruturados } from "@/src/components/DadosEstruturados";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { ProgressoRolagem } from "@/src/components/ProgressoRolagem";
import { Rodape } from "@/src/components/Rodape";

export default function Home() {
  return (
    <>
      <DadosEstruturados />
      <ProgressoRolagem />
      <Header />
      <main>
        <Hero />
      </main>
      <Rodape />
    </>
  );
}
