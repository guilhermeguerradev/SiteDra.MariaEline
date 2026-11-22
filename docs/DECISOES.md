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

## D06 — Hospedagem na Vercel por enquanto; domínio pendente

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
