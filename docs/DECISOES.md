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

## D18 — Seção Tratamentos conforme o design, com ajustes de acessibilidade

- **Escopo (2026-11-22):** seção `#tratamentos` com os 8 serviços (textos idênticos ao PRD, conferidos por teste que lê o próprio `docs/prd.md`), título "Cuidado completo, do check-up à reabilitação" e botão "Agendar avaliação +".
- **Diferenças em relação ao design:**
  - O rótulo "TRATAMENTOS" usa `#4F6E78` (texto secundário do PRD, seção 5) em vez do azul `#8FB3C2` do design, que tem contraste de cerca de 2:1 sobre o creme e reprova no WCAG AA.
  - O botão "Agendar avaliação +" abre o WhatsApp (o design apontava para `#contato`, que ainda não existe).
  - Os cards são uma lista (`ul`/`li`) com `h3`, para leitores de tela.
- **Revelação ao rolar:** CSS puro (`animation-timeline: view()`), só onde o navegador suporta; nos outros o conteúdo aparece normalmente, sem JavaScript. Desligada em `prefers-reduced-motion`.
- **Navegação:** `tratamentos` entrou em `secoesExistentes`. O link apareceu no cabeçalho, no menu do celular (o botão hambúrguer passou a existir) e no rodapé, e leva à seção com `scroll-margin` para não ficar sob o cabeçalho fixo.
- **Verificado:** Lighthouse 100 nas quatro categorias (mobile e desktop), 32 testes unitários e 36 de fumaça passando.

## D19 — Seção Contato conforme o design, com mapa do Google

- **Textos confirmados pela dona do projeto (2026-11-22):** "Prédio Empório Bahamas" no endereço, "Atendo com hora marcada e horários flexíveis. Fale direto comigo pelo WhatsApp e combinamos o melhor momento para você.", o título "Vamos cuidar do sorriso da sua família?" e a linha "Atendimento: com hora marcada, em horários flexíveis combinados com você". Não há horário fixo de funcionamento, e nenhum dia ou hora foi inventado.
- **Conteúdo:** chamada para agendar (botão abre o WhatsApp), Instagram, endereço em três linhas ("Sala 1007" aqui; "Sl 1007" no rodapé, como no design), atendimento, WhatsApp, e-mail e mapa.
- **Mapa:** embed do Google Maps do design, com `loading="lazy"`, `title` e `referrerpolicy="strict-origin-when-cross-origin"`, mais o link "Abrir rota →" para o Google Maps. A URL é validada no domínio (só `https://www.google.com/maps/embed`).
- **Privacidade 🟡:** o embed carrega conteúdo do Google quando chega perto da tela. Se a dona do projeto preferir evitar isso, dá para trocar por um cartão com o link "Abrir rota", sem mapa incorporado.
- **Ajustes de acessibilidade e responsividade:** ícone do botão não encolhe em 360px; o cartão sobre o mapa quebra em linhas em telas estreitas; os dados usam lista de definição (`dl`).
- **Navegação:** `contato` entrou em `secoesExistentes` (cabeçalho, menu do celular e rodapé).
- **Verificado:** Lighthouse 100 nas quatro categorias (mobile e desktop), 36 testes unitários e 44 de fumaça.

## D20 — Seção Sobre conforme o design, com credenciais a conferir

- **Decisão (2026-11-22):** a dona do projeto pediu para seguir o design na escolha e no conteúdo da próxima seção. A seção `#sobre` usa o texto do design, sem alterações: título "Prevenir antes de doer é a minha forma de cuidar.", dois parágrafos e cinco etiquetas (Odontologia · UFJF; Especialista em Saúde da Família · UFJF/HU; Aperfeiçoamento em Cirurgia Oral · Suprema; Preceptora · Estácio; CRO-MG 64493).
- **🔴 A conferir pela Dra. antes de depender dela:** as credenciais e os títulos de especialista são afirmações profissionais regulamentadas (regras de publicidade do CFO). O texto veio do design, e nenhum título foi acrescentado ou alterado por nós.
- **Foto:** `public/images/sobre.jpg` (a Dra. analisando um raio-x, 854 × 1280, 105 KB), vinda de `img/raio-x.jpg` do design. Mostra só a própria profissional, sem pacientes (mesma lógica da foto do hero, D10).
- **Correção de acessibilidade:** o indicador "Role para conhecer" do hero tinha `aria-label` diferente do texto visível (WCAG 2.5.3). O `aria-label` foi removido, e o texto visível é o nome acessível. O problema ficava escondido porque o link só aparece quando a seção Sobre existe.
- **Navegação:** `sobre` entrou em `secoesExistentes` (cabeçalho, menu do celular, rodapé e o indicador do hero).
- **Verificado:** Lighthouse 100 nas quatro categorias (mobile e desktop), 40 testes unitários e 53 de fumaça.

