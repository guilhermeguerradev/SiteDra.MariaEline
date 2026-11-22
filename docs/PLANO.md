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
- [ ] 🔴 Branch protection na `main`: exigir PR e CI verde (ver DECISOES D05)
- [x] Template de PR com campos: o que foi feito, escolhas 🟡, como testar

## Etapa 1 — Base visual

- [ ] Exportar o design (variação 3) para `docs/design/`
- [ ] Tokens de cor, fonte e espaçamento em `src/styles/`
- [ ] Fonte Outfit servida pelo próprio site
- [ ] Respeitar `prefers-reduced-motion`
- [ ] Cabeçalho com nome, selo, Agendar e WhatsApp
- [ ] 🔴 Links de navegação: esconder ou manter (PRD, seção 6)

## Etapa 2 — Hero

- [ ] Hero em 360px e em desktop
- [ ] Selos e chips do design
- [ ] Botão Agendar e botão WhatsApp com o número configurado
- [ ] 🔴 Foto da família no lugar do PLACEHOLDER
- [ ] 🔴 Número de WhatsApp em `src/domain/`

## Etapa 3 — Qualidade

- [ ] Teste de fumaça com Playwright: página carrega, botões de WhatsApp com o número certo, nenhum link quebrado
- [ ] Testes de `src/domain/` (dados válidos)
- [ ] Lighthouse com a meta a confirmar
- [ ] Revisão de acessibilidade: contraste, teclado, texto alternativo
- [ ] Revisão em 360px

## Etapa 4 — Publicar (adiada)

Esta etapa só começa com decisão da dona do projeto sobre hospedagem e domínio.

- [ ] 🔴 Escolher o domínio e definir onde registrar (ver DECISOES D06)
- [ ] 🔴 Confirmar a hospedagem para uso comercial
- [ ] Conectar o repositório à Vercel
- [ ] Apontar o domínio
- [ ] Google Meu Negócio: a dona do projeto cria ou confirma o perfil
- [ ] Revisão final no celular junto com a Dra. Maria Eline

## Fase futura (seções adicionais)

Entram depois, com nova rodada de PRD e PLANO. Ver PRD, "Fase futura".
