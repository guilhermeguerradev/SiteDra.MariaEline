# DECISOES — Site da Dra. Maria Eline Muniz

Decisões propostas. Confirme antes de criar o projeto. Decisão substituída: marque como "substituída", não apague.

## D01 — Stack: Next.js + TypeScript + Tailwind, hospedado na Vercel

- **Contexto:** site de uma página com conteúdo fixo, possivelmente com outras seções no futuro.
- **Por que essa:** Next.js gera páginas estáticas, rápidas e boas para busca. TypeScript pega erros cedo. Tailwind mantém cores e espaçamentos em um só lugar. A Vercel publica a cada merge.
- **Alternativas descartadas:** HTML puro (sem componentes, mais trabalhoso de manter); WordPress (plugins e atualizações para cuidar).
- **Como explicar:** o site é um folheto montado por uma gráfica (Next.js) a partir de modelos (componentes) e distribuído por uma banca (Vercel).

## D02 — Sem banco de dados; contato por WhatsApp

- **Contexto:** o site não precisa guardar agendamentos nem usuários.
- **Escolha:** o botão de agendar abre o WhatsApp com mensagem inicial. Sem formulário com backend.
- **Consequência:** menos dados pessoais armazenados, menos custo, menos superfície de segurança.
- **Revisar se:** surgir necessidade de formulário com registro.

## D03 — Variação 3 "Família em Destaque" escolhida

- **Escolha:** a dona do projeto escolheu a variação 3 do Claude Design. Escopo atual: uma página (hero), cabeçalho e rodapé.
- **Consequência:** as seções de Tratamentos, Sobre, Família, Depoimentos, Dúvidas e Contato ficam para a fase futura.

## D04 — Design como especificação, código reescrito

- **Contexto:** o export do Claude Design é HTML com runtime próprio (`x-dc`), não um projeto Next.js.
- **Escolha:** os componentes são reescritos a partir do design. Cores e fontes viram tokens.

## D05 — Repositório: privado ou público (pendente)

- **Contexto:** a proteção da `main` (exigir PR e CI verde) faz parte dos padrões de qualidade. No GitHub, essa proteção em repositório privado depende de plano pago. Confirme o plano atual antes de decidir.
- **Opções:**
  - **A. Privado + GitHub pago:** código fechado, proteção da `main` ativa. Custo mensal a aprovar.
  - **B. Público + plano gratuito:** proteção da `main` disponível. Código visível para qualquer pessoa. Um site de landing não tem segredos, desde que `.env` fique fora do Git.
  - **C. Privado + gratuito:** sem proteção da `main`. A regra de não fazer push direto na main vira disciplina, não garantia técnica.
- **Recomendação:** B, se a dona do projeto aceitar que o código seja público. Caso contrário, A.
- **Status:** ✅ decidida em 2026-11-22: **opção B (público + gratuito)**. O repositório `guilhermeguerradev/SiteDra.MariaEline` já existia e é público. Proteção da `main` será ativada na Etapa 0.

## D06 — Hospedagem na Vercel por enquanto; domínio pendente (substituída por D13)

- **Contexto:** a dona do projeto ainda não decidiu onde registrar o domínio. GitHub Pages foi considerado como alternativa.
- **Escolha:** hospedagem na Vercel por enquanto, com preview automático por PR. A Etapa 4 do PLANO é feita depois dos primeiros itens.
- **Pendente:** confirmar uso comercial no plano da Vercel antes de publicar.
- **Registrar quando decidir:** domínio, registrador, plano da Vercel e termos de uso comercial.

## D07 — Fotos de pessoas reais ficam fora do repositório público

- **Contexto:** o repositório é público (D05) e `docs/design/img/` contém fotos de famílias, crianças e resultados de tratamento.
- **Escolha:** `docs/design/img/` está no `.gitignore`. As fotos ficam só na máquina local.
- **Revisar quando:** houver autorização das pessoas retratadas para uso público. Fotos de tratamento ainda precisam respeitar as regras de publicidade do CFO.

## D08 — Escopo da Etapa 1: só cabeçalho e hero

- **Contexto:** o arquivo `Site Completo.dc.html` traz o site inteiro, mas o PRD limita o escopo a cabeçalho, hero e (a confirmar) rodapé.
- **Escolha (2026-11-22):** manter o PRD. Só cabeçalho e hero. As demais seções do design ficam na fase futura.
- **Consequência:** `docs/design/Site Completo.dc.html` é a referência visual de cabeçalho e hero. O resto do arquivo não é implementado.

## D09 — Contatos do design confirmados como oficiais

- **Escolha (2026-11-22):** a dona do projeto confirmou como oficiais os dados que estão no design: WhatsApp `5532988747651`, endereço Av. Barão do Rio Branco, 2872, Centro, Juiz de Fora - MG, Instagram `dramariaeline` e e-mail `mariaelinemuniz@gmail.com`.
- **Consequência:** ficam em `src/domain/` como objetos tipados. Resolve as pendências 2 e 3 do PRD (seção 8). Cidade de atendimento: Juiz de Fora - MG.

