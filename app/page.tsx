import { DadosEstruturados } from "@/src/components/DadosEstruturados";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { ProgressoRolagem } from "@/src/components/ProgressoRolagem";

export default function Home() {
  return (
    <>
      <DadosEstruturados />
      <ProgressoRolagem />
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
