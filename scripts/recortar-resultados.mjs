// Gera as imagens da seção Resultados a partir dos originais (fora do Git).
// - recorta só os dentes, sem textos, legendas nem @ de terceiros;
// - apaga o dado do paciente ("Idade") da radiografia;
// - grava em WebP otimizado em public/images/.
// Uso: SAIDA=public/images node scripts/recortar-resultados.mjs
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const saida = process.env.SAIDA ?? "public/images";
await mkdir(saida, { recursive: true });

const webp = { quality: 80 };

async function gravar(nome, pipeline) {
  const info = await pipeline
    .webp(webp)
    .toFile(path.join(saida, `${nome}.webp`));
  console.log(
    `${nome}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`,
  );
}

// Clareamento: mesma foto, metade de cima (antes) e de baixo (depois).
// A foto original está deitada; gira 90° para o sorriso ficar na horizontal.
// O sharp gira ANTES de recortar, então o recorte vira um passo separado.
const clareamento = "img/clareamento.jpeg";
async function recorteGirado(arquivo, regiao) {
  const recorte = await sharp(arquivo).extract(regiao).toBuffer();
  return sharp(recorte).rotate(90).resize({ width: 760 });
}
await gravar(
  "clareamento-antes",
  await recorteGirado(clareamento, {
    left: 150,
    top: 90,
    width: 285,
    height: 610,
  }),
);
await gravar(
  "clareamento-depois",
  await recorteGirado(clareamento, {
    left: 90,
    top: 905,
    width: 285,
    height: 610,
  }),
);

// Clareamento (par lado a lado, já montado no design).
await gravar(
  "clareamento-par",
  sharp("docs/design/img/res-clareamento2.jpg").resize({ width: 1400 }),
);

// Limpeza: recorta os dois sorrisos (proporção 3:2 cada) e empilha, antes em
// cima e depois embaixo. Fica em retrato, como o cartão do design.
const limpeza = "img/feedback + limpeza.jpeg";
const limpezaAntes = await sharp(limpeza)
  .extract({ left: 70, top: 160, width: 600, height: 400 })
  .toBuffer();
const limpezaDepois = await sharp(limpeza)
  .extract({ left: 150, top: 890, width: 600, height: 400 })
  .toBuffer();
await gravar(
  "limpeza",
  sharp({
    create: { width: 600, height: 800, channels: 3, background: "#ffffff" },
  }).composite([
    { input: limpezaAntes, left: 0, top: 0 },
    { input: limpezaDepois, left: 0, top: 400 },
  ]),
);

// Restauração: recorta as duas fotos, ajusta cada uma para 3:2 e empilha.
const restauracao = "img/restauração.jpeg";
const metade = (regiao) =>
  sharp(restauracao)
    .extract(regiao)
    .resize({ width: 570, height: 380, fit: "cover" })
    .toBuffer();
const restAntes = await metade({ left: 40, top: 95, width: 570, height: 565 });
const restDepois = await metade({
  left: 35,
  top: 745,
  width: 590,
  height: 560,
});
await gravar(
  "restauracao",
  sharp({
    create: { width: 570, height: 760, channels: 3, background: "#f7f4e6" },
  }).composite([
    { input: restAntes, left: 0, top: 0 },
    { input: restDepois, left: 0, top: 380 },
  ]),
);

// Extração: apaga o dado do paciente ("Idade: 23a.0m.") ANTES de redimensionar,
// com um degradê da cor da película para não deixar uma caixa preta visível.
const extracaoOriginal = "docs/design/img/res-extracao.jpg";
const regiaoIdade = { left: 646, top: 186, width: 200, height: 52 };
const amostra = (regiao) =>
  sharp(extracaoOriginal).extract(regiao).resize(1, 1).raw().toBuffer();
const [esq, dir] = await Promise.all([
  amostra({ left: 626, top: 250, width: 20, height: 20 }),
  amostra({ left: 856, top: 250, width: 20, height: 20 }),
]);
const rgb = (b) => `rgb(${b[0]},${b[1]},${b[2]})`;
const tapaIdade = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${regiaoIdade.width}" height="${regiaoIdade.height}">
    <defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="${rgb(esq)}"/><stop offset="1" stop-color="${rgb(dir)}"/>
    </linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/></svg>`,
);
const extracaoSemIdade = await sharp(extracaoOriginal)
  .composite([
    { input: tapaIdade, left: regiaoIdade.left, top: regiaoIdade.top },
  ])
  .toBuffer();
await gravar("extracao", sharp(extracaoSemIdade).resize({ width: 1000 }));
