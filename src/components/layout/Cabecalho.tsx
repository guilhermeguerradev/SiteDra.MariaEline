"use client";

import { hrefDaSecao } from "@/src/lib/navegacao";
import { LinkExterno } from "@/src/components/ui/LinkExterno";
import { useCallback, useState } from "react";
import { useFecharComEscape } from "@/src/components/comportamento/useFecharComEscape";
import { useRolagemPassouDe } from "@/src/components/comportamento/useRolagemPassouDe";
import { dadosDeContato } from "@/src/content/dadosDeContato";
import { cabecalho } from "@/src/content/cabecalho";
import { itensDoMenu } from "@/src/content/navegacao";
import { montarLinkWhatsapp } from "@/src/lib/whatsapp";
import { IconeWhatsapp } from "@/src/components/ui/IconeWhatsapp";
import { Logo } from "@/src/components/ui/Logo";

// Depois de rolar este tanto (px), o cabeçalho encolhe e ganha fundo.
const LIMITE_DE_ROLAGEM = 40;

const itens = itensDoMenu();
const linkWhatsapp = montarLinkWhatsapp(dadosDeContato.whatsapp);

export function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const temMenu = itens.length > 0;

  const estaRolado = useRolagemPassouDe(LIMITE_DE_ROLAGEM);
  const fecharMenu = useCallback(() => setMenuAberto(false), []);
  useFecharComEscape(menuAberto, fecharMenu);

  const fundo = estaRolado || menuAberto ? "bg-petroleo/95" : "bg-petroleo/0";
  const espaco = estaRolado ? "largo:py-4" : "largo:py-7";

  return (
    <header
      className={`animar-menu fixed inset-x-0 top-0 z-50 backdrop-blur-[14px] transition-[background-color] duration-300 ${fundo}`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 text-creme largo:gap-6 transition-[padding] duration-300 largo:px-16 ${espaco}`}
      >
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3 text-creme largo:flex-none largo:whitespace-nowrap"
        >
          <Logo />
          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="truncate text-corpo font-medium">
              {cabecalho.nome}
            </span>
            <span className="truncate text-[11px] tracking-[.06em] opacity-70">
              {cabecalho.descricao}
            </span>
          </span>
        </a>

        {temMenu && (
          <nav
            aria-label="Principal"
            className="hidden gap-[34px] text-corpo largo:flex"
          >
            {itens.map((item) => (
              <a
                key={item.secao}
                href={hrefDaSecao(item.secao)}
                className="text-creme opacity-90 hover:text-menta hover:opacity-100 focus-visible:text-menta"
              >
                {item.rotulo}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2.5">
          <LinkExterno
            href={linkWhatsapp}
            preenche="var(--color-menta)"
            className="botao-preenche hidden rounded-full bg-creme px-6 py-[13px] text-corpo font-medium text-petroleo largo:inline-block"
          >
            {cabecalho.botaoAgendar}
          </LinkExterno>
          <LinkExterno
            href={linkWhatsapp}
            aria-label="Falar no WhatsApp"
            preenche="var(--color-menta)"
            className="botao-preenche flex size-[46px] items-center justify-center rounded-full border border-menta/55 text-menta hover:border-menta hover:text-petroleo focus-visible:text-petroleo"
          >
            <IconeWhatsapp />
          </LinkExterno>
          {temMenu && (
            <button
              type="button"
              onClick={() => setMenuAberto((aberto) => !aberto)}
              aria-label="Menu"
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              className="flex size-[46px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full bg-creme largo:hidden"
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
          className="flex flex-col gap-1 bg-petroleo px-6 pt-2 pb-7 largo:hidden"
        >
          {itens.map((item) => (
            <a
              key={item.secao}
              href={hrefDaSecao(item.secao)}
              onClick={() => setMenuAberto(false)}
              className="border-b border-menta/15 py-3 text-xl text-creme last:border-b-0"
            >
              {item.rotulo}
            </a>
          ))}
          <LinkExterno
            href={linkWhatsapp}
            onClick={() => setMenuAberto(false)}
            preenche="var(--color-creme)"
            className="botao-preenche mt-3 rounded-full bg-menta px-6 py-4 text-center text-leitura font-semibold text-petroleo"
          >
            {cabecalho.botaoAgendarMenu}
          </LinkExterno>
        </nav>
      )}
    </header>
  );
}
