import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Check, Clock3, Instagram, MapPin, Phone, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropHeader } from "@/components/drop-header";
import { PlanCard } from "@/components/plan-card";
import { plans } from "@/lib/drop-data";
import heroImage from "@/assets/drop-hero.jpg";
import aboutImage from "@/assets/drop-about.jpg";
import interiorImage from "@/assets/drop-interior.jpg";
import teamImage from "@/assets/drop-profissionais.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "DROP Barbearia | Corte e barba em Cachoeiro" },
    { name: "description", content: "Corte, barba e planos mensais na DROP Barbearia, em Cachoeiro de Itapemirim." },
    { property: "og:title", content: "DROP Barbearia | Corte e barba em Cachoeiro" },
    { property: "og:description", content: "Agende seu horário ou conheça o Clube DROP." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const services = [
  { number: "01", name: "Corte", price: "R$ 40", copy: "Leitura de perfil, técnica e acabamento preciso." },
  { number: "02", name: "Barba", price: "R$ 40", copy: "Contorno, toalha quente e finalização." },
  { number: "03", name: "Corte + barba", price: "R$ 80", copy: "O cuidado completo em uma única sessão." },
];

function HomePage() {
  return (
    <div className="min-h-screen">
      <DropHeader />
      <main>
        <section className="home-hero">
          <div className="home-hero-copy">
            <p className="kicker">DROP BARBEARIA · CACHOEIRO</p>
            <h1>CORTE CERTO.<br />PRESENÇA<br />SEM ESFORÇO.</h1>
            <p className="home-intro">Seu visual tratado com técnica, atenção e hora marcada. Sem excesso. Sem improviso.</p>
            <div className="home-actions">
              <Button asChild size="lg"><Link to="/agendar"><CalendarDays /> Agendar horário</Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/assinar" search={{ plano: "corte" }}>Ver Clube DROP <ArrowRight /></Link></Button>
            </div>
          </div>
          <div className="home-hero-image">
            <img src={heroImage} alt="Barbeiro da DROP realizando um corte masculino" width="1024" height="1280" />
            <div className="hero-stamp"><span>Agenda</span><strong>ABERTA</strong></div>
          </div>
          <div className="hero-facts" aria-label="Informações rápidas">
            <p><strong>R$ 35</strong><span>planos desde</span></p>
            <p><strong>SEG—SÁB</strong><span>atendimento</span></p>
            <p><strong>02</strong><span>profissionais</span></p>
          </div>
        </section>

        <section id="sobre" className="about-section">
          <div className="content-width about-layout">
            <div className="section-number">01 / SOBRE</div>
            <div className="about-copy">
              <h2>O SEU TEMPO<br />MERECE RESPEITO.</h2>
              <p>A DROP nasceu para simplificar o cuidado masculino. Atendimento direto, ambiente bem pensado e um resultado que acompanha a sua rotina.</p>
              <div className="about-points">
                <article><strong>TÉCNICA</strong><span>O corte certo para seu rosto e estilo.</span></article>
                <article><strong>RITMO</strong><span>Hora marcada e experiência sem pressa.</span></article>
              </div>
            </div>
            <figure className="about-image"><img src={aboutImage} alt="Atendimento de barba na DROP" loading="lazy" width="1024" height="1280" /></figure>
          </div>
        </section>

        <section id="servicos" className="services-section">
          <div className="content-width">
            <div className="section-topline"><span>02 / SERVIÇOS</span><p>O essencial, bem feito.</p></div>
            <div className="services-heading"><h2>ESCOLHA O<br />SEU CUIDADO.</h2><Button asChild variant="outline" size="lg"><Link to="/agendar">Abrir agenda <ArrowRight /></Link></Button></div>
            <div className="services-list">
              {services.map((service) => (
                <article key={service.name}>
                  <span>{service.number}</span><Scissors aria-hidden="true" />
                  <h3>{service.name}</h3><p>{service.copy}</p><strong>{service.price}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="planos" className="plans-section">
          <div className="content-width">
            <div className="section-topline"><span>03 / CLUBE DROP</span><p>Frequência sem complicação.</p></div>
            <div className="plans-heading"><h2>SEU ESTILO<br />SEMPRE EM DIA.</h2><p>Escolha um plano mensal e cuide do corte e da barba com prioridade e economia.</p></div>
            <div className="plans-list">{plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}</div>
            <p className="legal-copy">* Serviços sujeitos à disponibilidade. Agenda liberada com 7 dias de antecedência, de segunda a sábado.</p>
          </div>
        </section>

        <section id="galeria" className="work-section">
          <div className="content-width">
            <div className="section-topline"><span>04 / A DROP</span><a href="https://www.instagram.com/dropbarbearia" target="_blank" rel="noreferrer"><Instagram /> @dropbarbearia</a></div>
            <h2>O LUGAR.<br />O TIME. O TRABALHO.</h2>
            <div className="work-grid">
              <figure className="work-interior"><img src={interiorImage} alt="Interior da DROP Barbearia" loading="lazy" width="1280" height="960" /><figcaption>O espaço</figcaption></figure>
              <figure><img src={teamImage.url} alt="Profissionais Lucas Mendes e Allyson" loading="lazy" width="376" height="200" /><figcaption>O time</figcaption></figure>
              <figure><img src={heroImage} alt="Corte masculino na DROP" loading="lazy" width="1024" height="1280" /><figcaption>O trabalho</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="visit-section">
          <div className="content-width visit-layout">
            <div className="visit-copy"><span>05 / VISITE</span><h2>CACHOEIRO<br />É NOSSA CASA.</h2><div className="visit-info"><a href="tel:+5528992588795"><Phone /> (28) 99258-8795</a><p><MapPin /> Cachoeiro de Itapemirim · ES</p><p><Clock3 /> Segunda a sábado</p></div><Button asChild size="lg"><a href="https://www.google.com/maps/search/?api=1&query=DROP+Barbearia+Cachoeiro+de+Itapemirim" target="_blank" rel="noreferrer">Traçar rota <ArrowRight /></a></Button></div>
            <div className="visit-map"><iframe title="Mapa da DROP Barbearia em Cachoeiro de Itapemirim" src="https://www.google.com/maps?q=DROP%20Barbearia%20Cachoeiro%20de%20Itapemirim%20ES&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="content-width footer-layout"><div><strong>DROP.</strong><p>Barbearia · Cachoeiro de Itapemirim</p></div><nav aria-label="Links do rodapé"><a href="/#sobre">Sobre</a><a href="/#servicos">Serviços</a><a href="/#planos">Clube</a><a href="/#galeria">Galeria</a></nav><div><p>© 2026 DROP Barbearia</p><p>Todos os direitos reservados.</p></div></div></footer>
    </div>
  );
}