import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Check, Instagram, MapPin, Phone, Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropHeader } from "@/components/drop-header";
import { PlanCard } from "@/components/plan-card";
import { plans } from "@/lib/drop-data";
import heroImage from "@/assets/drop-hero.jpg";
import aboutImage from "@/assets/drop-about.jpg";
import interiorImage from "@/assets/drop-interior.jpg";
import teamImage from "@/assets/drop-profissionais.png.asset.json";
import logo from "@/assets/drop-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "DROP Barbearia | Corte e assinatura em Cachoeiro" },
    { name: "description", content: "Agende seu corte ou assine planos de corte e barba ilimitados na DROP Barbearia, em Cachoeiro de Itapemirim." },
    { property: "og:title", content: "DROP Barbearia | Seu estilo, sem limite" },
    { property: "og:description", content: "Corte ilimitado a partir de R$ 67/mês. Agende agora em Cachoeiro." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const services = [
  { name: "Corte", price: "R$ 40", icon: Scissors, copy: "Técnica, leitura de perfil e acabamento limpo." },
  { name: "Barba", price: "R$ 40", icon: Sparkles, copy: "Contorno preciso, toalha quente e finalização." },
  { name: "Corte + Barba", price: "R$ 80", icon: Check, copy: "A experiência completa para renovar o visual." },
];

function HomePage() {
  return <div className="min-h-screen overflow-hidden"><DropHeader />
    <main>
      <section className="relative mx-auto grid min-h-[92svh] max-w-7xl items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.12fr_.88fr] lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-3 border border-line bg-panel px-4 py-2 text-xs font-bold uppercase text-muted-foreground backdrop-blur-md"><span className="h-2 w-2 bg-primary" /> Cachoeiro de Itapemirim · ES</div>
          <h1 className="font-display text-[clamp(3.2rem,8vw,7.1rem)] leading-[.88] uppercase">Seu estilo.<br/><span className="text-primary">Sem limite.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Corte impecável, barba alinhada e uma assinatura que acompanha seu ritmo. Aqui, cada detalhe sustenta sua presença.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link to="/agendar"><CalendarDays /> Agendar agora</Link></Button><Button asChild variant="outline" size="lg"><Link to="/assinar" search={{ plano: "corte" }}>Conhecer assinatura <ArrowRight /></Link></Button></div>
          <div className="mt-11 grid max-w-xl grid-cols-3 border-y border-line py-5"><div><strong className="font-display text-2xl">R$67</strong><p className="text-xs text-muted-foreground">por mês</p></div><div className="border-x border-line px-5"><strong className="font-display text-2xl">6 dias</strong><p className="text-xs text-muted-foreground">por semana</p></div><div className="pl-5"><strong className="font-display text-2xl">100%</strong><p className="text-xs text-muted-foreground">seu estilo</p></div></div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:ml-auto"><div className="absolute -inset-5 border border-primary/20"/><div className="relative aspect-[4/5] overflow-hidden border border-line"><img src={heroImage} alt="Barbeiro realizando corte degradê na DROP" width="1024" height="1280" className="h-full w-full object-cover"/><div className="absolute inset-x-0 bottom-0 bg-background/70 p-5 backdrop-blur-lg"><p className="text-xs font-bold uppercase text-primary">Precisão em cada detalhe</p><p className="mt-1 text-sm text-muted-foreground">Do clássico ao contemporâneo.</p></div></div></div>
      </section>

      <div className="overflow-hidden border-y border-primary bg-primary py-3 text-primary-foreground"><div className="marquee-track flex w-max"><p className="font-display text-lg uppercase">Corte ilimitado · Barba alinhada · Identidade que marca · Agenda inteligente · </p><p className="font-display text-lg uppercase">Corte ilimitado · Barba alinhada · Identidade que marca · Agenda inteligente · </p></div></div>

      <section id="sobre" className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32"><div className="relative max-w-md"><img src={aboutImage} alt="Experiência de barba na DROP Barbearia" loading="lazy" width="1024" height="1280" className="aspect-[4/5] w-full object-cover"/><div className="glass absolute -bottom-7 -right-4 max-w-56 border border-line p-5 sm:-right-10"><strong className="font-display text-3xl text-primary">DROP</strong><p className="mt-2 text-sm text-muted-foreground">Atendimento com presença, técnica e respeito ao seu tempo.</p></div></div><div><p className="eyebrow">Sobre a DROP</p><h2 className="section-title mt-5">Não é só um corte. É como você chega.</h2><p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">Nascemos para transformar o cuidado masculino em um ritual direto, preciso e sem excessos. Uma barbearia contemporânea onde técnica e identidade caminham juntas.</p><div className="mt-9 grid gap-5 sm:grid-cols-2"><div className="border-l-2 border-primary pl-5"><h3 className="font-bold uppercase">Técnica apurada</h3><p className="mt-2 text-sm text-muted-foreground">Profissionais atentos ao seu estilo e à sua rotina.</p></div><div className="border-l-2 border-primary pl-5"><h3 className="font-bold uppercase">Experiência fluida</h3><p className="mt-2 text-sm text-muted-foreground">Do agendamento ao acabamento, sem perder tempo.</p></div></div></div></section>

      <section id="servicos" className="border-y border-line bg-panel/50 py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">Serviços essenciais</p><h2 className="section-title mt-4">Sua melhor versão.</h2></div><p className="max-w-sm text-sm text-muted-foreground">Escolha o serviço, o profissional e o melhor horário. O resto é com a gente.</p></div><div className="mt-12 grid gap-px bg-line md:grid-cols-3">{services.map(({name,price,icon:Icon,copy},i)=><article key={name} className="group bg-background p-7 sm:p-9"><div className="flex items-start justify-between"><span className="text-xs text-muted-foreground">0{i+1}</span><Icon className="h-6 w-6 text-primary"/></div><h3 className="mt-14 font-display text-3xl uppercase">{name}</h3><p className="mt-4 min-h-12 text-sm text-muted-foreground">{copy}</p><div className="mt-8 flex items-center justify-between border-t border-line pt-5"><strong>{price}</strong><Button asChild variant="ghost" size="icon"><Link to="/agendar" aria-label={`Agendar ${name}`}><ArrowRight/></Link></Button></div></article>)}</div><div className="mt-8 text-center"><Button asChild size="lg"><Link to="/agendar">Ver agenda disponível <ArrowRight/></Link></Button></div></div></section>

      <section id="planos" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="max-w-3xl"><p className="eyebrow">Clube DROP</p><h2 className="section-title mt-4">Estilo em dia.<br/>Todo mês.</h2><p className="mt-6 max-w-xl text-muted-foreground">Planos sem tempo determinado para quem entende que consistência também faz parte da imagem.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{plans.map(p=><PlanCard key={p.id} plan={p}/>)}</div><p className="mt-5 text-xs text-muted-foreground">* Serviços ilimitados sujeitos à disponibilidade. Agenda liberada com 7 dias de antecedência, de segunda a sábado.</p></section>

      <section id="galeria" className="border-y border-line py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-10 flex items-end justify-between"><div><p className="eyebrow">Dentro da DROP</p><h2 className="section-title mt-4">Atmosfera & atitude.</h2></div><a href="https://www.instagram.com/dropbarbearia" target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-sm font-bold uppercase text-primary sm:flex"><Instagram className="h-4 w-4"/> @dropbarbearia</a></div><div className="grid grid-cols-2 gap-3 md:grid-cols-12"><img src={interiorImage} alt="Interior contemporâneo da barbearia" loading="lazy" width="1280" height="960" className="col-span-2 aspect-[4/3] h-full w-full object-cover md:col-span-7"/><img src={heroImage} alt="Corte masculino realizado com precisão" loading="lazy" width="1024" height="1280" className="aspect-[3/4] h-full w-full object-cover md:col-span-5"/><img src={aboutImage} alt="Atendimento de barba" loading="lazy" width="1024" height="1280" className="aspect-[3/4] h-full w-full object-cover md:col-span-5"/><img src={teamImage.url} alt="Profissionais Lucas Mendes e Allyson" loading="lazy" width="376" height="200" className="col-span-2 h-full min-h-56 w-full bg-muted object-contain md:col-span-7"/></div></div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32"><div><p className="eyebrow">Onde estamos</p><h2 className="section-title mt-4">Cachoeiro<br/>é nossa casa.</h2><p className="mt-6 text-muted-foreground">Cachoeiro de Itapemirim · Espírito Santo</p><div className="mt-8 flex flex-col gap-4 text-sm"><a href="tel:+5528992588795" className="flex items-center gap-3"><Phone className="text-primary"/> (28) 99258-8795</a><span className="flex items-center gap-3"><MapPin className="text-primary"/> Consulte a localização exata pelo WhatsApp</span></div><Button asChild className="mt-8" size="lg"><a href="https://wa.me/5528992588795" target="_blank" rel="noreferrer">Falar com a DROP <ArrowRight/></a></Button></div><div className="glass relative min-h-80 overflow-hidden border border-line p-8"><div className="absolute inset-0 opacity-40" style={{backgroundImage:"radial-gradient(circle at 30% 40%, var(--primary) 0 2px, transparent 3px), linear-gradient(35deg, transparent 47%, var(--line) 48% 50%, transparent 51%), linear-gradient(-30deg, transparent 47%, var(--line) 48% 50%, transparent 51%)",backgroundSize:"100% 100%, 70px 70px, 90px 90px"}}/><div className="absolute left-[30%] top-[40%] grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl"><MapPin/></div><div className="absolute bottom-7 left-7 right-7 border border-line bg-background/80 p-5 backdrop-blur-lg"><p className="font-bold uppercase">DROP Barbearia</p><p className="mt-1 text-sm text-muted-foreground">Cachoeiro de Itapemirim — ES</p></div></div></section>
    </main>
    <footer className="border-t border-line"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 sm:items-end lg:px-8"><img src={logo.url} alt="DROP Barbearia" width="160" height="80" className="h-10 w-auto"/><div className="text-sm text-muted-foreground"><p>Segunda a sábado</p><p className="mt-1">Cachoeiro de Itapemirim · ES</p></div><div className="sm:text-right"><a href="https://www.instagram.com/dropbarbearia" className="text-sm font-bold uppercase text-primary">Instagram ↗</a><p className="mt-3 text-xs text-muted-foreground">© 2026 DROP Barbearia</p></div></div></footer>
  </div>;
}