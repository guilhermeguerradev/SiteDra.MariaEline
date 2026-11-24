import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { cabecalho } from "@/src/content/cabecalho";
import { inicio } from "@/src/content/inicio";
import { obterUrlSite } from "@/src/lib/site";
import "@/app/globals.css";

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
  description: inicio.frase,
  // Com a URL do site, o Next resolve og:image e links canônicos como absolutos.
  ...(urlSite && {
    metadataBase: new URL(urlSite),
    alternates: { canonical: "/" },
  }),
  openGraph: {
    title: titulo,
    description: inicio.frase,
    type: "website",
    locale: "pt_BR",
    ...(urlSite && {
      url: "/",
      images: [
        {
          url: inicio.foto.src,
          width: 1280,
          height: 854,
          alt: inicio.foto.alt,
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
