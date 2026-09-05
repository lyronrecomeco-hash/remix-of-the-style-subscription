import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Plan } from "@/lib/drop-data";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className={`plan-row ${plan.featured ? "plan-row-featured" : ""}`}>
      <div className="plan-name"><span>{plan.featured ? "MAIS ESCOLHIDO" : "PLANO MENSAL"}</span><h3>{plan.name}</h3><p>{plan.label}</p></div>
      <ul>{plan.services.slice(0, 3).map((item) => <li key={item}><Check /> {item}</li>)}</ul>
      <div className="plan-price"><p><small>R$</small>{plan.price}<small>/mês</small></p><Button asChild><Link to="/assinar" search={{ plano: plan.id }}>Assinar <ArrowRight /></Link></Button><Dialog><DialogTrigger asChild><Button variant="ghost" size="sm">Ver detalhes</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle className="font-display text-3xl uppercase">{plan.name}</DialogTitle><DialogDescription>Vigência indeterminada. Agenda liberada com 7 dias de antecedência.</DialogDescription></DialogHeader><div className="dialog-benefits">{plan.services.map((item) => <p key={item}><Check /> {item}</p>)}</div></DialogContent></Dialog></div>
    </article>
  );
}