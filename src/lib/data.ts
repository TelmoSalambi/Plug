const envNumber: string | undefined = import.meta.env.VITE_WHATSAPP_NUMBER;

export const WHATSAPP = (envNumber ?? "244941216095").replace(/\D/g, "");

export const formatPhone = (number: string) =>
  number.replace(/^(\d{3})(\d{3})(\d{3})(\d{3})$/, "+$1 $2 $3 $4");

export const waLink = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const provinces = ["Lubango", "Namibe", "Benguela", "Luanda"];

export const img = {
  iphone:
    "https://images.pexels.com/photos/10883732/pexels-photo-10883732.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  iphoneRed:
    "https://images.pexels.com/photos/12969242/pexels-photo-12969242.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  iphoneAirpods:
    "https://images.pexels.com/photos/10885669/pexels-photo-10885669.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  appleDevices:
    "https://images.pexels.com/photos/236086/pexels-photo-236086.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  airpods:
    "https://images.pexels.com/photos/5099868/pexels-photo-5099868.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  goldTray:
    "https://images.pexels.com/photos/4155254/pexels-photo-4155254.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  goldDisplay:
    "https://images.pexels.com/photos/20858959/pexels-photo-20858959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  goldWoman:
    "https://images.pexels.com/photos/10944923/pexels-photo-10944923.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  goldBar:
    "https://images.pexels.com/photos/35065436/pexels-photo-35065436.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  sofa: "https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  sofa2:
    "https://images.pexels.com/photos/7214166/pexels-photo-7214166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  carClean:
    "https://images.pexels.com/photos/6873185/pexels-photo-6873185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  carSeats:
    "https://images.pexels.com/photos/5213023/pexels-photo-5213023.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

export const socialProof = [
  { icon: "Map", title: "Várias Províncias", desc: "Lubango · Namibe · Benguela · Luanda" },
  { icon: "Clock", title: "Pagamento na Hora", desc: "O seu ouro vira dinheiro na hora" },
  { icon: "Car", title: "Atendimento ao Domicílio", desc: "Gratuito, vamos até si" },
  { icon: "Shield", title: "Garantia nos Produtos", desc: "Equipamentos verificados" },
] as const;

export const techProducts = [
  {
    name: "iPhone Novos",
    desc: "Selados, últimos modelos disponíveis",
    icon: "Phone",
    image: img.iphone,
  },
  {
    name: "iPhone Usados",
    desc: "Verificados e testados, com garantia",
    icon: "Recycle",
    image: img.iphoneRed,
  },
  { name: "AirPods", desc: "Pro e gerações mais recentes", icon: "Headphones", image: img.airpods },
  {
    name: "Acessórios",
    desc: "Capas, carregadores, cabos e mais",
    icon: "Plug",
    image: img.appleDevices,
  },
  {
    name: "Comandos PS4",
    desc: "DualShock originais e compatíveis",
    icon: "Gamepad",
    image: img.iphoneAirpods,
  },
  {
    name: "Assistência Técnica",
    desc: "Reparação e configuração de dispositivos",
    icon: "Tool",
    image: img.iphoneRed,
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
  "Ouro danificado",
];

export const cleanServices = [
  { icon: "Sofa", title: "Sofás & poltronas", desc: "De 1 a 7 lugares", image: img.sofa },
  {
    icon: "Car",
    title: "Interior de viatura",
    desc: "Bancos e interior completo",
    image: img.carSeats,
  },
  { icon: "Bed", title: "Colchões", desc: "Solteiro, casal e king", image: img.sofa2 },
  { icon: "Chair", title: "Cadeiras", desc: "Sala e escritório", image: img.carClean },
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
    q: "Que tipo de ouro compram?",
    a: "Compramos e trocamos qualquer tipo de ouro: fios, anéis, brincos, pulseiras, relógios, barras, cordões, pingentes e medalhas, mesmo que esteja danificado. Pesamos na hora e pagamos de imediato.",
  },
  {
    q: "Os iPhones têm garantia?",
    a: "Sim. Todos os equipamentos, novos ou usados, são verificados e testados antes da venda e acompanham garantia. Também oferecemos assistência técnica.",
  },
  {
    q: "Fazem atendimento fora de Lubango?",
    a: "Sim. Estamos presentes em Lubango, Namibe, Benguela e Luanda. A Ourivesaria oferece atendimento ao domicílio gratuito e a Plug Clean pode deslocar-se até si.",
  },
  {
    q: "Como funciona a limpeza da Plug Clean?",
    a: "Marca o serviço, a nossa equipa vai até si ou recebe a peça, fazemos a lavagem a seco e limpeza profunda, e entregamos. Temos tabela de preços fixa em kwanzas.",
  },
  {
    q: "Fazem instalação e acabamentos?",
    a: "Sim. A Plug Business tem equipas no terreno para serviços técnicos de instalação e acabamentos em casas e escritórios.",
  },
];
