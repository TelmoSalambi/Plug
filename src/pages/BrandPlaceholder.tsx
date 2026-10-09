import { Link } from "react-router-dom";
import { brands, brandGallery, waLink, type BrandKey } from "../lib/data";
import { BrandHero, BrandSection, BrandGallery } from "../components/BrandHero";
import { Icon, type IconKey } from "../components/Icon";
import { useReveal } from "../hooks/useReveal";

// Highlights por marca: texto factual da oferta conhecida de cada área.
type Highlight = { icon: IconKey; title: string; desc: string };

const highlights: Partial<Record<BrandKey, Highlight[]>> = {
  deliveries: [
    {
      icon: "Truck",
      title: "Entregas ao domicílio",
      desc: "Entrega de produtos comprados connosco até à sua porta.",
    },
    {
      icon: "Map",
      title: "Várias localidades",
      desc: "Serviço disponível nas províncias onde o grupo opera.",
    },
    {
      icon: "Phone",
      title: "Acompanhamento directo",
      desc: "Combine os detalhes da entrega directamente com a equipa.",
    },
  ],
  games: [
    {
      icon: "Gamepad",
      title: "Consolas PlayStation",
      desc: "Consolas PS4 e PS5 para diferentes formas de jogar.",
    },
    {
      icon: "Headphones",
      title: "Comandos & acessórios",
      desc: "Comandos DualShock e DualSense, jogos e acessórios.",
    },
    {
      icon: "Shield",
      title: "Equipamento verificado",
      desc: "Os equipamentos são verificados antes da venda.",
    },
  ],
  works: [
    {
      icon: "Tool",
      title: "Construção & instalação",
      desc: "Serviços técnicos para espaços residenciais e comerciais.",
    },
    {
      icon: "Users",
      title: "Equipas no terreno",
      desc: "Profissionais próprios acompanham os trabalhos.",
    },
    {
      icon: "Award",
      title: "Acabamentos",
      desc: "Trabalhos de acabamento em casas e escritórios.",
    },
  ],
  food: [
    {
      icon: "Food",
      title: "Produtos alimentares",
      desc: "Selecção de produtos alimentares e bens vindos da Namíbia.",
    },
    {
      icon: "Truck",
      title: "Importação directa",
      desc: "Produtos importados para venda através da Plug Food.",
    },
    {
      icon: "Phone",
      title: "Consulte a disponibilidade",
      desc: "Contacte a equipa para saber os produtos disponíveis.",
    },
  ],
  motors: [
    {
      icon: "Car",
      title: "Viaturas novas e usadas",
      desc: "Opções de viaturas para diferentes necessidades.",
    },
    {
      icon: "Shield",
      title: "Documentação tratada",
      desc: "A equipa acompanha o processo de documentação.",
    },
    {
      icon: "Phone",
      title: "Atendimento directo",
      desc: "Fale com a Plug Motors para consultar as viaturas disponíveis.",
    },
  ],
  money: [
    {
      icon: "Cash",
      title: "Compra & venda de divisas",
      desc: "Operações com dólar americano, euro, kwanzas e outras moedas.",
    },
    {
      icon: "Shield",
      title: "Transacções seguras",
      desc: "Combine os detalhes da operação directamente com a equipa.",
    },
    {
      icon: "Clock",
      title: "Cotação actualizada",
      desc: "Consulte a cotação disponível no momento do contacto.",
    },
  ],
  drip: [
    { icon: "Shirt", title: "Moda urbana", desc: "Roupas, calçado e acessórios de streetwear." },
    {
      icon: "Award",
      title: "Novas opções",
      desc: "Consulte a equipa sobre as peças e tamanhos disponíveis.",
    },
    {
      icon: "Pin",
      title: "Loja em Lubango",
      desc: "Visite a loja ou fale connosco para obter informações.",
    },
  ],
  equipa: [
    {
      icon: "Users",
      title: "Equipa multidisciplinar",
      desc: "Técnicos, ourives, motoristas, vendedores e gestores.",
    },
    {
      icon: "Flag",
      title: "Grupo angolano",
      desc: "Uma empresa angolana com base em Lubango, Huíla.",
    },
    {
      icon: "Handshake",
      title: "Contacto próximo",
      desc: "A equipa está disponível para orientar os clientes para a marca certa.",
    },
  ],
};

export function createBrandPage(id: BrandKey) {
  return function BrandPage() {
    useReveal();
    const brand = brands.find((item) => item.id === id)!;
    const items = highlights[id] ?? [];
    const photos = brandGallery[id];

    return (
      <>
        <BrandHero brand={brand} />

        <BrandSection
          brand={brand}
          id="servicos"
          eyebrow="O que fazemos"
          title="Serviços e produtos"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => {
              const Ico = Icon[item.icon];
              return (
                <article
                  key={item.title}
                  className="reveal group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.16] hover:bg-white/[0.035] sm:p-6"
                  style={{ transitionDelay: `${index * 35}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl border"
                      style={{
                        borderColor: `${brand.accent}35`,
                        background: `${brand.accent}10`,
                        color: brand.accent,
                      }}
                    >
                      <Ico size={21} />
                    </span>
                    <span className="font-display text-sm font-semibold tabular-nums text-white/30">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">{item.desc}</p>
                </article>
              );
            })}
          </div>
          <a
            href={waLink(brand.whatsappMsg)}
            target="_blank"
            rel="noreferrer"
            className="button-primary btn-shine reveal mt-8"
          >
            <Icon.WhatsApp size={18} /> Contactar {brand.name}
          </a>
        </BrandSection>

        {photos.length > 0 && (
          <BrandSection
            brand={brand}
            id="galeria"
            eyebrow="Galeria"
            title="Um olhar sobre o nosso trabalho"
          >
            <BrandGallery brand={brand} photos={photos} />
          </BrandSection>
        )}

        <section className="py-12 sm:py-16">
          <div className="site-container flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="section-kicker">Grupo Plug Business</p>
              <h2 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                Procura outro serviço?
              </h2>
              <p className="mt-1 text-sm text-stone-400">
                Explore as restantes áreas do grupo num só lugar.
              </p>
            </div>
            <Link to={{ pathname: "/", hash: "#marcas" }} className="button-secondary shrink-0">
              Ver todas as marcas <Icon.ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </>
    );
  };
}
