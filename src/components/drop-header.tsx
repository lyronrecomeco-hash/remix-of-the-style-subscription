import { Link } from "@tanstack/react-router";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/drop-logo.png.asset.json";

export function DropHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="nav-glass mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-5 md:grid-cols-[1fr_auto_1fr]">
        <Link to="/" aria-label="DROP Barbearia — início" className="w-fit shrink-0">
          <img src={logo.url} alt="DROP Barbearia" className="h-8 w-auto" width="160" height="80" />
        </Link>
        <nav className="hidden items-center justify-center gap-8 md:flex" aria-label="Navegação principal">
          <a href="/#sobre" className="nav-link">Sobre</a>
          <a href="/#servicos" className="nav-link">Serviços</a>
          <a href="/#planos" className="nav-link">Planos</a>
          <a href="/#galeria" className="nav-link">Galeria</a>
        </nav>
        <Button asChild className="hidden justify-self-end md:inline-flex"><Link to="/agendar"><CalendarDays /> Agendar horário</Link></Button>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="nav-glass mx-auto mt-2 max-w-7xl px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {[['Sobre','sobre'],['Serviços','servicos'],['Planos','planos'],['Galeria','galeria']].map(([label,id]) => <a key={id} href={`/#${id}`} onClick={() => setOpen(false)} className="nav-link py-1">{label}</a>)}
            <Button asChild size="lg"><Link to="/agendar">Agendar horário</Link></Button>
          </div>
        </nav>
      )}
    </header>
  );
}