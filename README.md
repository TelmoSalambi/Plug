# Grupo Plug Business — Website

Website do **Grupo Plug Business**, sediado em Lubango, Angola, com 11 marcas:

| Marca         | Área                                            |
| ------------- | ----------------------------------------------- |
| Plug Apple    | Produtos Apple, acessórios e assistência        |
| Plug Gold     | Compra e troca de ouro                          |
| Plug Clean    | Limpeza de sofás, colchões, cadeiras e viaturas |
| Plug Entregas | Entregas                                        |
| Plug Games    | Consolas, jogos e acessórios                    |
| Plug Obras    | Construção e acabamentos                        |
| Plug Food     | Produtos alimentares e bens da Namíbia          |
| Plug Motors   | Viaturas                                        |
| Plug Money    | Compra e venda de divisas                       |
| Plug Drip     | Moda e calçado                                  |
| Plug Equipa   | Equipa do grupo                                 |

## Arquitectura

Aplicação React com **rotas reais** através de React Router. O build pré-renderiza o conteúdo de cada rota numa página HTML própria, com título, descrição, canonical e metadados de partilha. No browser, React hidrata o HTML já entregue.

```text
/                    Página inicial
/marcas/apple        Plug Apple
/marcas/gold         Plug Gold
/marcas/clean        Plug Clean e tabela de preços
/marcas/...          Páginas das outras marcas
```

As páginas são geradas para alojamento estático no GitHub Pages. O site deve ser servido por HTTP/HTTPS; abrir o `index.html` directamente com `file://` não é suportado pela navegação por rotas.

## Stack

| Camada    | Tecnologia                           |
| --------- | ------------------------------------ |
| UI        | React 19 + TypeScript 5 (strict)     |
| Rotas     | React Router (`BrowserRouter`)       |
| Build     | Vite 7 + geração das páginas de rota |
| Estilo    | Tailwind CSS v4                      |
| Qualidade | ESLint 10 + Prettier 3               |
| Testes    | Vitest 5 + Testing Library           |

## Comandos

```bash
npm ci                 # instalar dependências
npm run dev            # servidor de desenvolvimento
npm run typecheck      # tsc --noEmit
npm run lint           # ESLint
npm run format:check   # verificar formatação
npm test               # testes
npm run test:coverage  # testes com relatório de cobertura
npm run build          # valida TypeScript, compila e gera dist/ e páginas SEO
npm run preview        # pré-visualizar o build
```

## Variáveis de ambiente

| Variável               | Descrição                                                                                                        | Padrão                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `VITE_WHATSAPP_NUMBER` | Números de WhatsApp, separados por vírgula, só dígitos e com indicativo internacional. O primeiro é o principal. | `244941216095,244940986180`            |
| `VITE_SITE_URL`        | URL pública usada para canonical, sitemap e partilha.                                                            | `https://telmosalambi.github.io/Plug/` |
| `VITE_BASE_PATH`       | Caminho-base do alojamento. O workflow do GitHub Pages define `/Plug/`.                                          | `/` localmente                         |

Copie `.env.example` para `.env` e actualize os dados quando o domínio ou os contactos mudarem. Não coloque segredos em variáveis `VITE_*`: são incluídas no código público do browser.

## Estrutura

```text
index.html                    # entrada e metadados base
public/                       # favicon, imagem social, robots.txt e sitemap.xml
scripts/generate-pages.mjs    # pré-renderiza rotas, gera metadados, sitemap e 404
src/entry-server.tsx           # renderiza as rotas para HTML estático
src/lib/route-config.ts        # tabela partilhada de rotas do browser e do build
src/
  assets/                      # imagens do site
  components/                  # Navbar, Footer, Hero, BrandHero, etc.
  layouts/SiteLayout.tsx       # layout e metadados por rota
  lib/data.ts                  # marcas, preços, contactos e conteúdo
  lib/site-seo.json            # títulos e descrições por rota
  pages/                       # páginas das marcas e página 404
  hooks/useReveal.ts           # reveal progressivo no scroll
.github/workflows/deploy.yml  # verificações e publicação no GitHub Pages
```

## SEO, acessibilidade e publicação

- Título, canonical, Open Graph e Twitter Card específicos para cada página gerada.
- `robots.txt` e `sitemap.xml` com URLs absolutas para o domínio público.
- Link para saltar ao conteúdo, foco de teclado visível, textos alternativos e suporte a movimento reduzido.
- O movimento respeita `prefers-reduced-motion`; o mapa externo só é carregado após pedido explícito.
- As fontes Inter e Playfair Display são alojadas no próprio site, sem pedidos ao Google Fonts.
- O workflow executa typecheck, lint, formatação, testes, auditoria das dependências e build antes da publicação.

O domínio/base do GitHub Pages está configurado no workflow. Se mudar o repositório, domínio ou contactos, actualize `VITE_BASE_PATH`, `VITE_SITE_URL` e `VITE_WHATSAPP_NUMBER` no ambiente de publicação.
