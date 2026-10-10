# Sistema de interface — Grupo Plug Business

## Direcção visual

- Manter o carvão e o dourado da marca, com o dourado reservado a acções principais, estados activos e pequenos acentos.
- Usar superfícies grafite, contornos discretos, espaços generosos e uma largura de leitura controlada; evitar excesso de brilho, sombras e elementos decorativos concorrentes.
- Usar Inter para leitura e Playfair Display apenas para títulos e números de destaque.
- Não usar imagens nos heróis/topos nem como fundos de banner. Manter as fotografias existentes apenas nas galerias e áreas de catálogo; não apagar os ficheiros-fonte sem confirmação.

## Arquitectura das páginas

### Início

1. Proposta de valor e contactos principais.
2. Indicadores institucionais essenciais.
3. Directório pesquisável das onze marcas.
4. Explicação simples do processo de atendimento.
5. Benefícios, perguntas frequentes e chamada final à acção.

### Página de marca

1. Percurso de navegação e identificação da marca.
2. Descrição, contacto directo e acesso aos serviços.
3. Catálogo, preços ou destaques próprios da marca.
4. Galeria existente e chamada final para contacto.

Manter este esqueleto partilhado em `BrandHero` e `BrandSection`; os conteúdos especializados continuam nas páginas Apple, Gold e Clean.

## Layout e componentes

- O contentor principal é `.site-container` em `src/index.css` e adapta margens e largura aos diferentes ecrãs.
- Usar grelhas responsivas para directórios, serviços e galerias; em ecrãs pequenos, privilegiar uma coluna e alvos de toque confortáveis.
- A pesquisa do directório deve aceitar nomes e serviços, ignorar acentos e anunciar a quantidade de resultados.
- CTA principal: contacto/WhatsApp. CTA secundária: explorar conteúdo ou navegar para outra área.
- Navegação global deve funcionar com teclado, estado expandido explícito e fecho com Escape.
- Alojar localmente fontes e recursos estáticos; carregar mapas e outros conteúdos externos apenas após pedido explícito.

## Movimento e acessibilidade

- Movimento tem de explicar uma mudança, confirmar uma acção ou ajudar a orientar; não adicionar movimento apenas para decorar.
- Usar transições curtas e consistentes: controlos cerca de 180–240 ms, entradas de página discretas e revelação de conteúdo sem deslocações grandes.
- Os heróis não usam imagens nem carrosséis. Não usar faixas infinitas nem animações em loop; manter o destaque visual no conteúdo e nas acções.
- Respeitar `prefers-reduced-motion`, manter o conteúdo visível sem JavaScript, e validar estados de foco, teclado e contraste.
- Cada controlo interactivo precisa de nome acessível; imagens informativas precisam de texto alternativo e imagens decorativas devem ficar ocultas de tecnologias de apoio.

## Referências consultadas

- [Microsoft Fluent 2 — Motion](https://fluent2.microsoft.design/motion): movimento funcional, natural, consistente e acessível; transições rápidas entre destinos.
- [Figma — Website layout ideas](https://www.figma.com/resource-library/website-layout-ideas/): hierarquia de informação, grelhas responsivas e layouts que tornam o conteúdo fácil de encontrar.
- [W3C WAI — Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html): reduzir animações não essenciais e respeitar a preferência de movimento reduzido.
- [Uber Base — Motion](https://base.uber.com/6d2425e9f/v/0/p/116184-motion): consistência, previsibilidade e controlo do utilizador sobre movimento contínuo.
