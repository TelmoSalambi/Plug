import type { IconKey } from "../components/Icon";

// Números oficiais de WhatsApp/telefone do Grupo Plug Business
// VITE_WHATSAPP_NUMBER pode conter um ou vários números separados por vírgula
// (ex.: "244941216095,244940986180"). O primeiro é usado para links rápidos de WhatsApp.
const envNumber: string | undefined = import.meta.env.VITE_WHATSAPP_NUMBER;

export const WHATSAPP_LIST: string[] = (envNumber ?? "244941216095,244940986180")
  .split(",")
  .map((n) => n.replace(/\D/g, ""))
  .filter((n) => /^\d{10,15}$/.test(n));

export const WHATSAPP = WHATSAPP_LIST[0] ?? "244941216095";

export const BRAND_NAME = "Grupo Plug Business";
export const BRAND_TAGLINE = "Um só grupo, onze áreas de actividade.";

export const formatPhone = (number: string) => {
  const m = number.match(/^(\d{3})(\d{3})(\d{3})(\d{3})$/);
  return m ? `+${m[1]} ${m[2]} ${m[3]} ${m[4]}` : number;
};

export const waLink = (msg: string, number: string = WHATSAPP) =>
  `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

export const telLink = (number: string = WHATSAPP) => `tel:+${number}`;

export const serviceAreas = ["Lubango", "Namibe", "Benguela", "Luanda"] as const;

export const address =
  "Rua da Clínica Danfran, ao lado do ATM do Banco Atlântico, perto do Hotel Chik Chik / Bombas Central, Lubango, Huíla, Angola.";

export const schedule = "Segunda a Sábado · 08h às 18h";

// URLs sociais
export const social = {
  instagram: { handle: "@plugbusiness.lda", url: "https://instagram.com/plugbusiness.lda" },
  tiktok: { handle: "@plugbusiness.lda", url: "https://tiktok.com/@plugbusiness.lda" },
} as const;

// ---------- MARCAS DO GRUPO ----------
export type BrandKey =
  | "apple"
  | "gold"
  | "deliveries"
  | "games"
  | "works"
  | "food"
  | "motors"
  | "money"
  | "drip"
  | "equipa"
  | "clean";

export type Brand = {
  id: BrandKey;
  name: string;
  fullName: string;
  shortDesc: string;
  longDesc: string;
  icon: IconKey;
  accent: string;
  featured: boolean;
  whatsappMsg: string;
  anchor: string;
};

export const brands: Brand[] = [
  {
    id: "apple",
    name: "Plug Apple",
    fullName: "Plug Apple",
    shortDesc: "Produtos Apple",
    longDesc:
      "Venda de iPhones, AirPods, iPads, MacBooks, Apple Watch e acessórios. Consulte a equipa sobre modelos, disponibilidade, estado, garantia e assistência técnica.",
    icon: "Phone",
    accent: "#F0C94A",
    featured: true,
    whatsappMsg: "Olá! Tenho interesse em produtos Apple da Plug Apple.",
    anchor: "#marcas-apple",
  },
  {
    id: "gold",
    name: "Plug Gold",
    fullName: "Plug Gold · Ourivesaria",
    shortDesc: "Compra de ouro",
    longDesc:
      "Compra e avaliação de artigos de ouro, incluindo fios, anéis, brincos, pulseiras, relógios, barras, mascotes e medalhas. Contacte a equipa para conhecer o valor da avaliação e as opções de venda ou troca.",
    icon: "Ring",
    accent: "#F0C94A",
    featured: true,
    whatsappMsg: "Olá! Quero vender ou trocar ouro na Plug Gold.",
    anchor: "#marcas-gold",
  },
  {
    id: "clean",
    name: "Plug Clean",
    fullName: "Plug Clean · Lavagem a seco",
    shortDesc: "Limpeza profissional",
    longDesc:
      "Lavagem a seco e limpeza de sofás, colchões, cadeiras e interiores de viatura. Consulte a equipa para confirmar a tabela de preços, disponibilidade e deslocação.",
    icon: "Sofa",
    accent: "#4fd1c5",
    featured: true,
    whatsappMsg: "Olá! Quero marcar um serviço de limpeza com a Plug Clean.",
    anchor: "#marcas-clean",
  },
  {
    id: "deliveries",
    name: "Plug Entregas",
    fullName: "Plug Entregas",
    shortDesc: "Serviço de entregas",
    longDesc:
      "Entrega de produtos comprados connosco. Contacte a equipa para confirmar zonas de atendimento, prazos e custos.",
    icon: "Truck",
    accent: "#60a5fa",
    featured: false,
    whatsappMsg: "Olá! Quero saber mais sobre as Plug Entregas.",
    anchor: "#marcas",
  },
  {
    id: "games",
    name: "Plug Games",
    fullName: "Plug Games",
    shortDesc: "Playstation & jogos",
    longDesc:
      "Consolas PlayStation, comandos DualShock/DualSense, videojogos e acessórios de gaming. Consulte a equipa sobre disponibilidade, estado e condições de cada produto.",
    icon: "Gamepad",
    accent: "#a78bfa",
    featured: false,
    whatsappMsg: "Olá! Tenho interesse na Plug Games.",
    anchor: "#marcas",
  },
  {
    id: "works",
    name: "Plug Obras",
    fullName: "Plug Obras",
    shortDesc: "Construção & acabamentos",
    longDesc:
      "Serviços de construção, instalação e acabamentos em casas e escritórios. Contacte a equipa para confirmar o âmbito e a disponibilidade do trabalho.",
    icon: "Tool",
    accent: "#fb923c",
    featured: false,
    whatsappMsg: "Olá! Quero informações sobre a Plug Obras.",
    anchor: "#marcas",
  },
  {
    id: "food",
    name: "Plug Food",
    fullName: "Plug Food",
    shortDesc: "Produtos da Namíbia",
    longDesc: "Comercialização de produtos alimentares e bens vindos directamente da Namíbia.",
    icon: "Food",
    accent: "#f87171",
    featured: false,
    whatsappMsg: "Olá! Quero saber mais sobre a Plug Food.",
    anchor: "#marcas",
  },
  {
    id: "motors",
    name: "Plug Motors",
    fullName: "Plug Motors",
    shortDesc: "Venda de viaturas",
    longDesc:
      "Venda de viaturas novas e usadas. Consulte a equipa sobre disponibilidade, estado, documentação e condições de cada viatura.",
    icon: "Car",
    accent: "#facc15",
    featured: false,
    whatsappMsg: "Olá! Quero saber mais sobre viaturas na Plug Motors.",
    anchor: "#marcas",
  },
  {
    id: "money",
    name: "Plug Money",
    fullName: "Plug Money",
    shortDesc: "Compra & venda de divisas",
    longDesc:
      "Compra e venda de divisas, incluindo dólar americano e euro. Contacte a equipa para confirmar moedas disponíveis, cotação e condições no momento da operação.",
    icon: "Cash",
    accent: "#34d399",
    featured: false,
    whatsappMsg: "Olá! Quero informações sobre câmbio na Plug Money.",
    anchor: "#marcas",
  },
  {
    id: "drip",
    name: "Plug Drip",
    fullName: "Plug Drip",
    shortDesc: "Moda & calçado",
    longDesc: "Venda de roupas, sapatos e acessórios de moda urbana para homem e senhora.",
    icon: "Shirt",
    accent: "#f472b6",
    featured: false,
    whatsappMsg: "Olá! Quero saber mais sobre a Plug Drip.",
    anchor: "#marcas",
  },
  {
    id: "equipa",
    name: "Plug Equipa",
    fullName: "Plug Equipa",
    shortDesc: "A nossa equipa",
    longDesc:
      "Técnicos, ourives, motoristas, vendedores e gestores integram a equipa do Grupo Plug Business e apoiam as diferentes áreas de actividade.",
    icon: "Users",
    accent: "#e5e7eb",
    featured: false,
    whatsappMsg: "Olá! Gostaria de falar com o Grupo Plug Business.",
    anchor: "#equipa",
  },
] as const;

// Imagens reais da loja
import realTechStore from "../assets/real/tech-store.jpg";
import realTechIphones from "../assets/real/tech-iphones-table.jpg";
import realTechVitrine from "../assets/real/tech-vitrine.jpg";
import realTechBoxes from "../assets/real/tech-boxes.jpg";
import realTechInstall from "../assets/real/tech-install.jpg";
import realGoldScale from "../assets/real/gold-scale.jpg";
import realGoldRingScale from "../assets/real/gold-ring-scale.jpg";
import realGoldRingClose from "../assets/real/gold-ring-close.jpg";
import realGoldTradeFlyer from "../assets/real/gold-trade-flyer.jpg";
import cleanWindow from "../assets/clean/clean-window.jpg";
import cleanMattress from "../assets/clean/clean-mattress.jpg";
import cleanChairs from "../assets/clean/clean-chairs.jpg";
import cleanExtraction from "../assets/clean/clean-sofa-extraction.jpg";
import realDeliveriesRider from "../assets/real/deliveries-rider.jpg";
import realDeliveriesPackage from "../assets/real/deliveries-package.jpg";
import realGamesSetup from "../assets/real/games-setup.jpg";
import realWorksSite from "../assets/real/works-site.jpg";
import realFoodWarehouse from "../assets/real/food-warehouse.jpg";
import realFoodProducts from "../assets/real/food-products.jpg";
import realMotorsCars from "../assets/real/motors-cars.jpg";
import realMoneyCount from "../assets/real/money-counting.jpg";
import realDripSneakers from "../assets/real/drip-sneakers.jpg";
import realEquipaTeam from "../assets/real/equipa-team.jpg";

export const img = {
  techStore: realTechStore,
  techIphones: realTechIphones,
  techVitrine: realTechVitrine,
  techBoxes: realTechBoxes,
  techInstall: realTechInstall,
  goldScale: realGoldScale,
  goldRing: realGoldRingScale,
  goldRingClose: realGoldRingClose,
  goldTrade: realGoldTradeFlyer,
  // Plug Clean — fotos reais (sem overlays de marketing)
  cleanWindow,
  cleanMattress,
  cleanChairs,
  cleanExtraction,
  deliveriesRider: realDeliveriesRider,
  deliveriesPackage: realDeliveriesPackage,
  gamesSetup: realGamesSetup,
  worksSite: realWorksSite,
  foodWarehouse: realFoodWarehouse,
  foodProducts: realFoodProducts,
  motorsCars: realMotorsCars,
  moneyCount: realMoneyCount,
  dripSneakers: realDripSneakers,
  equipaTeam: realEquipaTeam,
};

// Galerias por marca (fotos reais/fotorrealistas, sem overlays)
export const brandGallery: Record<BrandKey, { src: string; label: string }[]> = {
  apple: [
    { src: realTechVitrine, label: "Vitrine da loja" },
    { src: realTechIphones, label: "iPhones em exposição" },
    { src: realTechInstall, label: "Instalação técnica" },
    { src: realTechBoxes, label: "Stock de caixas" },
  ],
  gold: [
    { src: realGoldScale, label: "Balança de precisão" },
    { src: realGoldRingScale, label: "Anel e avaliação" },
    { src: realGoldRingClose, label: "Anel de ouro" },
    { src: realGoldTradeFlyer, label: "Compra de ouro" },
  ],
  clean: [
    { src: cleanWindow, label: "Limpeza de vidros · Pós-obra" },
    { src: cleanExtraction, label: "Higienização de estofados" },
    { src: cleanMattress, label: "Tratamento de colchões" },
    { src: cleanChairs, label: "Limpeza de cadeiras" },
  ],
  deliveries: [
    { src: realDeliveriesRider, label: "Estafeta na cidade" },
    { src: realDeliveriesPackage, label: "Entrega ao domicílio" },
  ],
  games: [{ src: realGamesSetup, label: "Setup gaming PS5" }],
  works: [{ src: realWorksSite, label: "Estaleiro em obra" }],
  food: [
    { src: realFoodWarehouse, label: "Armazém grossista" },
    { src: realFoodProducts, label: "Produtos importados" },
  ],
  motors: [{ src: realMotorsCars, label: "Hyundai Elantra · i10 · KIA Rio" }],
  money: [{ src: realMoneyCount, label: "Câmbio de divisas" }],
  drip: [{ src: realDripSneakers, label: "Sneakers & streetwear" }],
  equipa: [{ src: realEquipaTeam, label: "A nossa equipa" }],
};

export const socialProof = [
  {
    icon: "Map",
    title: "Zonas de atendimento",
    desc: "Lubango · Namibe · Benguela · Luanda; confirme por serviço.",
  },
  { icon: "Award", title: "11 marcas", desc: "Diferentes áreas de actividade num só grupo." },
  {
    icon: "Clock",
    title: "Contacto directo",
    desc: "Confirme preços, disponibilidade e prazos com cada equipa.",
  },
  {
    icon: "Shield",
    title: "Condições claras",
    desc: "Peça os detalhes antes de confirmar uma operação ou serviço.",
  },
] as const;

export const goldItems = [
  "Fios",
  "Anéis",
  "Brincos",
  "Pulseiras",
  "Relógios",
  "Barras",
  "Cordões",
  "Pingentes",
  "Medalhas",
  "Mascotes",
  "Ouro danificado",
  "Pedaços",
];

export const cleanServices = [
  { icon: "Sofa", title: "Estofados & sofás", desc: "Higienização profunda de 1 a 7 lugares" },
  { icon: "Car", title: "Interior de viatura", desc: "Bancos, tecto e interior completo" },
  {
    icon: "Bed",
    title: "Colchões",
    desc: "Limpeza de colchões; consulte a equipa sobre o tratamento adequado",
  },
  { icon: "Chair", title: "Cadeiras", desc: "Cadeiras de sala de jantar e escritório" },
  { icon: "Tool", title: "Pós-obra", desc: "Limpeza de espaços após obras ou remodelações" },
] as const;

export const cleanPrices = [
  { item: "Cadeira", price: "1.500" },
  { item: "Sofá 1 lugar", price: "5.000" },
  { item: "Sofá 2 lugares", price: "8.000" },
  { item: "Sofá 3 lugares", price: "12.000" },
  { item: "Sofá 4 lugares", price: "16.000" },
  { item: "Sofá 5 lugares", price: "20.000" },
  { item: "Sofá 6 lugares", price: "24.000" },
  { item: "Sofá 7 lugares", price: "28.000" },
  { item: "Poltrona", price: "6.000" },
  { item: "Banco de viatura (unid.)", price: "4.000" },
  { item: "Interior viatura pequena", price: "18.000" },
  { item: "Interior viatura grande", price: "25.000" },
  { item: "Colchão solteiro", price: "8.000" },
  { item: "Colchão casal", price: "12.000" },
  { item: "Colchão king", price: "15.000" },
];

export const faqs = [
  {
    q: "O que é o Grupo Plug Business?",
    a: "É um grupo empresarial angolano sediado em Lubango, com 11 marcas em áreas como tecnologia, ouro, limpeza, entregas, jogos, obras, alimentação, viaturas, câmbio e moda.",
  },
  {
    q: "Que tipo de ouro posso apresentar à Plug Gold?",
    a: "A Plug Gold avalia artigos como fios, anéis, brincos, pulseiras, relógios, barras, cordões, pingentes, medalhas e mascotes. O valor e as condições são confirmados pela equipa antes de decidir.",
  },
  {
    q: "Posso trocar ouro por iPhone?",
    a: "Contacte a Plug Gold para confirmar se há opções de troca por iPhone e quais modelos e condições estão disponíveis no momento.",
  },
  {
    q: "Que moedas posso consultar na Plug Money?",
    a: "Contacte a Plug Money para confirmar as moedas disponíveis, a cotação no momento e as condições da operação.",
  },
  {
    q: "Os iPhones e consolas têm garantia?",
    a: "As condições de garantia variam conforme o produto. Peça à equipa os termos, o prazo e a cobertura específicos antes de comprar.",
  },
  {
    q: "Fazem atendimento fora de Lubango?",
    a: "As zonas de atendimento variam conforme o serviço. Indique a sua localização à equipa para confirmar disponibilidade, prazo e eventual custo de deslocação.",
  },
  {
    q: "Como funciona a limpeza da Plug Clean?",
    a: "Contacte a Plug Clean com o tipo de peça e a sua localização. A equipa confirma disponibilidade, preço vigente, deslocação e data antes da marcação.",
  },
  {
    q: "A Plug Food vende produtos de onde?",
    a: "A Plug Food apresenta produtos alimentares e outros bens associados à Namíbia. Contacte a equipa para confirmar proveniência, stock e detalhes de cada produto.",
  },
];

// Coordenadas da morada (Clínica Danfran, Lubango) para OpenStreetMap
export const mapCoords = { lat: -14.9186, lon: 13.5323 } as const;
