import { Link } from "@tanstack/react-router";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function DropHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" aria-label="DROP Barbearia — início" className="wordmark">DROP<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="/#sobre">Sobre</a><a href="/#servicos">Serviços</a><a href="/#planos">Clube</a><a href="/#galeria">A DROP</a>
        </nav>
        <Button asChild className="header-cta"><Link to="/agendar"><CalendarDays /> Agendar</Link></Button>
        <Button variant="ghost" size="icon" className="menu-trigger" onClick={() => setOpen((value) => !value)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Navegação móvel">{[["Sobre","sobre"],["Serviços","servicos"],["Clube","planos"],["A DROP","galeria"]].map(([label,id]) => <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<Button asChild size="lg"><Link to="/agendar">Agendar horário</Link></Button></nav>}
    </header>
  );
}