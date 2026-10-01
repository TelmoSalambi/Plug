# Grupo Plug Business — Website

Website multi-página do **Grupo Plug Business** (Lubango, Angola), um grupo
empresarial com **11 marcas especializadas**:

| Marca         | Área                                                      |
| ------------- | --------------------------------------------------------- |
| Plug Apple    | Produtos Apple (iPhone, AirPods, acessórios, assistência) |
| Plug Gold     | Compra e troca de ouro (Ourivesaria)                      |
| Plug Clean    | Limpeza a seco (sofás, viaturas, colchões, cadeiras)      |
| Plug Entregas | Entregas rápidas                                          |
| Plug Games    | Consolas Playstation, comandos e jogos                    |
| Plug Obras    | Construção e acabamentos                                  |
| Plug Food     | Produtos alimentares da Namíbia                           |
| Plug Motors   | Venda de viaturas                                         |
| Plug Money    | Compra e venda de divisas                                 |
| Plug Drip     | Moda, roupas e calçado                                    |
| Plug Equipa   | A equipa do grupo                                         |

## Arquitectura

É uma **SPA com múltiplas rotas** (React Router em modo _hash_) que gera um único
ficheiro `dist/index.html` — funciona em subpastas, GitHub Pages e até via `file://`.

```
/                Página inicial (apresentação do grupo)
/marcas/apple    Página da Plug Apple
/marcas/gold     Página da Plug Gold
/marcas/clean    Página da Plug Clean (+ tabela de preços)
/marcas/...      Página de cada uma das outras 8 marcas
```

## Stack

| Camada    | Tecnologia                                     |
| --------- | ---------------------------------------------- |
| UI        | React 19 + TypeScript 5 (strict)               |
| Rotas     | react-router-dom (HashRouter)                  |
| Build     | Vite 7 (`vite-plugin-singlefile` → HTML único) |
| Estilo    | Tailwind CSS v4                                |
| Qualidade | ESLint 10 + Prettier 3                         |
| Testes    | Vitest 5 + Testing Library (jsdom)             |

## Comandos

```bash
npm ci               # instalar dependências
npm run dev          # servidor de desenvolvimento (http://localhost:5173)
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint
npm run lint:fix     # ESLint --fix
npm run format       # Prettier
npm test             # Vitest
npm run build        # typecheck + vite build → dist/index.html (ficheiro único)
npm run preview      # pré-visualizar o build
```

## Variáveis de ambiente

| Variável               | Descrição                                                                                                                       | Padrão                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `VITE_WHATSAPP_NUMBER` | Números de WhatsApp separados por vírgula (formato internacional, só dígitos, com `244` para Angola). O primeiro é o principal. | `244941216095,244940986180` |

Copie `.env.example` para `.env`.

## Estrutura

```
index.html              # entrada (lang pt-AO, SEO/OG, JSON-LD, favicon, og:image)
public/
  favicon.jpg           # ícone
  og-image.jpg          # imagem de partilha social (1200x630)
  robots.txt · sitemap.xml
src/
  assets/               # logos, banners e imagens globais
  assets/real/          # fotos reais da loja (organizadas e otimizadas)
  components/           # componentes reutilizáveis (Navbar, Footer, Hero, BrandHero, ...)
  layouts/SiteLayout.tsx  # layout comum a todas as páginas
  pages/
    Home.tsx            # página inicial (foco no grupo)
    Apple.tsx           # página Plug Apple
    Gold.tsx            # página Plug Gold
    Clean.tsx           # página Plug Clean (+ preços)
    BrandPlaceholder.tsx # factory de páginas para as outras 8 marcas
  hooks/useReveal.ts    # animação de reveal no scroll
  lib/data.ts           # conteúdo, marcas, preços, FAQs e links
  test/setup.ts         # mocks jsdom para os testes
```

## SEO & Acessibilidade

- Meta tags Open Graph + Twitter Card + JSON-LD `LocalBusiness`
- `robots.txt` + `sitemap.xml`
- Skip-link "Ir para o conteúdo principal" (acessível por teclado)
- `aria-label` em botões, links sociais e logo; roles `menu/tab` no dropdown e carrossel
- Respeito por `prefers-reduced-motion`
- Estrutura semântica (`header`, `main`, `section`, `footer`, `nav`)

## Build

O build gera um `dist/index.html` único (JS/CSS/imagens locais inline) com caminhos
relativos (`base: "./"`) — funciona em qualquer hospedagem e até aberto directamente
no browser. Google Fonts é carregado via internet.
