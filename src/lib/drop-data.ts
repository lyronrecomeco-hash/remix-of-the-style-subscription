export type Service = { name: string; price: number; from?: boolean; hot?: boolean };

export const professionals = [
  { name: "Lucas Mendes", key: "lucas" },
  { name: "Allyson", key: "allyson" },
] as const;

const sharedServices: Service[] = [
  { name: "Sobrancelha", price: 10, hot: true },
  { name: "Pigmentação", price: 20 },
  { name: "Hidratação Capilar", price: 25, from: true, hot: true },
  { name: "Esfoliação Facial", price: 10, hot: true },
  { name: "Depilação Orelha", price: 10 },
  { name: "Depilação Nariz", price: 10 },
  { name: "Corte", price: 40, hot: true },
];

export const servicesByProfessional: Record<string, Service[]> = {
  lucas: sharedServices,
  allyson: [
    ...sharedServices,
    { name: "Cavanhaque", price: 10 },
    { name: "Barba", price: 40, hot: true },
    { name: "Nutrição Capilar", price: 25, from: true },
    { name: "Hidratação Barba", price: 25, from: true },
  ],
};

export type Plan = {
  id: string;
  name: string;
  price: string;
  label: string;
  featured?: boolean;
  services: string[];
};

export const plans: Plan[] = [
  { id: "one-corte", name: "ONE Corte", price: "35,00", label: "1 corte por mês", services: ["Corte — 1 grátis/mês", "10% OFF em serviços extras", "10% OFF em cosméticos"] },
  { id: "one-completo", name: "ONE Corte + Barba", price: "70,00", label: "1 atendimento por mês", services: ["Corte — 1 grátis/mês", "Barba — 1 grátis/mês", "10% OFF em serviços extras", "10% OFF em cosméticos"] },
  { id: "corte", name: "Corte Ilimitado", price: "67,00", label: "Liberdade para manter o corte em dia", featured: true, services: ["Corte", "Raspar cabelo — máquina", "Raspar cabelo — navalha", "Pezinho", "10% OFF em serviços extras", "10% OFF em cosméticos"] },
  { id: "barba", name: "Barba Ilimitada", price: "79,90", label: "Barba alinhada, sempre", services: ["Barba", "Bigode", "Cavanhaque", "Raspar barba — máquina", "10% OFF em serviços extras", "10% OFF em cosméticos"] },
  { id: "completo", name: "Corte + Barba Ilimitados", price: "129,80", label: "A experiência DROP completa", services: ["Corte", "Pezinho", "Raspar cabelo — máquina ou navalha", "Barba", "Bigode", "Cavanhaque", "Raspar barba — máquina", "10% OFF em serviços extras", "10% OFF em cosméticos"] },
];

export const formatMoney = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);