# Site da Dra. Maria Eline Muniz

Site institucional de uma página (landing page) da cirurgiã-dentista Maria Eline Muniz (Juiz de Fora, MG), com atendimento particular. O objetivo é apresentar a profissional, os tratamentos e o consultório, e levar a pessoa a agendar pelo WhatsApp.

Publicado em <https://dramariaeline.pages.dev>.

## Stack

| Área       | Escolha                                                                         |
| ---------- | ------------------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router), exportado como site estático (`output: "export"`)      |
| Linguagem  | TypeScript estrito (`any` proibido pelo ESLint)                                 |
| Estilo     | Tailwind CSS 4, com tokens em `src/styles/`                                     |
| Validação  | Zod (dados de contato)                                                          |
| Testes     | Vitest (unitários) e Playwright (navegador, com `axe` para acessibilidade)      |
| Qualidade  | ESLint, Prettier, gitleaks e GitHub Actions                                     |
| Hospedagem | Cloudflare Pages (plano gratuito), publicação automática a cada merge na `main` |

Não há back-end nem banco de dados: todo o conteúdo é versionado no repositório.

## Como rodar

Requer Node 22 ou superior.

```bash
npm install
npm run dev          # servidor de desenvolvimento em http://localhost:3000
```

| Comando                | O que faz                                                             |
| ---------------------- | --------------------------------------------------------------------- |
| `npm run lint`         | ESLint                                                                |
| `npm run typecheck`    | Gera os tipos do Next e roda o `tsc`                                  |
| `npm run format:check` | Confere a formatação (Prettier); `npm run format` corrige             |
| `npm test`             | Testes unitários (Vitest)                                             |
| `npm run build`        | Gera o site estático na pasta `out/`                                  |
| `npm run test:e2e`     | Testes de navegador (Playwright) sobre o `out/`; rode o `build` antes |

Para o Playwright pela primeira vez: `npx playwright install chromium`.

### Variável de ambiente

`NEXT_PUBLIC_SITE_URL` (opcional) define o endereço público, sem barra no final. Ela alimenta o link canônico, o Open Graph, os dados estruturados, o `robots.txt` e o `sitemap.xml`. Em desenvolvimento pode ficar vazia. Veja `.env.example`.

## Estrutura

```
app/                 Página e layout do Next.js, robots e sitemap. Sem regra de negócio.
src/
  components/        Peças visuais (uma por arquivo). A pasta celular/ tem a versão
                     de cada seção para telas menores que 1180 px.
  domain/            Conteúdo do site e funções puras: textos, tratamentos, contatos
                     (validados com Zod), SEO, formatação.
  styles/            Tokens de cor, fonte e espaço, e as animações.
public/images/       Imagens otimizadas (WebP).
tests/
  unit/              Vitest.
  e2e/               Playwright.
scripts/             Preparo das imagens (corte e otimização) a partir dos originais.
docs/                PRD, plano, registro de decisões e referência de design.
```

A direção das dependências é `app → components → domain`. O `domain` nunca importa componentes nem a pasta `app`.

### Decisões de projeto que valem saber

- **Conteúdo fora dos componentes.** Textos, serviços e contatos ficam em `src/domain/` como objetos tipados. Os componentes só apresentam. Isso permite testar o conteúdo (por exemplo, que os tratamentos batem com o PRD) sem renderizar nada.
- **Duas versões de cada seção.** O design do celular é outro layout, não só uma versão menor do desktop. Por isso cada seção tem um componente para telas pequenas (`celular/`) e outro para telas grandes, e o CSS mostra um ou outro no ponto de quebra de 1180 px. O conteúdo vem da mesma fonte, então os textos não se duplicam à mão.
- **Animações em CSS, ativadas ao entrar na tela.** Um observador marca cada bloco que aparece e o CSS faz o resto. Sem JavaScript, ou com "reduzir movimento" ligado no sistema, nada fica escondido.
- **Site estático.** Gera HTML puro, sem servidor, o que mantém o custo zero e o carregamento rápido.
- **Acessibilidade e desempenho** são verificados nos testes (axe, teclado, imagens com texto alternativo) e nas métricas do Lighthouse.

## Fluxo de trabalho

1. Branch a partir da `main` atualizada (`tipo/N-descricao`).
2. Commits pequenos no formato `tipo: descrição (#N)`.
3. Pull request com o que foi feito, as escolhas técnicas e como testar. O CI roda lint, tipos, formatação, testes, build e a varredura de segredos.
4. Revisão humana e merge com squash. A `main` é protegida: não aceita push direto.

## Documentação

- [`docs/prd.md`](docs/prd.md): requisitos e textos oficiais.
- [`docs/PLANO.md`](docs/PLANO.md): etapas e o que já foi feito.
- [`docs/DECISOES.md`](docs/DECISOES.md): registro de cada decisão e por quê.
- [`CLAUDE.md`](CLAUDE.md): regras do projeto para quem desenvolve com o Claude Code.

## Observação sobre o conteúdo

O texto do site segue o PRD. Depoimentos e imagens de pacientes só são publicados com o termo de consentimento de cada pessoa, e a publicidade segue as regras do Conselho Federal de Odontologia (ver `docs/DECISOES.md`, D22 e D23).
