// Confere que o site exportado (out/) não viola a Content-Security-Policy de
// public/_headers. Serve a pasta com a política como BLOQUEANTE, abre a página
// em desktop e celular, rola até o fim e falha se houver violação ou erro de JS.
// Uso: npm run build && npm run test:csp
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const projeto = process.cwd();
const require = createRequire(path.join(projeto, "package.json"));
const { chromium } = require("@playwright/test");

const cabecalhos = fs.readFileSync(
  path.join(projeto, "public/_headers"),
  "utf8",
);
const linhaCsp = cabecalhos
  .split("\n")
  .find((l) => l.trim().startsWith("Content-Security-Policy"));
const politica = linhaCsp.slice(linhaCsp.indexOf(":") + 1).trim();
console.log("Política testada:\n ", politica, "\n");

const tipos = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".xml": "application/xml",
};
const raiz = path.join(projeto, "out");
const servidor = http.createServer((req, res) => {
  let caminho = decodeURIComponent(req.url.split("?")[0]);
  if (caminho.endsWith("/")) caminho += "index.html";
  const arquivo = path.join(raiz, caminho);
  if (!arquivo.startsWith(raiz) || !fs.existsSync(arquivo)) {
    res.writeHead(404);
    return res.end();
  }
  res.writeHead(200, {
    "Content-Type": tipos[path.extname(arquivo)] ?? "application/octet-stream",
    "Content-Security-Policy": politica, // bloqueante, para o teste ser de verdade
  });
  fs.createReadStream(arquivo).pipe(res);
});
await new Promise((r) => servidor.listen(3197, r));

const navegador = await chromium.launch({
  channel: process.env.CI ? undefined : "msedge",
});
let total = 0;
for (const [nome, largura, altura] of [
  ["desktop", 1440, 900],
  ["celular", 360, 740],
]) {
  const pagina = await navegador.newPage({
    viewport: { width: largura, height: altura },
  });
  const violacoes = [];
  const erros = [];
  pagina.on("console", (m) => {
    if (/Content Security Policy|Refused to/i.test(m.text()))
      violacoes.push(m.text());
  });
  pagina.on("pageerror", (e) => erros.push(e.message));
  await pagina.addInitScript(() => {
    document.addEventListener("securitypolicyviolation", (e) =>
      console.log(
        `Content Security Policy: ${e.violatedDirective} bloqueou ${e.blockedURI} em ${e.sourceFile}:${e.lineNumber} amostra=${e.sample}`,
      ),
    );
  });
  await pagina.goto("http://localhost:3197/");
  // rola a página inteira para disparar imagens lazy, animações e o iframe do mapa
  const altTotal = await pagina.evaluate(
    () => document.documentElement.scrollHeight,
  );
  for (let y = 0; y <= altTotal; y += 500) {
    await pagina.evaluate((v) => window.scrollTo(0, v), y);
    await pagina.waitForTimeout(150);
  }
  await pagina.waitForTimeout(2500);
  const mapa = await pagina.locator("iframe").first().boundingBox();
  const titulo = await pagina.locator("h1").first().isVisible();
  console.log(
    `[${nome}] h1 visível: ${titulo} | iframe do mapa: ${mapa ? "presente" : "ausente"} | erros de JS: ${erros.length} | violações: ${violacoes.length}`,
  );
  for (const v of [...new Set(violacoes)]) console.log("   -", v.slice(0, 220));
  for (const e of erros) console.log("   ! erro:", e.slice(0, 200));
  total += violacoes.length + erros.length;
  await pagina.close();
}
await navegador.close();
servidor.close();
if (total > 0) {
  console.error(`\nFALHOU: ${total} problema(s).`);
  process.exit(1);
}
console.log("\nOK: nenhuma violação nem erro.");
