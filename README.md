# Grupo Plug Business — Landing Page

Landing page de uma página só do Grupo Plug Business (Lubango, Angola):
tecnologia, ourivesaria e limpeza profunda.

## Stack

| Camada    | Tecnologia                                              |
| --------- | ------------------------------------------------------- |
| UI        | React 19 + TypeScript 5 (strict)                        |
| Build     | Vite 7 (`vite-plugin-singlefile` → build em HTML único) |
| Estilo    | Tailwind CSS v4 (`@tailwindcss/vite`)                   |
| Qualidade | ESLint 10 (flat config) + Prettier 3                    |
| Testes    | Vitest 5 + Testing Library (jsdom)                      |

## Comandos

```bash
npm ci            # instalar dependências (usa o package-lock.json)
npm run dev       # servidor de desenvolvimento (http://localhost:5173)

npm run typecheck # tsc --noEmit (erros de tipo)
npm run lint      # ESLint
npm run format    # Prettier (escreve)
npm test          # Vitest (uma execução)
npm run test:watch
npm run build     # typecheck + vite build → dist/
npm run preview   # pré-visualizar o build
```

## Variáveis de ambiente

| Variável               | Descrição                                                                     | Padrão         |
| ---------------------- | ----------------------------------------------------------------------------- | -------------- |
| `VITE_WHATSAPP_NUMBER` | Número do WhatsApp em formato internacional, só dígitos (ex.: `244941216095`) | `244941216095` |

Copie `.env.example` para `.env` e ajuste o número real do negócio.
O ficheiro `.env` não é versionado; `.env.example` é.

## Estrutura

```
index.html            # entrada HTML (lang pt-AO, SEO/OG, favicon)
src/
  assets/             # imagens locais (inlined no build single-file)
  components/         # componentes da landing
  hooks/useReveal.ts  # animação de reveal no scroll (IntersectionObserver)
  lib/data.ts         # conteúdo, preços, FAQs e links de WhatsApp
  test/setup.ts       # mocks jsdom para os testes
public/favicon.jpg
```

## Build

O build gera um `dist/index.html` único (JS/CSS/imagens locais inline) e
usa caminhos relativos (`base: "./"`), por isso funciona em subpastas,
GitHub Pages e até aberto via `file://`. As imagens de exemplo do Pexels e
as fontes do Google Fonts continuam a depender de internet.
