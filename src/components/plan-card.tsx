import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Plan } from "@/lib/drop-data";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className={`plan-card ${plan.featured ? "plan-card-featured" : ""}`}>
      {plan.featured && <span className="plan-kicker">Mais escolhido</span>}
      <p className="eyebrow">Assinatura mensal</p>
      <h3 className="mt-4 text-2xl font-bold uppercase">{plan.name}</h3>
      <p className="mt-2 min-h-10 text-sm text-muted-foreground">{plan.label}</p>
      <div className="my-7 flex items-end gap-2"><span className="pb-1 text-sm">R$</span><strong className="font-display text-5xl">{plan.price}</strong><span className="pb-1 text-sm text-muted-foreground">/mês</span></div>
      <div className="flex flex-col gap-3">
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