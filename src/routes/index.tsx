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
      <section className="relative px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
        <div className="ambient-glow ambient-glow-top" />
        <div className="glass-shell relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl overflow-hidden lg:grid-cols-[1.04fr_.96fr]">
          <div className="relative z-10 flex flex-col justify-between p-7 sm:p-10 lg:p-14 xl:p-16">
            <div>
              <div className="eyebrow-line"><span /> Cachoeiro de Itapemirim · ES</div>
              <h1 className="mt-10 font-display text-[clamp(4.5rem,10vw,9rem)] leading-[.78] uppercase">Seu<br/><span className="text-primary">estilo.</span></h1>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">Corte impecável, barba alinhada e uma assinatura que acompanha seu ritmo. Precisão para sua melhor versão.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link to="/agendar"><CalendarDays /> Agendar agora</Link></Button><Button asChild variant="outline" size="lg"><Link to="/assinar" search={{ plano: "corte" }}>Clube DROP <ArrowRight /></Link></Button></div>
            </div>
            <div className="mt-14 grid grid-cols-3 divide-x divide-line border-t border-line pt-6">
              <div><strong className="font-display text-3xl text-primary">R$ 67</strong><p className="mt-1 text-[11px] uppercase text-muted-foreground">a partir de</p></div>
              <div className="px-5"><strong className="font-display text-3xl">6 dias</strong><p className="mt-1 text-[11px] uppercase text-muted-foreground">por semana</p></div>
              <div className="pl-5"><strong className="font-display text-3xl">100%</strong><p className="mt-1 text-[11px] uppercase text-muted-foreground">seu estilo</p></div>
            </div>
          </div>
          <div className="relative min-h-[480px] border-t border-line lg:min-h-0 lg:border-l lg:border-t-0">
            <img src={heroImage} alt="Barbeiro realizando corte degradê na DROP" width="1024" height="1280" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <div className="glass-panel absolute inset-x-5 bottom-5 p-5 sm:inset-x-8 sm:bottom-8 sm:p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5"><div className="min-w-0"><p className="eyebrow">Agenda aberta</p><p className="mt-2 font-display text-3xl uppercase">Precisão em cada detalhe</p></div><Button asChild size="icon" aria-label="Agendar horário"><Link to="/agendar"><ArrowRight /></Link></Button></div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section-wrap"><div className="editorial-grid">
        <div className="relative min-h-[560px] overflow-hidden rounded-glass"><img src={aboutImage} alt="Experiência de barba na DROP Barbearia" loading="lazy" width="1024" height="1280" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"/><div className="glass-panel absolute bottom-5 left-5 right-5 p-5 sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-xs"><p className="font-display text-4xl text-primary">DROP</p><p className="mt-2 text-sm text-muted-foreground">Técnica, presença e respeito ao seu tempo.</p></div></div>
        <div className="flex flex-col justify-center py-8 lg:pl-8"><p className="eyebrow-line"><span/> Sobre a DROP</p><h2 className="section-title mt-6">Não é só um corte.<br/><span className="text-primary">É como você chega.</span></h2><p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">Transformamos o cuidado masculino em um ritual direto, preciso e sem excessos. Uma barbearia contemporânea onde técnica e identidade caminham juntas.</p><div className="mt-10 grid gap-4 sm:grid-cols-2"><article className="glass-panel p-6"><p className="font-display text-5xl text-primary">01</p><h3 className="mt-5 text-lg font-bold uppercase">Técnica apurada</h3><p className="mt-2 text-sm text-muted-foreground">Profissionais atentos ao seu estilo e à sua rotina.</p></article><article className="glass-panel p-6"><p className="font-display text-5xl text-primary">02</p><h3 className="mt-5 text-lg font-bold uppercase">Experiência fluida</h3><p className="mt-2 text-sm text-muted-foreground">Do agendamento ao acabamento, sem perder tempo.</p></article></div></div>
      </div></section>

      <section id="servicos" className="section-band"><div className="section-wrap"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow-line"><span/> Menu de serviços</p><h2 className="section-title mt-6">Sua melhor<br/><span className="text-primary">versão.</span></h2><p className="mt-6 max-w-sm text-muted-foreground">Escolha o serviço, o profissional e o horário. O resto é com a gente.</p><Button asChild className="mt-8" size="lg"><Link to="/agendar">Ver agenda <ArrowRight/></Link></Button></div><div className="space-y-4">{services.map(({name,price,icon:Icon,copy},i)=><article key={name} className="glass-service group"><div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5"><span className="font-display text-3xl text-muted-foreground">0{i+1}</span><div className="min-w-0"><h3 className="font-display text-3xl uppercase group-hover:text-primary sm:text-4xl">{name}</h3><p className="mt-1 text-sm text-muted-foreground">{copy}</p></div><div className="text-right"><Icon className="ml-auto h-5 w-5 text-primary"/><strong className="mt-4 block whitespace-nowrap">{price}</strong></div></div></article>)}</div></div></div></section>

      <section id="planos" className="section-wrap"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><p className="eyebrow-line"><span/> Clube DROP</p><h2 className="section-title mt-6">Estilo em dia.<br/><span className="text-primary">Todo mês.</span></h2></div><p className="max-w-xl text-muted-foreground lg:justify-self-end">Planos sem tempo determinado para quem entende que consistência também faz parte da imagem.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{plans.map(p=><PlanCard key={p.id} plan={p}/>)}</div><p className="mt-5 text-xs text-muted-foreground">* Serviços ilimitados sujeitos à disponibilidade. Agenda liberada com 7 dias de antecedência, de segunda a sábado.</p></section>

      <section id="galeria" className="section-band"><div className="section-wrap"><div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5"><div className="min-w-0"><p className="eyebrow-line"><span/> Dentro da DROP</p><h2 className="section-title mt-6">Atmosfera<br/><span className="text-primary">& atitude.</span></h2></div><a href="https://www.instagram.com/dropbarbearia" target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-xs font-bold uppercase text-primary sm:flex"><Instagram className="h-4 w-4"/> @dropbarbearia</a></div><div className="gallery-editorial"><figure className="gallery-main"><img src={interiorImage} alt="Interior contemporâneo da barbearia" loading="lazy" width="1280" height="960"/></figure><figure className="gallery-tall"><img src={heroImage} alt="Corte masculino realizado com precisão" loading="lazy" width="1024" height="1280"/></figure><figure className="gallery-small"><img src={aboutImage} alt="Atendimento de barba" loading="lazy" width="1024" height="1280"/></figure><figure className="gallery-team glass-panel"><img src={teamImage.url} alt="Profissionais Lucas Mendes e Allyson" loading="lazy" width="376" height="200"/></figure></div></div></section>

      <section className="section-wrap"><div className="glass-shell grid overflow-hidden lg:grid-cols-[.9fr_1.1fr]"><div className="p-7 sm:p-10 lg:p-14"><p className="eyebrow-line"><span/> Onde estamos</p><h2 className="section-title mt-6">Cachoeiro<br/><span className="text-primary">é nossa casa.</span></h2><p className="mt-6 text-muted-foreground">Cachoeiro de Itapemirim · Espírito Santo</p><div className="mt-9 space-y-5 text-sm"><a href="tel:+5528992588795" className="flex items-center gap-3"><Phone className="text-primary"/> (28) 99258-8795</a><span className="flex items-center gap-3"><MapPin className="text-primary"/> Localização exata pelo WhatsApp</span></div><Button asChild className="mt-9" size="lg"><a href="https://wa.me/5528992588795" target="_blank" rel="noreferrer">Falar com a DROP <ArrowRight/></a></Button></div><div className="map-surface relative min-h-96 border-t border-line lg:border-l lg:border-t-0"><div className="absolute left-[32%] top-[42%] grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl"><MapPin/></div><div className="glass-panel absolute bottom-6 left-6 right-6 p-5"><p className="font-bold uppercase">DROP Barbearia</p><p className="mt-1 text-sm text-muted-foreground">Cachoeiro de Itapemirim — ES</p></div></div></div></section>
    </main>
    <footer className="border-t border-line/70 bg-panel/30 backdrop-blur-xl"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 sm:items-end lg:px-8"><img src={logo.url} alt="DROP Barbearia" width="160" height="80" className="h-10 w-auto"/><div className="text-sm text-muted-foreground"><p>Segunda a sábado</p><p className="mt-1">Cachoeiro de Itapemirim · ES</p></div><div className="sm:text-right"><a href="https://www.instagram.com/dropbarbearia" className="text-sm font-bold uppercase text-primary">Instagram ↗</a><p className="mt-3 text-xs text-muted-foreground">© 2026 DROP Barbearia</p></div></div></footer>
  </div>;
}