## D10 — Cabeçalho e hero seguem o design "Site Completo"

- **Contexto:** o PRD descreve a variação 3 com foto da família e botão secundário "Como cuidamos da família". O arquivo de design indicado para implementação (`Site Completo.dc.html`) tem hero com foto da própria Dra. e outro conjunto de textos.
- **Escolha (2026-11-22, a pedido da dona do projeto):** seguir o design. Diferenças em relação ao PRD:
  - Foto do hero: a Dra. Maria Eline no consultório (`public/images/hero.jpg`, vinda de `img/cartao.jpg`), no lugar da foto da família. Foi autorizada para o repositório público porque é a própria profissional.
  - Sem botão "Como cuidamos da família" (o design não o tem).
  - Linha "Crianças · adolescentes · adultos · idosos" ao lado do botão, texto do design que não está no PRD.
  - Botão principal "Agendar consulta +" e, no cabeçalho, "Agendar +".
  - Fundo do hero `#233F45` (design), em vez do degradê claro descrito no PRD seção 5.
- **Navegação:** o design tem 6 links de seções que ainda não existem. Ficam escondidos e voltam sozinhos quando a seção for acrescentada em `secoesExistentes` (`src/domain/navegacao.ts`). O menu hambúrguer mobile só aparece quando houver links.
- **Agendar:** os botões "Agendar" abrem o WhatsApp (o design apontava para `#contato`, que não existe). Sem mensagem inicial, pois o texto não está no PRD.
- **Animações:** reescritas em CSS (entrada em cascata, foto "respirando", chips flutuando, reflexo de luz, barra de rolagem). Não foram portados o efeito de máscara da foto na entrada nem o parallax do ponteiro. Tudo respeita `prefers-reduced-motion`.
- **Ferramentas:** Prettier com `endOfLine: "auto"` (o Git no Windows converte para CRLF); alias `@/` configurado no Vitest.

## D11 — Chips do hero mais opacos que no design (acessibilidade)

- **Contexto:** no desktop, os chips "Atendimento para toda a família" e "Foco em prevenção" ficam sobre a foto. Com o fundo `petroleo/35%` do design, o contraste do texto creme sobre o jaleco claro é de cerca de 2,0:1, abaixo do mínimo de 4,5:1 do WCAG AA.
- **Escolha (2026-11-22):** fundo `petroleo/75%`. No pior caso (jaleco branco) o contraste fica em torno de 4,5:1.
- **Consequência:** diferença visual pequena em relação ao design. Reverter exige aceitar texto abaixo do AA.
- **Também:** anel de foco visível (`:focus-visible`, menta) em todos os elementos interativos.

## D12 — Meta de Lighthouse

- **Medido em 2026-11-22 (build de produção local):** desempenho, acessibilidade, boas práticas e SEO em 100, no mobile e no desktop. LCP 0,9 s no mobile, CLS 0.
- **Proposta de meta:** 90 ou mais nas quatro categorias. 🔴 Aguardando confirmação da dona do projeto (CLAUDE.md, seção 7).

## D13 — Sem domínio por enquanto; site estático em host gratuito que permita uso comercial

