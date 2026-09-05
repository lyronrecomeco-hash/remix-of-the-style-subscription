import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Plan } from "@/lib/drop-data";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className={`plan-card ${plan.featured ? "plan-card-featured" : ""}`}>
      <div>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <p className="eyebrow">Assinatura mensal</p>
          {plan.featured && <span className="plan-kicker">Mais escolhido</span>}
        </div>
        <h3 className="mt-5 font-display text-3xl uppercase">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{plan.label}</p>
        <div className="my-6 flex items-end gap-2"><span className="pb-1 text-xs">R$</span><strong className="font-display text-5xl leading-none">{plan.price}</strong><span className="pb-1 text-xs text-muted-foreground">/mês</span></div>
        <ul className="mb-7 space-y-2.5">{plan.services.slice(0,3).map((item)=><li key={item} className="flex items-start gap-2 text-xs text-muted-foreground"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"/><span>{item}</span></li>)}</ul>
      </div>
      <div className="flex flex-col gap-2.5">
        <Button asChild size="lg"><Link to="/assinar" search={{ plano: plan.id }}>Assinar plano <ArrowRight /></Link></Button>
        <Dialog>
          <DialogTrigger asChild><Button variant="outline" size="lg">Ver todas as vantagens</Button></DialogTrigger>
          <DialogContent className="glass max-h-[85vh] overflow-y-auto border-line sm:max-w-xl">
            <DialogHeader><DialogTitle className="font-display text-3xl uppercase">{plan.name}</DialogTitle><DialogDescription>Vigência indeterminada. Agenda liberada com 7 dias de antecedência.</DialogDescription></DialogHeader>
            <div className="mt-3 space-y-3">
              {plan.services.map((item) => <div key={item} className="flex gap-3 border-b border-line py-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="h-3.5 w-3.5" /></span><div><p className="font-semibold">{item}</p>{!item.includes("10%") && <p className="text-xs text-muted-foreground">100% OFF · de segunda a sábado</p>}</div></div>)}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}