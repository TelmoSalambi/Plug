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
export const BRAND_TAGLINE = "Um só grupo, onze marcas de confiança.";

export const formatPhone = (number: string) => {
  const m = number.match(/^(\d{3})(\d{3})(\d{3})(\d{3})$/);
  return m ? `+${m[1]} ${m[2]} ${m[3]} ${m[4]}` : number;
};

export const waLink = (msg: string, number: string = WHATSAPP) =>
  `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

export const telLink = (number: string = WHATSAPP) => `tel:+${number}`;

export const provinces = ["Lubango", "Namibe", "Benguela", "Luanda"] as const;

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
  icon: string; // chave no Icon
  accent: string; // cor HEX principal
  featured: boolean; // se é uma marca com secção expandida
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
      "Venda de iPhones, AirPods, iPads, MacBooks, Apple Watch e acessórios originais. Novos e usados verificados, com garantia.",
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
      "Compramos todo o tipo de ouro — fios, anéis, brincos, pulseiras, relógios, barras, mascotes e medalhas. Pagamento na hora, pesagem transparente e troca por iPhone.",
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
      "Lavagem a seco e limpeza profunda de sofás, colchões, cadeiras e interiores de viatura. Tabela de preços fixa em kwanzas, deslocação até si.",
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
    shortDesc: "Entregas rápidas",
    longDesc:
      "Serviço de entregas rápidas e seguras dos seus produtos comprados connosco até à sua porta, em várias províncias.",
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
      "Consolas Playstation, comandos DualShock/DualSense, videojogos e acessórios de gaming.",
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
      "Serviços técnicos de construção, instalação e acabamentos em casas e escritórios, com equipas próprias no terreno.",
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
      "Viaturas novas e usadas com toda a documentação tratada por nós. Escolha com confiança.",
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
      "Compra e venda de divisas: dólar americano, euro, kwanzas e outras moedas, com cotação justa e transacção segura.",
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
      "A equipa multidisciplinar do Grupo Plug Business: técnicos, ourives, motoristas, vendedores e gestores, sempre ao seu dispor.",
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
import realGoldFlyer from "../assets/real/gold-flyer.jpg";
import realGoldTradeFlyer from "../assets/real/gold-trade-flyer.jpg";

export const img = {
  techStore: realTechStore,
  techIphones: realTechIphones,
  techVitrine: realTechVitrine,
  techBoxes: realTechBoxes,
  techInstall: realTechInstall,
  goldScale: realGoldScale,
  goldRing: realGoldRingScale,
  goldRingClose: realGoldRingClose,
  goldFlyer: realGoldFlyer,
  goldTrade: realGoldTradeFlyer,
};

export const socialProof = [
  { icon: "Map", title: "4 Províncias", desc: "Lubango · Namibe · Benguela · Luanda" },
  { icon: "Award", title: "11 Marcas", desc: "Tudo num só grupo empresarial" },
  { icon: "Clock", title: "Pagamento na Hora", desc: "Ouro vira dinheiro imediatamente" },
  { icon: "Shield", title: "Garantia & Confiança", desc: "Marca angolana consolidada" },
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
  { icon: "Sofa", title: "Sofás & poltronas", desc: "De 1 a 7 lugares" },
  { icon: "Car", title: "Interior de viatura", desc: "Bancos e interior completo" },
  { icon: "Bed", title: "Colchões", desc: "Solteiro, casal e king" },
  { icon: "Chair", title: "Cadeiras", desc: "Sala e escritório" },
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
    q: "Que é o Grupo Plug Business?",
    a: "Somos um grupo empresarial angolano multissetorial sediado em Lubango, que reúne 11 marcas especializadas: tecnologia Apple, compra de ouro, limpeza, entregas, jogos, obras, food, motors, câmbio de divisas, moda e muito mais.",
  },
  {
    q: "Que tipo de ouro compram?",
    a: "Compramos e trocamos qualquer tipo de ouro: fios, anéis, brincos, pulseiras, relógios, barras, cordões, pingentes, medalhas e mascotes, mesmo que esteja danificado ou em pedaços. Pesamos na hora e pagamos de imediato.",
  },
  {
    q: "Também trocam ouro por iPhone?",
    a: "Sim! A Plug Gold é especializada na troca de artigos de ouro por iPhone (novo ou usado), com avaliação transparente à sua frente.",
  },
  {
    q: "A Plug Money compra e vende quais moedas?",
    a: "Trabalhamos com dólar americano, euro e kwanzas, com cotação justa e transacção segura na hora.",
  },
  {
    q: "Os iPhones e consolas têm garantia?",
    a: "Sim. Todos os equipamentos da Plug Apple e Plug Games são verificados antes da venda e acompanham garantia. Também fazemos assistência técnica.",
  },
  {
    q: "Fazem atendimento fora de Lubango?",
    a: "Sim. Estamos presentes em Lubango, Namibe, Benguela e Luanda. As Plug Entregas e a Plug Clean podem deslocar-se até si.",
  },
  {
    q: "Como funciona a limpeza da Plug Clean?",
    a: "Marca o serviço via WhatsApp ou chamada, a nossa equipa vai até si ou recebe a peça, fazemos a lavagem a seco e limpeza profunda, e entregamos. Tabela de preços fixa em kwanzas.",
  },
  {
    q: "A Plug Food vende produtos de onde?",
    a: "A Plug Food comercializa produtos alimentares e bens vindos directamente da Namíbia, com qualidade garantida.",
  },
];

export const testimonials = [
  {
    name: "Maria S.",
    city: "Lubango",
    rating: 5,
    text: "Vendi o meu fio de ouro na Plug Gold e recebi o dinheiro na hora. Pesagem transparente, sem enrolação.",
  },
  {
    name: "João K.",
    city: "Namibe",
    rating: 5,
    text: "Comprei um iPhone 13 selado na Plug Apple. Atendimento excelente e preço justo. É mesmo de confiança.",
  },
  {
    name: "Ana P.",
    city: "Lubango",
    rating: 5,
    text: "O sofá de 4 lugares ficou como novo com a Plug Clean. Vieram a casa no dia combinado.",
  },
  {
    name: "Carlos M.",
    city: "Benguela",
    rating: 5,
    text: "Troquei um anel antigo por um iPhone para a minha filha na Plug Gold. Transacção rápida e honesta.",
  },
] as const;

// Coordenadas da morada (Clínica Danfran, Lubango) para OpenStreetMap
export const mapCoords = { lat: -14.9186, lon: 13.5323 } as const;
