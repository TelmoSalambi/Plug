import { brands, brandGallery, waLink, type BrandKey } from "../lib/data";
import { BrandHero, BrandSection, BrandGallery, ComingSoon } from "../components/BrandHero";
import { Icon, type IconKey } from "../components/Icon";
import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";

// Cada item da lista tem: titulo, descricao, icone
type Highlight = { icon: IconKey; title: string; desc: string };

const highlights: Record<string, Highlight[]> = {
  deliveries: [
    {
      icon: "Truck",
      title: "Entregas rápidas",
      desc: "Entregas ao domicílio nas províncias onde operamos.",
    },
    {
      icon: "Clock",
      title: "Pontualidade",
      desc: "Prazos cumpridos, com acompanhamento em tempo real.",
    },
    { icon: "Shield", title: "Segurança", desc: "Produtos transportados com todo o cuidado." },
  ],
  games: [
    { icon: "Gamepad", title: "Playstation", desc: "Consolas PS4, PS5 e acessórios originais." },
    {
      icon: "Headphones",
      title: "Gaming",
      desc: "Headsets, comandos e jogos para a sua experiência.",
    },
    { icon: "Shield", title: "Garantia", desc: "Produtos verificados com garantia incluída." },
  ],
  works: [
    { icon: "Tool", title: "Construção", desc: "Obras e construção civil com equipas próprias." },
    { icon: "Users", title: "Equipa", desc: "Profissionais experientes no terreno." },
    {
      icon: "Award",
      title: "Acabamentos",
      desc: "Acabamentos de alta qualidade em casas e escritórios.",
    },
  ],
  food: [
    {
      icon: "Food",
      title: "Produtos da Namíbia",
      desc: "Produtos alimentares vindos directamente da Namíbia.",
    },
    { icon: "Truck", title: "Importação directa", desc: "Qualidade e variedade exclusivas." },
    { icon: "Pin", title: "Entrega em Lubango", desc: "Entregas locais na cidade de Lubango." },
  ],
  motors: [
    { icon: "Car", title: "Viaturas", desc: "Viaturas novas e usadas com documentação tratada." },
    { icon: "Shield", title: "Confiáveis", desc: "Veículos inspeccionados antes da venda." },
    { icon: "Cash", title: "Financiamento", desc: "Soluções de pagamento flexíveis." },
  ],
  money: [
    { icon: "Cash", title: "Dólar & Euro", desc: "Compra e venda de divisas estrangeiras." },
    { icon: "Shield", title: "Segurança", desc: "Transacções seguras e transparentes." },
    { icon: "Clock", title: "Na hora", desc: "Câmbio imediato com cotação justa." },
  ],
  drip: [
    { icon: "Shirt", title: "Moda urbana", desc: "Roupas, sapatos e acessórios de streetwear." },
    { icon: "Award", title: "Tendências", desc: "Peças actuais para homem e senhora." },
    { icon: "Pin", title: "Em Lubango", desc: "Loja física em Lubango com provas." },
  ],
  equipa: [
    {
      icon: "Users",
      title: "A nossa gente",
      desc: "Técnicos, ourives, motoristas, vendedores e gestores.",
    },
    { icon: "Flag", title: "100% angolana", desc: "Uma equipa jovem, angolana e em crescimento." },
    {
      icon: "Handshake",
      title: "Ao seu dispor",
      desc: "Todos os dias trabalhamos para melhor o servir.",
    },
  ],
};

export function createBrandPage(id: string) {
  return function Page() {
    useReveal();
    const brand = brands.find((b) => b.id === id)!;
    const items = highlights[id] ?? [];
    const photos = brandGallery[id as BrandKey] ?? [];
    const extraImage = photos[0]?.src;
    return (
      <>
        <BrandHero brand={brand} extraImage={extraImage}>
          <p
            className="hero-in mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-400"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="flex items-center gap-2">
              <Icon.Shield size={16} style={{ color: brand.accent }} /> Marca Plug Business
            </span>
            <span className="flex items-center gap-2">
              <Icon.WhatsApp size={16} style={{ color: brand.accent }} /> Atendimento via WhatsApp
            </span>
          </p>
        </BrandHero>

        {items.length > 0 && (
          <BrandSection brand={brand} eyebrow="Destaques" title="O que oferecemos">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((it, i) => {
                const Ico = Icon[it.icon];
                return (
                  <div
                    key={it.title}
                    className="reveal glass rounded-2xl p-7"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: `${brand.accent}15`, color: brand.accent }}
                    >
                      <Ico size={24} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">{it.title}</h3>
                    <p className="mt-2 text-sm text-stone-400">{it.desc}</p>
                  </div>
                );
              })}
            </div>
          </BrandSection>
        )}

        {photos.length > 0 ? (
          <BrandSection brand={brand} eyebrow="Galeria" title="Um olhar sobre o nosso trabalho">
            <BrandGallery brand={brand} photos={photos} />
            <a
              href={waLink(brand.whatsappMsg)}
              target="_blank"
              rel="noreferrer"
              className="reveal mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-white/5"
              style={{ borderColor: brand.accent, color: brand.accent }}
            >
              <Icon.WhatsApp size={18} /> Falar com a {brand.name}
            </a>
          </BrandSection>
        ) : (
          <BrandSection brand={brand} eyebrow="Conteúdo" title="Galeria & detalhes em breve">
            <ComingSoon brand={brand} />
          </BrandSection>
        )}

        {/* Navegação para outras marcas */}
        <div className="py-10">
          <div className="mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
            <div className="reveal flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8">
              <p className="text-sm text-stone-400">Conheça as outras marcas do grupo:</p>
              <div className="flex flex-wrap gap-2">
                {brands
                  .filter((b) => b.id !== brand.id)
                  .slice(0, 6)
                  .map((b) => (
                    <Link
                      key={b.id}
                      to={`/marcas/${b.id}`}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-stone-300 transition hover:border-[#C9A227] hover:text-[#F0C94A]"
                    >
                      {b.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
}
