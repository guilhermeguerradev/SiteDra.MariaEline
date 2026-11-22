import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { cabecalho, hero } from "@/src/domain/hero";
import { obterUrlSite } from "@/src/domain/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const urlSite = obterUrlSite();
const titulo = `${cabecalho.nome} | ${cabecalho.descricao}`;

export const metadata: Metadata = {
  title: titulo,
  description: hero.frase,
  // Com a URL do site, o Next resolve og:image e links canônicos como absolutos.
  ...(urlSite && {
    metadataBase: new URL(urlSite),
    alternates: { canonical: "/" },
  }),
  openGraph: {
    title: titulo,
    description: hero.frase,
    type: "website",
    locale: "pt_BR",
    ...(urlSite && {
      url: "/",
      images: [
        {
          url: hero.foto.src,
          width: 1280,
          height: 854,
          alt: hero.foto.alt,
        },
      ],
    }),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
