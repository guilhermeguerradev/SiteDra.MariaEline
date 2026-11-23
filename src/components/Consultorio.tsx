import Image from "next/image";
import { consultorio } from "@/src/domain/consultorio";
import { ConsultorioCelular } from "./celular/ConsultorioCelular";

export function Consultorio() {
  const { exclusivo } = consultorio;
  return (
    <section
      id="consultorio"
      aria-labelledby="titulo-consultorio"
      className="scroll-mt-6 nav:scroll-mt-20 bg-gelo"
    >
      <ConsultorioCelular />
      <div className="relative hidden px-[clamp(20px,5vw,64px)] py-[clamp(64px,min(10vw,13vh),140px)] nav:block">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-14">
          <div className="revelar flex max-w-[680px] flex-col gap-4">
            <span className="text-sm font-medium animar-rotulo tracking-[.14em] text-azul-escuro uppercase">
              {consultorio.rotulo}
            </span>
            <h2
              id="titulo-consultorio"
              className="m-0 text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-medium tracking-[-0.015em] text-pretty text-petroleo"
            >
              {consultorio.titulo}
            </h2>
          </div>

          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4 p-0">
            {consultorio.fotos.map((foto) => (
              <li
                key={foto.src}
                className="revelar-foto group h-[340px] overflow-hidden rounded-[28px]"
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  width={foto.largura}
                  height={foto.altura}
                  sizes="(min-width: 1180px) 300px, (min-width: 600px) 50vw, 100vw"
                  style={{ objectPosition: foto.posicao }}
                  className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
                />
              </li>
            ))}
          </ul>

          <div className="revelar grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-[clamp(24px,4vw,56px)] rounded-[32px] bg-white p-3.5 shadow-[0_12px_40px_rgb(35_63_69/0.06)]">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={exclusivo.foto.src}
                alt={exclusivo.foto.alt}
                width={exclusivo.foto.largura}
                height={exclusivo.foto.altura}
                sizes="(min-width: 1180px) 560px, 100vw"
                style={{ objectPosition: exclusivo.foto.posicao }}
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 px-[clamp(8px,2vw,24px)] pt-3 pb-5">
              <span className="text-sm font-medium animar-rotulo tracking-[.14em] text-azul-escuro uppercase">
                {exclusivo.rotulo}
              </span>
              <p className="m-0 text-[clamp(26px,2.6vw,34px)] leading-[1.15] font-medium text-pretty text-petroleo">
                {exclusivo.destaque}
              </p>
              <p className="m-0 text-[17px] leading-[1.65] text-pretty">
                {exclusivo.texto}
              </p>
              <div className="mt-1.5 flex flex-col gap-0.5">
                <span className="text-[19px] font-medium text-petroleo">
                  {exclusivo.nome}
                </span>
                <span className="text-[15px] text-azul-escuro">
                  {exclusivo.titulos}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
