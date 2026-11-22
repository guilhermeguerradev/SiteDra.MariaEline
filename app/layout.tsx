import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { cabecalho, hero } from "@/src/domain/hero";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${cabecalho.nome} | ${cabecalho.descricao}`,
  description: hero.frase,
  openGraph: {
    title: `${cabecalho.nome} | ${cabecalho.descricao}`,
    description: hero.frase,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