## D21 — Seções "Por que prevenir?" e "Dúvidas frequentes" conforme o design

- **Decisão (2026-11-22):** a dona do projeto pediu para seguir o design. As seções `#prevenir` (4 benefícios numerados) e `#duvidas` (5 perguntas e respostas) usam os textos do design, sem alterações. Ordem na página, como no design: Início, Sobre, Tratamentos, Por que prevenir?, Dúvidas, Contato.
- **🔴 A Dra. deve revisar antes de divulgar o site:** são textos de saúde e de consumo, que as regras de publicidade do CFO podem tratar como promessa de resultado ou apelo financeiro:
  - "Evita dor" e "Problemas descobertos cedo raramente chegam a doer".
  - "Economiza" e "Prevenir custa bem menos do que tratar depois".
  - "Uma pequena restauração hoje evita um canal amanhã".
  - Resposta sobre o siso ("você não sente dor durante") e sobre o clareamento ("Não. … o clareamento é seguro").
- **Acordeão:** feito com `<details>` e `<summary>` nativos (teclado e leitores de tela sem JavaScript), com o atributo `name` para abrir uma pergunta por vez onde o navegador suporta. A primeira começa aberta, como no design. O ícone "+" gira ao abrir.
- **Diferença em relação ao design:** a palavra "WhatsApp" na frase "Não encontrou a sua? Mande uma mensagem pelo WhatsApp." virou link para o WhatsApp (o texto é idêntico). O rótulo "DÚVIDAS FREQUENTES" usa `#4F6E78` (contraste AA), como em D18.
- **Navegação:** `prevenir` e `duvidas` entraram em `secoesExistentes`. O link "Dúvidas" apareceu no cabeçalho, no menu do celular e no rodapé.
- **Verificado:** Lighthouse 100 nas quatro categorias (mobile e desktop), 46 testes unitários e 63 de fumaça.

## D22 — Seções Família e Consultório conforme o design, com fotos de pessoas

- **Autorização confirmada pela dona do projeto (2026-11-22):** ela informou ter autorização por escrito dos responsáveis pelas crianças e adolescentes e da paciente que aparecem nas fotos, e pediu para usar todas como no design. Esta decisão **substitui** a restrição de D07 e D17 para as fotos `familia`, `crianca`, `familia-espelho` e `atendimento`. O Git não guarda as autorizações: a dona do projeto deve mantê-las arquivadas.
- **Seções:** `#familia` ("Atendimento humanizado", com duas fotos) e `#consultorio` (4 fotos, "Atendimento exclusivo" e retrato da Dra.), com os textos do design, sem alterações. Ordem na página: Início, Sobre, Família, Tratamentos, Por que prevenir?, Consultório, Dúvidas, Contato.
- **Imagens:** 7 fotos em WebP (291 KB no total, cerca de 60% menos que os JPEGs originais, de 761 KB), geradas por `scripts/otimizar-imagens.mjs` a partir de `docs/design/img/` (os originais seguem fora do Git). Carregam sob demanda.
- **Textos alternativos:** descrevem a cena (ex.: "Dra. Maria Eline atendendo uma paciente"), em vez dos genéricos do design ("Atendimento", "Consultório").
- **Diferenças em relação ao design:** rótulos das seções em `#4F6E78` (contraste AA sobre o fundo `#E6F0EC`; no design usam o azul claro ou 60% de opacidade, que reprovam), e listas semânticas (`ul`) para as perguntas e a galeria.
- **Navegação:** `familia` e `consultorio` entraram em `secoesExistentes`. O link "Família" apareceu no cabeçalho, no menu do celular e no rodapé.
- **Verificado:** Lighthouse 100 nas quatro categorias (mobile e desktop), 51 testes unitários e 71 de fumaça, com as fotos carregando e com texto alternativo.

## D23 — Conferência das regras de publicidade do CFO (2026-11-22)

