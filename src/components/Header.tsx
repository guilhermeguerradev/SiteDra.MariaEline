"use client";

import { useEffect, useState } from "react";
import { contatos } from "@/src/domain/contatos";
import { cabecalho } from "@/src/domain/hero";
import { itensVisiveis } from "@/src/domain/navegacao";
import { montarLinkWhatsapp } from "@/src/domain/whatsapp";
import { IconeWhatsapp } from "./IconeWhatsapp";
import { Logo } from "./Logo";

const itens = itensVisiveis();
const linkWhatsapp = montarLinkWhatsapp(contatos.whatsapp);

export function Header() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const temMenu = itens.length > 0;

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    if (!menuAberto) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAberto(false);
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [menuAberto]);

  const fundo = rolou || menuAberto ? "bg-petroleo/95" : "bg-petroleo/0";
  const espaco = rolou ? "nav:py-4" : "nav:py-7";

  return (
    <header
      className={`animar-menu fixed inset-x-0 top-0 z-50 backdrop-blur-[14px] transition-[background-color] duration-300 ${fundo}`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3.5 text-creme transition-[padding] duration-300 nav:px-16 ${espaco}`}
      >
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3 text-creme nav:flex-none nav:whitespace-nowrap"
        >
          <Logo />
          <span className="flex flex-col gap-0.5">
            <span className="text-[15px] font-medium">{cabecalho.nome}</span>
            <span className="text-[11px] tracking-[.06em] opacity-70">
              {cabecalho.descricao}
            </span>
          </span>
        </a>

        {temMenu && (
          <nav
            aria-label="Principal"
            className="hidden gap-[34px] text-[15px] nav:flex"
          >
            {itens.map((item) => (
              <a
                key={item.secao}
                href={`#${item.secao}`}
                className="text-creme opacity-90 hover:text-menta hover:opacity-100 focus-visible:text-menta"
              >
                {item.rotulo}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2.5">
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={
              { "--preenche": "var(--color-menta)" } as React.CSSProperties
            }
            className="botao-preenche hidden rounded-full bg-creme px-6 py-[13px] text-[15px] font-medium text-petroleo nav:inline-block"
          >
            {cabecalho.botaoAgendar}
          </a>
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            style={
              { "--preenche": "var(--color-menta)" } as React.CSSProperties
            }
            className="botao-preenche flex size-[46px] items-center justify-center rounded-full border border-menta/55 text-menta hover:border-menta hover:text-petroleo focus-visible:text-petroleo"
          >
            <IconeWhatsapp />
          </a>
          {temMenu && (
            <button
              type="button"
              onClick={() => setMenuAberto((aberto) => !aberto)}
              aria-label="Menu"
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              className="flex size-[46px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full bg-creme nav:hidden"
            >
              <span className="block h-[1.6px] w-[18px] bg-petroleo" />
              <span className="block h-[1.6px] w-[18px] bg-petroleo" />
            </button>
          )}
        </div>
      </div>

      {temMenu && menuAberto && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="flex flex-col gap-1 bg-petroleo px-6 pt-2 pb-7 nav:hidden"
        >
          {itens.map((item) => (
            <a
              key={item.secao}
              href={`#${item.secao}`}
              onClick={() => setMenuAberto(false)}
              className="border-b border-menta/15 py-3 text-xl text-creme last:border-b-0"
            >
              {item.rotulo}
            </a>
          ))}
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuAberto(false)}
            style={
              { "--preenche": "var(--color-creme)" } as React.CSSProperties
            }
            className="botao-preenche mt-3 rounded-full bg-menta px-6 py-4 text-center text-[17px] font-semibold text-petroleo"
          >
            {cabecalho.botaoAgendarMenu}
          </a>
        </nav>
      )}
    </header>
  );
}