- **Contexto (2026-11-22):** a dona do projeto não terá domínio próprio por enquanto. O plano gratuito da Vercel (Hobby) é só para uso pessoal ou não comercial, e o site capta pacientes de um consultório particular, o que é uso comercial. Fontes: [Termos da Vercel](https://vercel.com/legal/terms) e [Fair Use Guidelines](https://vercel.com/docs/limits/fair-use-guidelines).
- **Escolha:** host gratuito que permita uso comercial, com o site exportado como estático. Recomendação: **Cloudflare Pages** (plano gratuito, 500 builds por mês; fontes secundárias indicam que não há restrição comercial, mas **confirmar** no contrato da Cloudflare). Alternativa: Netlify (aceita projetos comerciais no plano gratuito segundo a equipe, mas pede plano Pro se o desenvolvedor cobrar o dono do negócio pelo site). Alternativa paga: Vercel Pro.
- **Mudanças técnicas:** `output: "export"`, `images.unoptimized`, remoção de `cacheComponents` e `partialPrefetching` (não combinam com export estático), testes de fumaça servindo `out/`, ícone `app/icon.svg` (dente do logo) no lugar do favicon padrão do Next.
- **Consequência:** o endereço será o do host (ex.: `nome.pages.dev`). `og:image` e `metadataBase` só entram quando essa URL existir.
- **Pendente 🔴:** a dona do projeto confirmar o serviço e criar a conta; conferir os termos comerciais do serviço escolhido.
- **Como publicar (Cloudflare Pages):** conectar o repositório, comando de build `npm run build`, pasta de saída `out`, Node 22. Preview por PR é automático.

## D14 — Endereço do site configurável por variável (`NEXT_PUBLIC_SITE_URL`)

- **Contexto:** o endereço pode mudar de `nome.pages.dev` para um domínio próprio (ex.: `dramariaeline.com.br`) sem novo commit.
- **Escolha (2026-11-22):** o endereço vem da variável `NEXT_PUBLIC_SITE_URL`, lida no build por `obterUrlSite()` (`src/domain/site.ts`), validada com Zod (só `http` e `https`; remove barra final e caminho).
- **Com a variável:** `metadataBase`, canonical, `og:url`, `og:image` e `twitter`/Open Graph absolutos, `url` e `image` no JSON-LD, `robots.txt` com a linha `Sitemap` e `sitemap.xml` com a página.
- **Sem a variável (ou inválida):** o site funciona igual, sem esses itens e com sitemap vazio.
- **Como trocar de endereço:** alterar a variável no painel do host e refazer o deploy. Variável de produção só muda com confirmação da dona do projeto (CLAUDE.md, seção 10).
- **Exemplo:** `.env.example`.

## D15 — Site publicado na Cloudflare Pages em `dramariaeline.pages.dev`

- **Publicado em 2026-11-22**, pelo fluxo Pages (Git): branch `main`, build `npm run build`, saída `out`, variáveis `NODE_VERSION=22` e `NEXT_PUBLIC_SITE_URL=https://dramariaeline.pages.dev`. Cada merge na `main` publica sozinho; cada PR gera um preview.
- **Verificado no ar:** HTTP 200, título e h1, 4 links de WhatsApp com o número certo, canonical, `og:url`, `og:image` e JSON-LD `Dentist` com a URL real, `robots.txt`, `sitemap.xml`, `icon.svg`, imagem do hero e 404 para páginas inexistentes. Lighthouse no endereço público: 100 nas quatro categorias (mobile: LCP 1,0 s; desktop: LCP 0,2 s).
- **Fluxo Workers descartado:** daria `nome.<conta>.workers.dev` e exige `wrangler.jsonc` (PR #6, fechado sem merge).
- **Pendente 🔴:** conferir os termos de uso comercial da Cloudflare no contrato oficial (fontes consultadas eram secundárias). Domínio próprio fica para depois: basta ligar o domínio no painel e atualizar `NEXT_PUBLIC_SITE_URL`.

## D16 — Rodapé do design, sem menu, com aviso sobre planos

- **Decisões da dona do projeto (2026-11-22):**
  - Conteúdo: rodapé completo do design, **sem a coluna de navegação** enquanto as seções não existirem (volta sozinha quando `secoesExistentes` for atualizada).
  - Aviso sobre planos: **"Atendimento particular, sem convênios"** (no lugar de "Não aceita planos"), logo abaixo do CRO-MG 64493.
  - Endereço com a sala: **"Av. Barão do Rio Branco, 2872 · Sl 1007, Juiz de Fora – MG"** (o D09 tinha o endereço sem a sala; agora o campo `complemento` guarda "Sl 1007").
- **Conteúdo do rodapé:** marca e descrição, CRO-MG 64493, aviso, contato (telefone, e-mail e endereço), Instagram, "© ano Dra. Maria Eline Muniz. Todos os direitos reservados." e "Responsável técnica: Dra. Maria Eline Muniz · CRO-MG 64493".
- **Escolhas técnicas:** telefone e e-mail viram links `tel:` e `mailto:`; o endereço abre o Google Maps; o ano do © é o do build (`new Date().getFullYear()`).
- **Resolve** as pendências 4 e 6 do PRD (seção 8).

## D17 — Originais das fotos ficam em `img/` (fora do Git)

- **Contexto (2026-11-22):** a dona do projeto colocou 11 fotos originais em `img/` (famílias, criança, clareamento, limpeza, restauração, extração e capturas de "feedback" de pacientes no Instagram).
- **Escolha:** a pasta `img/` inteira está no `.gitignore`. O site atual só usa `public/images/hero.jpg` (a Dra., D10).
- **Mapa dos recortes que o design usa na fase futura (confirmado pela dona do projeto em 2026-11-22):** `clar-antes` e `clar-depois` vêm da mesma foto, `clareamento.jpeg` (cada uma é um recorte, de cima e de baixo, 640 × 340 px no design); `limpeza-ad` vem de `feedback + limpeza.jpeg`; `restauracao-ad` vem de `restauração.jpeg`. Os outros arquivos já existiam em `docs/design/img/` com outro nome.
- **Antes de publicar qualquer uma:** 🔴 autorização por escrito de cada pessoa retratada (rosto, família, criança, `@` de Instagram nas capturas) e conferência das regras de publicidade do CFO para "antes e depois" e depoimentos. Se forem usadas, devem ser recortadas, sem textos de terceiros, e otimizadas.
