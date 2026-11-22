// Gera as versões otimizadas (WebP) das fotos usadas no site.
// Lê os originais de docs/design/img/ (fora do Git, ver DECISOES D07 e D17) e
// grava em public/images/. Uso: node scripts/otimizar-imagens.mjs
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const origem = "docs/design/img";
const destino = "public/images";

// nome de saída, arquivo de origem, lado maior em pixels
const fotos = [
  ["familia", "familia.jpg", 1000],
  ["crianca", "crianca.jpg", 800],
  ["mesa", "mesa.jpg", 900],
  ["atendimento", "atendimento.jpg", 900],
  ["modelo", "modelo.jpg", 900],
  ["familia-espelho", "familia-espelho.jpg", 900],
  ["espelho", "espelho.jpg", 1000],
];

await mkdir(destino, { recursive: true });

for (const [nome, arquivo, lado] of fotos) {
  const entrada = path.join(origem, arquivo);
  const saida = path.join(destino, `${nome}.webp`);
  const info = await sharp(entrada)
    .rotate()
    .resize({
      width: lado,
      height: lado,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 80 })
    .toFile(saida);
  console.log(
    `${nome}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`,
  );
}
