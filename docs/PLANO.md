# PLANO — Site da Dra. Maria Eline Muniz

Trabalhe só na etapa atual. Ao concluir um item, marque [x].
🔴 = depende de decisão ou conteúdo pendente (ver PRD, seção 8).

## Etapa 0 — Repositório e padrões de qualidade

Objetivo: o código entra no GitHub já com as regras de qualidade ativas. Nenhuma linha de site é escrita antes disso.

- [x] 🔴 Decidir visibilidade do repositório (ver DECISOES D05): opção B, público
- [x] Criar o repositório no GitHub (`gh repo create`): já existia, `guilhermeguerradev/SiteDra.MariaEline`, público, `main` em `3ea1752`
- [x] Commit inicial só com a documentação: `CLAUDE.md`, `docs/` (`1e46f67`, sem `docs/design/img/`, ver DECISOES D07)
- [x] Desligar atribuição de IA nos commits e PRs nas configurações do Claude Code (`.claude/settings.json`; commit conferido sem assinatura)
- [x] Criar projeto Next.js + TypeScript + Tailwind (Next 16, `npm run build` ok)
- [x] ESLint com `@typescript-eslint/no-explicit-any` como "error" (testado: `any` temporário gerou erro, exit 1)
- [x] Prettier para formatação
- [x] Scripts `lint`, `typecheck` e `test` (Vitest)
- [x] `.gitignore` com `.env` e `node_modules`
- [x] gitleaks para impedir vazamento de chaves (local: acusa token falso, exit 1; CI: job verde no PR #1)
- [x] Workflow de CI no GitHub Actions: lint, typecheck e testes em todo PR (verde no PR #1)
- [x] 🔴 Branch protection na `main`: exigir PR e CI verde (ver DECISOES D05) (ativa; push direto recusado em teste)
- [x] Template de PR com campos: o que foi feito, escolhas 🟡, como testar

## Etapa 1 — Base visual

- [x] Exportar o design para `docs/design/` (`Site Completo.dc.html` e `support.js`; fotos fora do Git, D07; faltam 4 imagens grandes)
- [x] Tokens de cor, fonte e espaçamento em `src/styles/`
- [x] Fonte Outfit servida pelo próprio site (`next/font`)
- [x] Respeitar `prefers-reduced-motion` (conferido com `--force-prefers-reduced-motion`)
- [x] Cabeçalho com nome, selo, Agendar e WhatsApp
- [x] 🔴 Links de navegação: escondidos até a seção existir (DECISOES D10)

## Etapa 2 — Hero

- [x] Hero em 360px e em desktop (conferido por captura de tela)
- [x] Selos e chips do design
- [x] Botão Agendar e botão WhatsApp com o número configurado (link testado em unitário; teste de fumaça na Etapa 3)
- [ ] 🔴 Foto da família no lugar do PLACEHOLDER (o design usa a foto da Dra., ver D10; confirmar se a foto da família ainda será usada)
- [x] 🔴 Número de WhatsApp em `src/domain/` (D09)

## Etapa 3 — Qualidade

- [x] Teste de fumaça com Playwright: página carrega, botões de WhatsApp com o número certo, nenhum link quebrado (24 execuções passando, desktop e 360px)
- [x] Testes de `src/domain/` (dados válidos) (14 testes unitários)
- [x] Lighthouse com a meta a confirmar (medido: 100 nas quatro categorias, mobile e desktop; meta de 90+ proposta em D12, aguardando confirmação)
- [x] Revisão de acessibilidade: contraste, teclado, texto alternativo (axe sem violações; contraste corrigido nos chips, D11; foco visível)
- [x] Revisão em 360px (captura de tela com viewport real e testes em 360px)

## Etapa 4 — Publicar

Hospedagem decidida em D13 e D15. Domínio próprio fica para depois.

- [x] 🔴 Domínio: dispensado por enquanto, endereço do próprio host (DECISOES D13)
- [ ] 🔴 Confirmar o host gratuito que permita uso comercial (recomendado: Cloudflare Pages, D13) e conferir os termos
- [x] Conectar o repositório ao host escolhido: Cloudflare Pages, no ar em https://dramariaeline.pages.dev (D15)
- [x] Definir `NEXT_PUBLIC_SITE_URL` no host com o endereço final (D14); domínio próprio fica para depois
- [ ] Google Meu Negócio: a dona do projeto cria ou confirma o perfil
- [ ] Revisão final no celular junto com a Dra. Maria Eline

## Etapa 5 — Seções adicionais (rascunho para aprovação)

Fonte do conteúdo: `docs/design/Site Completo.dc.html`. Trabalhe uma seção por PR. Cada seção nova entra em `secoesExistentes` (`src/domain/navegacao.ts`), e o link dela aparece no menu e no rodapé sozinho.
Regra para todas: o texto vem do PRD ou de confirmação da dona do projeto. Nada de inventar, e nada que prometa resultado de tratamento (regras de publicidade do CFO).
🔴 = depende de decisão ou conteúdo da dona do projeto.

Ordem sugerida, da mais pronta para a mais sensível:

### 5.1 Tratamentos (`#tratamentos`)

- [x] Seção com os 8 serviços. Os textos já estão no PRD, palavra por palavra, e batem com o design (teste lê o PRD).
- [x] Botão "Agendar avaliação +" aponta para o WhatsApp.
- [x] Layout em 360px e em desktop, sem foto (o design não usa). Ver D18.

### 5.2 Contato (`#contato`)

- [x] Endereço, WhatsApp, e-mail, Instagram e botão "Agendar pelo WhatsApp" (dados confirmados em D09 e D16).
- [x] Mapa do Google incorporado como no design, com o link "Abrir rota" (D19).
- [x] 🔴 Textos extras do design confirmados pela dona do projeto (D19).

### 5.3 Sobre (`#sobre`)

- [x] Foto `raio-x` (a Dra. analisando um raio-x), em `public/images/sobre.jpg` (D20).
- [ ] 🔴 Texto do design usado a pedido da dona do projeto (D20). A Dra. ainda deve conferir as credenciais: formada pela UFJF, especialista em Saúde da Família (UFJF/HU), aperfeiçoamento em Cirurgia Oral (Suprema), preceptora na Estácio.
- [x] Frase "Prevenir antes de doer é a minha forma de cuidar." usada como no design (D20).

### 5.4 Família e Consultório (`#familia`, `#consultorio`)

- [x] Fotos: `familia`, `crianca`, `mesa`, `atendimento`, `modelo`, `familia-espelho`, `espelho`, em WebP otimizado (D22).
- [x] 🔴 Autorização das pessoas retratadas confirmada pela dona do projeto (D22). Ela deve manter as autorizações arquivadas.
- [x] Textos "Atendimento humanizado" e "Atendimento exclusivo" usados como no design (D22).

### 5.5 Por que prevenir (`#prevenir`) e Dúvidas (`#duvidas`)

- [x] Quatro cartões de "Por que prevenir?" e cinco perguntas frequentes (acordeão nativo, acessível, com teclado). Ver D21.
- [ ] 🔴 Textos do design usados a pedido da dona do projeto (D21). A Dra. ainda deve revisar: "Evita dor", "Economiza: prevenir custa bem menos do que tratar depois" e as respostas sobre siso e clareamento. Podem contar como promessa de resultado.

### 5.6 Resultados (`#resultados`)

- [x] Recortes das fotos (D17), sem textos de terceiros, otimizados (D25). A imagem de cárie em andamento ficou de fora.
- [ ] 🔴 TCLE de cada paciente cobrindo o uso no site, com nome da Dra. e CRO visíveis (D23). EM ESPERA.
- [ ] 🔴 Regras do CFO para "diagnóstico e resultado": permitido com TCLE, pelo dentista que fez o tratamento (D23). Confirmar com o CRO-MG, e usar fotos clínicas da Dra., não capturas de Instagram de pacientes.

### 5.7 Depoimentos (`#depoimentos`)

- [x] Três depoimentos do design, com nome omitido ("Paciente · via WhatsApp") (D25).
- [ ] 🔴 Autorização de cada pessoa que falou, inclusive a captura do Instagram com "@" de terceiros. EM ESPERA.
- [ ] 🔴 A cartilha consultada não trata de depoimentos (D23): sem base oficial. Só publicar com a posição do CRO-MG. EM ESPERA.

### 5.8 Versão do celular (design "Site Completo", abaixo de 1180 px)

- [x] Layout próprio do celular em Sobre, Família, Tratamentos, Por que prevenir, Consultório, Resultados, Depoimentos e Contato, mais ajustes no cabeçalho e no hero (D27).
- [x] Tratamentos e Depoimentos com os textos curtos do design, como a dona do projeto pediu (D27). Os demais textos seguem os atuais.
- [ ] 🔴 A Dra. precisa confirmar os textos curtos de Tratamentos ("Mais claros, com segurança e acompanhamento.", "Aparência natural.") e as falas encurtadas dos depoimentos (D27).
- [ ] Revisão no celular real junto com a Dra.

### Em todas as seções

- [ ] Testes de fumaça, axe e teclado cobrindo a seção nova (hoje são 30 execuções).
- [ ] Lighthouse mantido na meta (D12).
- [ ] Imagens só em formato otimizado e com texto alternativo.
- [ ] Nenhum link para seção inexistente, e o rodapé atualizado.
