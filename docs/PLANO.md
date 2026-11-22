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

Esta etapa só começa com decisão da dona do projeto sobre hospedagem e domínio.

- [x] 🔴 Domínio: dispensado por enquanto, endereço do próprio host (DECISOES D13)
- [ ] 🔴 Confirmar o host gratuito que permita uso comercial (recomendado: Cloudflare Pages, D13) e conferir os termos
- [ ] Conectar o repositório ao host escolhido (build `npm run build`, saída `out`)
- [ ] Apontar o domínio (adiado até existir um domínio)
- [ ] Google Meu Negócio: a dona do projeto cria ou confirma o perfil
- [ ] Revisão final no celular junto com a Dra. Maria Eline

## Fase futura (seções adicionais)

Entram depois, com nova rodada de PRD e PLANO. Ver PRD, "Fase futura".
