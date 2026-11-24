import { variaveisCss } from "@/src/lib/animacao";

type Props = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "target" | "rel" | "style"
> & {
  href: string;
  /** Cor que preenche o botão ao passar o mouse (variável de cor dos tokens). */
  preenche?: string;
};

// Link que abre em outra aba (WhatsApp, Instagram, mapa). Guarda num só lugar o
// `rel="noopener noreferrer"` e a variável --preenche do efeito de botão.
export function LinkExterno({ preenche, children, ...resto }: Props) {
  return (
    <a
      {...resto}
      target="_blank"
      rel="noopener noreferrer"
      style={preenche ? variaveisCss({ "--preenche": preenche }) : undefined}
    >
      {children}
    </a>
  );
}
