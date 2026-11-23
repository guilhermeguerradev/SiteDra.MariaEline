import Image from "next/image";
import { sobre } from "@/src/domain/sobre";
import { SobreCelular } from "./celular/SobreCelular";

export function Sobre() {
  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="relative scroll-mt-0 nav:scroll-mt-24 overflow-hidden"
    >
      <SobreCelular />
      <div className="relative hidden px-[clamp(20px,5vw,64px)] py-[clamp(80px,10vw,140px)] nav:block">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full opacity-25"
        >
          <path
            d="M-20 480 C 300 380, 520 600, 820 460 S 1240 300, 1460 380"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            className="text-azul"
          />
        </svg>

        <div className="relative mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(40px,6vw,96px)]">
          <div className="revelar relative aspect-[4/5] overflow-hidden rounded-[36px] shadow-[0_30px_60px_rgb(35_63_69/0.14)]">
            <Image
              src={sobre.foto.src}
              alt={sobre.foto.alt}
              width={sobre.foto.largura}
              height={sobre.foto.altura}
              sizes="(min-width: 1180px) 560px, 100vw"
              className="size-full object-cover object-[50%_35%]"
            />
          </div>

          <div className="revelar flex flex-col gap-6">
            <span className="text-sm font-medium tracking-[.14em] text-azul-escuro uppercase">
              {sobre.rotulo}
            </span>
            <h2
              id="titulo-sobre"
              className="m-0 text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-medium tracking-[-0.015em] text-pretty text-petroleo"
            >
              {sobre.titulo}
            </h2>
            {sobre.paragrafos.map((trechos) => (
              <p
                key={trechos[0].texto}
                className="m-0 text-lg leading-[1.7] text-pretty"
              >
                {trechos.map((trecho) =>
                  trecho.destaque ? (
                    <strong key={trecho.texto} className="text-petroleo">
                      {trecho.texto}
                    </strong>
                  ) : (
                    trecho.texto
                  ),
                )}
              </p>
            ))}
            <ul className="m-0 mt-1 flex list-none flex-wrap gap-2.5 p-0">
              {sobre.credenciais.map((credencial) => (
                <li
                  key={credencial}
                  className="rounded-full bg-gelo px-[18px] py-2.5 text-[15px] text-petroleo"
                >
                  {credencial}
                </li>
              ))}
              <li className="rounded-full border border-azul px-[18px] py-2.5 text-[15px] text-petroleo">
                {sobre.registro}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
