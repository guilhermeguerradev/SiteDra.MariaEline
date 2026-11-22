# PRD — Site da Dra. Maria Eline Muniz

> Escopo atual: **uma página (hero)**, na variação 3 "Família em Destaque" do Claude Design. Seções futuras estão no fim, em "Fase futura", e não entram nas etapas atuais.
> 🔴 = depende de decisão ou conteúdo da dona do projeto.

## 1. Objetivo

Apresentar a Dra. Maria Eline Muniz e levar a paciente a pedir uma consulta pelo WhatsApp.

## 2. Público

Famílias: pais, filhos e avós que chegam pelo celular. 🔴 Cidade ou bairro de atendimento a confirmar.

## 3. Escopo atual

| Bloco | Conteúdo | Status |
|---|---|---|
| Cabeçalho | Nome, selo e botões Agendar e WhatsApp | Desenhado. 🔴 Links de navegação (ver seção 6) |
| Hero | Foto ampla, título, frase, botões e selos | Desenhado. 🔴 Falta a foto |
| Rodapé | Nome, CRO-MG 64493, "Não aceita planos" | 🔴 Não desenhado. Confirmar se entra e como |

## 4. Conteúdo fixo

### 4.1 Hero (texto exato do design, variação 3)

- Cabeçalho: "doutora maria eline muniz" / "cirurgiã-dentista | saúde da família"
- Selo: "Cirurgiã-Dentista · Saúde da Família"
- Título: "Maria Eline" (em peso leve) e "Muniz"
- Frase: "Cuidado preventivo para o sorriso de toda a sua família, em todas as fases da vida."
- Botões: "Agendar consulta" (principal) e "Como cuidamos da família" (secundário)
- Selos: "Atendimento para toda a família" e "Foco em prevenção"
- Foto: família sorrindo (pais, filhos e avós), em tela inteira. Hoje é PLACEHOLDER.

### 4.2 Atendimento

- "Não aceita planos" (texto enviado). 🔴 Confirmar a redação final e onde aparece.

## 5. Design

- Referência: Claude Design, artefato "Site Dra. Maria Eline Muniz — Tela inicial", variação 3 "Família em Destaque" (`project/V3-Familia.dc.html`).
- Cores: fundo `#8FB3C2` com degradê para `#A9C6D2`, `#BFDCC4` e `#E9D9C6`; texto `#233F45`; creme `#F7F4E6`; texto secundário `#4F6E78`.
- Fonte: Outfit (Google Fonts), pesos 300 a 700.
- Animações de entrada: respeitar `prefers-reduced-motion`.

## 6. Decisões pendentes da navegação

- 🔴 O design mostra links para Tratamentos, Sobre, Família, Depoimentos, Dúvidas e Contato, mas essas seções não existem nesta versão. Proposta: **esconder esses links por enquanto** e manter só Agendar e WhatsApp. Link para seção inexistente vira link quebrado.
- 🔴 O botão "Como cuidamos da família" aponta para `#familia`, que não existe. Proposta: esconder até a seção existir, ou apontar para o WhatsApp.

## 7. Critérios de aceite (escopo atual)

- [ ] Botões de agendar e WhatsApp abrem a conversa com o número configurado
- [ ] Layout correto em 360px e em desktop
- [ ] Nenhum link aponta para seção inexistente
- [ ] Nenhuma imagem `PLACEHOLDER` publicada
- [ ] Textos idênticos aos da seção 4
- [ ] Imagem otimizada; fonte servida pelo próprio site
- [ ] Respeita redução de movimento do sistema
- [ ] Título, descrição e dados estruturados `Dentist` presentes

## 8. Pendências (🔴)

1. Foto da família (substitui o PLACEHOLDER)
2. ~~Número de WhatsApp~~ resolvido em DECISOES D09
3. ~~Cidade ou bairro de atendimento~~ resolvido em DECISOES D09 (Juiz de Fora - MG)
4. Rodapé: confirmar CRO-MG e "Não aceita planos"
5. Navegação: esconder ou manter os links de seções futuras (seção 6)
6. Redação final de "Não aceita planos"

## Fase futura (não entra nas etapas atuais)

Estas seções estão na navegação do design, mas não foram desenhadas nesta versão. Entram depois, em nova rodada de PRD e PLANO.

| Seção (âncora) | Conteúdo | Pré-requisito |
|---|---|---|
| Tratamentos (`#tratamentos`) | 8 serviços (abaixo) | Layout a desenhar |
| Sobre (`#sobre`) | Texto sobre a profissional | Textos da dona |
| Família (`#familia`) | 🔴 A definir | Conteúdo |
| Depoimentos (`#depoimentos`) | Depoimentos de pacientes | Autorização de quem falar |
| Dúvidas (`#duvidas`) | Perguntas frequentes | Respostas da dona |
| Contato (`#contato`) | Cidade, bairro, redes sociais | Dados da dona |

### Textos já prontos dos tratamentos

1. **Prevenção e check-up:** Consultas regulares para acompanhar a saúde bucal e agir antes de qualquer dor.
2. **Limpeza (profilaxia):** Remoção de placa e tártaro para gengivas saudáveis e um sorriso mais leve.
3. **Restaurações:** Tratamento de cáries com materiais da cor do dente, devolvendo forma e função.
4. **Extrações, inclusive de sisos:** Procedimentos planejados com cuidado, conforto e orientação em cada etapa.
5. **Tratamento periodontal:** Cuidado da gengiva para prevenir sangramentos, inflamações e perda dos dentes.
6. **Coroas:** Reconstrução de dentes desgastados ou fragilizados, com aparência natural.
7. **Próteses:** Soluções para repor dentes perdidos e recuperar a mastigação e a confiança.
8. **Clareamento dental:** Dentes mais claros com segurança, sempre após avaliação profissional.

## Fora de escopo

- Blog, área do paciente, agendamento online com pagamento
- Painel administrativo e banco de dados
- Outros idiomas