- **Fonte lida:** [Cartilha de Publicidade na Odontologia, CRO-AL, 2022](https://croal.org.br/wp-content/uploads/2025/04/Cartilha-de-publicidade-na-odontologia.pdf), que cita o Código de Ética Odontológica (Res. CFO 118/2012, cap. XVI, arts. 41 a 46) e as Res. CFO 196/2019 e 230/2020. É um documento de outro estado (Alagoas) e de 2022: não substitui a consulta ao CRO-MG nem confirma resoluções posteriores (a Res. CFO 271/2025 apareceu em buscas, mas não foi verificada). Esta nota não é parecer jurídico.
- **O que a cartilha diz de forma clara:**
  - Imagens do resultado de tratamentos só podem ser divulgadas pelo dentista que fez o procedimento **com autorização prévia do paciente ou do representante legal, por Termo de Consentimento Livre e Esclarecido (TCLE)**. Selfies também exigem TCLE.
  - Nas publicações e no perfil digital deve constar o **nome do profissional e o número do CRO**. As regras valem para sites.
  - **Especialista** só pode ser anunciado se o título estiver **registrado no CRO**. Sem registro, anuncia-se a **área de atuação**. Mestrado e doutorado são permitidos.
  - É proibido divulgar preços, formas de pagamento e expressões como "grátis", "promoção", "descontos", "sorteios", "brindes" e "pacotes".
- **O que a cartilha NÃO trata (sem base oficial para afirmar):** depoimentos de pacientes; frases que prometam resultado ou economia ("Evita dor", "Economiza", "o clareamento é seguro"); imagem de procedimento em andamento com o paciente visível (o texto é ambíguo).
- **Decisões:**
  - **Resultados (5.6) e Depoimentos (5.7) ficam em espera** até a Dra. confirmar: TCLE de cada paciente cobrindo o uso no site; e, para depoimentos, a posição do CRO-MG.
  - **Credenciais (Sobre):** a Dra. deve confirmar se "especialista em Saúde da Família" é título **registrado no CRO-MG**. Se não for, trocar por "área de atuação".
  - **Textos de saúde (Por que prevenir? e Dúvidas) e a foto do atendimento em andamento** seguem no ar a pedido da dona do projeto, mas pendentes de confirmação do CRO-MG.
  - O CRO-AL oferece consultoria gratuita de publicidade antes da postagem. Vale perguntar se o CRO-MG tem serviço equivalente.

## D25 — Seções Resultados e Depoimentos implementadas, com ressalvas (2026-11-22)

- **Decisão:** a dona do projeto pediu para implementar as duas seções, mesmo sabendo que a conferência do CFO estava pendente (D23). A implementação está pronta, mas **o merge só deve acontecer depois** da confirmação do que está listado abaixo. Publicar é o merge: o PR deixa as imagens visíveis no repositório público.
- **Resultados:**
  - Textos do design, sem alterações: clareamento (par lado a lado, e "antes" e "depois · 1 semana"), limpeza, restaurações e extração de sisos.
  - Imagens por `scripts/recortar-resultados.mjs`, a partir dos originais (fora do Git): recortes só dos dentes, **sem legendas, textos nem `@` de terceiros** (as capturas de Instagram trazem o perfil de outra pessoa), em WebP (cerca de 150 KB no total). Na radiografia da extração foi apagado o dado do paciente ("Idade").
  - **A imagem `res-carie` (diagnóstico e tratamento de cárie) NÃO foi incluída:** ela mostra o tratamento em andamento, e a cartilha consultada lista como proibidas "imagens com conteúdo sobre o transcurso dos procedimentos" (D23). Pode entrar depois da confirmação do CRO-MG.
- **Depoimentos:** os 3 depoimentos do design, sem nome de pessoa (só "Paciente · via WhatsApp" etc.), sem a captura do Instagram. As estrelas são decorativas (`aria-hidden`) e usam `#4F6E78` (contraste AA).
- **🔴 Antes de mesclar:**
  1. **TCLE** (Termo de Consentimento Livre e Esclarecido) de cada paciente, cobrindo o uso no site e as imagens recortadas. Uma das fotos vem de captura de story de paciente no Instagram: a autorização deve cobrir esse uso.
  2. **Posição do CRO-MG** sobre depoimentos, que a cartilha consultada não trata, e sobre as frases "com naturalidade e segurança" e "Resultado de apenas 1 semana", que podem ser lidas como promessa de resultado.
  3. Nome e CRO da Dra. visíveis: o site já mostra CRO-MG 64493 no Sobre, no Consultório e no rodapé.
- **Navegação:** `resultados` e `depoimentos` entraram em `secoesExistentes`. O link "Depoimentos" aparece no cabeçalho, no menu do celular e no rodapé (6 links, e o cabeçalho cabe em 1180 px).
- **Verificado:** Lighthouse 100 nas quatro categorias (mobile e desktop), 57 testes unitários e 81 de fumaça.

## D27 — Versão do celular conforme o design (2026-11-23)

- **Decisão:** a dona do projeto refez o design do celular no Claude Design (o "Site Completo" ganhou um layout próprio abaixo de 1180 px) e pediu para implementar. Cada seção ganhou um componente em `src/components/celular/`, mostrado até 1179 px (`nav:hidden`); o desktop fica como estava (`hidden nav:block`). O conteúdo vem do mesmo `src/domain/`, sem duplicar texto à mão.
- **Textos (perguntados à dona do projeto):**
  - Tratamentos: títulos e frases curtas do design, em três grupos (Prevenção, Restaurações e cuidados, Reabilitação), guardadas em `celular` em `src/domain/tratamentos.ts`. Os cartões abrem o WhatsApp com a mensagem inicial "Olá, Dra. Maria Eline! Gostaria de saber mais sobre {tratamento}." (texto do design).
  - Depoimentos: falas encurtadas e origem abreviada, como no design (`celular` em `src/domain/depoimentos.ts`).
  - **Não usados**, por decisão dela: a linha "Imagens com autorização por escrito dos pacientes.", as legendas novas de Resultados e a frase sobre a Suprema no Sobre. Sobre, Família, Consultório, Resultados e Contato mantêm os textos atuais, só com o layout novo. Em Resultados, a frase do clareamento aparece como nota abaixo das fotos.
- **Escolhas 🟡:**
  - Rótulos e números de seção usam `azul-escuro` (e não o azul claro do design) para manter o contraste AA.
  - Os selos flutuantes do hero não aparecem no celular (o design não tem).
  - Resultados no celular reaproveita os mesmos recortes (antes e depois empilhados), sem novas imagens.
  - Tratamentos e Depoimentos do celular são links/figuras no HTML, e a marcação do desktop fica oculta (`display: none`), então o leitor de tela lê só uma versão.
- **Testes:** os de fumaca passaram a olhar só o conteúdo visível (`:visible`). Novo teste dos 3 grupos e 8 cartões do celular. O teste dos botões de WhatsApp aceita o link puro ou com `?text=`.
- **Verificado:** lint, typecheck, build, 57 testes unitários e e2e (axe incluído) passando; Lighthouse mobile 100/100/100/100 (LCP 0,9 s); capturas em 390 px.

## D28 — Animações iguais às do design (2026-11-23)

- **Decisão:** a dona do projeto pediu as animações como no Claude Design. O design as faz com JavaScript; aqui continuam em CSS puro (`src/styles/animacoes.css`), exceto a paralaxe do mouse, que precisa de um componente de cliente (`ParallaxSelos`).
- **Entrou:**
  - Hero: foto aparece com varredura em máscara, foco e escala (desktop); título em letras que entram uma a uma, com foco; selo com o espaçamento das letras se fechando; chips entram com foco e escala; indicador de rolagem aparece depois; linha decorativa é desenhada; paralaxe dos chips com o mouse.
  - Seções, ao rolar: blocos entram com atraso escalonado e leve escala; rótulos abrem o espaçamento das letras; fotos abrem por uma janela e descem do zoom; linhas decorativas são desenhadas.
- **Escolhas 🟡:**
  - No celular, a foto do hero usa só uma entrada curta (fade e foco), sem varredura nem escala, para não pesar.
  - As letras do título são decorativas (`aria-hidden`); o texto completo fica em `sr-only` para leitores de tela.
  - Tudo é desligado com `prefers-reduced-motion`, e a paralaxe só liga com mouse (`pointer: fine`).
  - Nos navegadores sem `animation-timeline: view()` o conteúdo aparece direto, sem animar.
- **Lighthouse (celular):** 91 a 95 em desempenho, com LCP de 3,0 s na simulação (acessibilidade, boas práticas e SEO em 100). Antes era 100 e 0,9 s. Na simulação a foto do hero passou a ser o maior elemento medido; com a rede e a CPU lentas emuladas no navegador, o LCP real da foto foi 1,4 s. Desktop segue em 100. A meta de Lighthouse continua pendente de confirmação (D12).

- **Correção (2026-11-23):** as animações de rolagem não rodavam em Sobre e Por que prevenir. A linha do tempo da rolagem se prende ao elemento de rolagem mais próximo, e a seção com `overflow-hidden` virava esse elemento (sem rolar nada), então a animação já nascia terminada. Trocado por `overflow-clip` nas seções e no cartão de Contato, e a foto passou a usar uma linha do tempo nomeada (`view-timeline: --foto`) para o zoom da imagem. Regra: elemento com `revelar`, `revelar-foto` ou `animar-rotulo` não pode ter ancestral com `overflow: hidden`, `auto` ou `scroll` (use `clip`).
- **Plano B para outros navegadores (2026-11-23):** onde o navegador não tem animação por rolagem (`animation-timeline`, como versões antigas do Safari e do iOS), o componente `RevelarAoRolar` marca os blocos que entram na tela (IntersectionObserver) e o CSS faz transições equivalentes. Onde há suporte, ele não faz nada; sem JavaScript ou com redução de movimento, o conteúdo fica visível.
