import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Check, Clock3, Instagram, MapPin, Phone, Scissors, Sparkles } from "lucide-react";
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
      <section className="relative px-3 pb-10 pt-24 sm:px-5 lg:pb-14 lg:pt-28">
        <div className="ambient-glow ambient-glow-top" />
        <div className="hero-shell relative mx-auto grid max-w-7xl overflow-hidden lg:grid-cols-[.88fr_1.12fr]">
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[630px]">
            <img src={heroImage} alt="Barbeiro realizando corte degradê na DROP" width="1024" height="1280" className="absolute inset-0 h-full w-full object-cover" />
            <div className="image-shade absolute inset-0" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 text-xs font-bold uppercase sm:bottom-7 sm:left-7"><span className="status-dot"/> Agenda aberta</div>
          </div>
          <div className="relative z-10 flex min-h-[500px] flex-col justify-between border-t border-line p-7 sm:p-10 lg:min-h-[630px] lg:border-l lg:border-t-0 lg:p-14">
            <div>
              <div className="eyebrow-line"><span /> Cachoeiro de Itapemirim · ES</div>
              <p className="mt-10 text-xs font-bold uppercase text-muted-foreground">Corte · barba · assinatura</p>
              <h1 className="mt-3 font-display text-[clamp(4.5rem,8vw,7.75rem)] leading-[.82] uppercase">Presença<br/><span className="text-primary">sem esforço.</span></h1>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">Técnica precisa, ambiente próprio e um jeito mais simples de manter seu estilo sempre em dia.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link to="/agendar"><CalendarDays /> Agendar horário</Link></Button><Button asChild variant="outline" size="lg"><Link to="/assinar" search={{ plano: "corte" }}>Conhecer o Clube <ArrowUpRight /></Link></Button></div>
            </div>
            <div className="mt-12 grid grid-cols-3 divide-x divide-line border-t border-line pt-5">
              <div><strong className="font-display text-2xl text-primary">R$ 35</strong><p className="mt-1 text-[10px] uppercase text-muted-foreground">planos desde</p></div>
              <div className="px-4"><strong className="font-display text-2xl">6 dias</strong><p className="mt-1 text-[10px] uppercase text-muted-foreground">por semana</p></div>
              <div className="pl-4"><strong className="font-display text-2xl">DROP</strong><p className="mt-1 text-[10px] uppercase text-muted-foreground">seu momento</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section-wrap"><div className="editorial-grid">
        <div className="portrait-frame relative overflow-hidden"><img src={aboutImage} alt="Experiência de barba na DROP Barbearia" loading="lazy" width="1024" height="1280" className="absolute inset-0 h-full w-full object-cover"/><div className="image-shade absolute inset-0"/><div className="glass-caption absolute bottom-5 left-5 right-5"><p className="eyebrow">O ritual DROP</p><p className="mt-1 text-sm">Tempo bem usado. Resultado que permanece.</p></div></div>
        <div className="flex flex-col justify-center lg:pl-8"><p className="eyebrow-line"><span/> Sobre a DROP</p><h2 className="section-title mt-6">Você entra.<br/>Sua presença <span className="text-primary">muda.</span></h2><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Aqui, cada detalhe tem intenção. A conversa é direta, a técnica é precisa e o resultado respeita quem você é — sem fórmulas prontas.</p><div className="mt-8 grid gap-px overflow-hidden rounded-glass border border-line bg-line sm:grid-cols-2"><article className="metric-panel"><strong>01</strong><h3>Técnica com leitura</h3><p>O corte certo para seu rosto, rotina e presença.</p></article><article className="metric-panel"><strong>02</strong><h3>Experiência sem atrito</h3><p>Agenda simples, atendimento no tempo e acabamento impecável.</p></article></div></div>
      </div></section>

      <section id="servicos" className="section-band"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow-line"><span/> Menu de serviços</p><h2 className="section-title mt-6">Escolha seu<br/><span className="text-primary">próximo corte.</span></h2></div><div><p className="max-w-md text-muted-foreground">Serviços essenciais, feitos com calma e precisão. Selecione agora e encontre seu melhor horário.</p><Button asChild className="mt-6" size="lg"><Link to="/agendar">Abrir agenda <ArrowUpRight/></Link></Button></div></div><div className="mt-10 grid gap-3 lg:grid-cols-3">{services.map(({name,price,icon:Icon,copy},i)=><article key={name} className="service-tile group"><div className="flex items-center justify-between"><span className="service-index">0{i+1}</span><Icon className="h-5 w-5 text-primary"/></div><h3 className="mt-10 font-display text-4xl uppercase group-hover:text-primary">{name}</h3><p className="mt-2 min-h-10 text-sm text-muted-foreground">{copy}</p><div className="mt-8 flex items-end justify-between border-t border-line pt-4"><span className="text-xs uppercase text-muted-foreground">a partir de</span><strong className="font-display text-3xl">{price}</strong></div></article>)}</div></div></section>

      <section id="planos" className="section-wrap"><div className="club-intro"><div><p className="eyebrow-line"><span/> Clube DROP</p><h2 className="section-title mt-6">Seu estilo não<br/><span className="text-primary">tira folga.</span></h2></div><div className="glass-caption"><p className="font-bold uppercase">Mais frequência. Menos improviso.</p><p className="mt-2 text-sm text-muted-foreground">Planos mensais para manter corte e barba no ponto, com economia e prioridade.</p></div></div><div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-5">{plans.map(p=><PlanCard key={p.id} plan={p}/>)}</div><p className="mt-5 text-xs text-muted-foreground">* Serviços ilimitados sujeitos à disponibilidade. Agenda liberada com 7 dias de antecedência, de segunda a sábado.</p></section>

      <section id="galeria" className="section-band"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow-line"><span/> Dentro da DROP</p><h2 className="section-title mt-6">Trabalho real.<br/><span className="text-primary">Atitude real.</span></h2></div><a href="https://www.instagram.com/dropbarbearia" target="_blank" rel="noreferrer" className="social-link"><Instagram className="h-4 w-4"/> @dropbarbearia <ArrowUpRight className="h-4 w-4"/></a></div><div className="gallery-grid mt-10"><figure className="gallery-wide"><img src={interiorImage} alt="Interior contemporâneo da barbearia" loading="lazy" width="1280" height="960"/><figcaption>O espaço</figcaption></figure><figure><img src={heroImage} alt="Corte masculino realizado com precisão" loading="lazy" width="1024" height="1280"/><figcaption>Precisão</figcaption></figure><figure><img src={aboutImage} alt="Atendimento de barba" loading="lazy" width="1024" height="1280"/><figcaption>Ritual</figcaption></figure><figure className="gallery-team"><img src={teamImage.url} alt="Profissionais Lucas Mendes e Allyson" loading="lazy" width="376" height="200"/><figcaption>Equipe DROP</figcaption></figure></div></div></section>

      <section className="section-wrap"><div className="location-shell"><div className="p-7 sm:p-10 lg:p-12"><p className="eyebrow-line"><span/> Onde estamos</p><h2 className="section-title mt-6">Cachoeiro<br/><span className="text-primary">é nossa casa.</span></h2><div className="mt-8 space-y-4 text-sm"><a href="tel:+5528992588795" className="info-row"><Phone/> (28) 99258-8795</a><span className="info-row"><MapPin/> Cachoeiro de Itapemirim · ES</span><span className="info-row"><Clock3/> Segunda a sábado</span></div><Button asChild className="mt-8" size="lg"><a href="https://www.google.com/maps/search/?api=1&query=DROP+Barbearia+Cachoeiro+de+Itapemirim" target="_blank" rel="noreferrer">Traçar rota <ArrowUpRight/></a></Button></div><div className="map-frame"><iframe title="Mapa da DROP Barbearia em Cachoeiro de Itapemirim" src="https://www.google.com/maps?q=DROP%20Barbearia%20Cachoeiro%20de%20Itapemirim%20ES&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div></section>
    </main>
    <footer className="site-footer"><div className="mx-auto max-w-7xl px-5 py-12 lg:px-8"><div className="grid gap-10 border-b border-line pb-10 md:grid-cols-[1fr_auto_auto]"><div><img src={logo.url} alt="DROP Barbearia" width="160" height="80" className="h-10 w-auto"/><p className="mt-4 max-w-xs text-sm text-muted-foreground">Corte, barba e presença. Uma experiência feita no seu ritmo.</p></div><nav className="footer-links" aria-label="Links do rodapé"><a href="/#sobre">Sobre</a><a href="/#servicos">Serviços</a><a href="/#planos">Clube DROP</a><a href="/#galeria">Galeria</a></nav><div><p className="eyebrow">Contato</p><a href="tel:+5528992588795" className="mt-4 block text-sm">(28) 99258-8795</a><a href="https://www.instagram.com/dropbarbearia" target="_blank" rel="noreferrer" className="mt-2 block text-sm text-primary">@dropbarbearia</a></div></div><div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-between"><p>© 2026 DROP Barbearia</p><p>Cachoeiro de Itapemirim · ES</p></div></div></footer>
  </div>;
}