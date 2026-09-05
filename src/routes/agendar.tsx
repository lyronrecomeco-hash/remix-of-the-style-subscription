import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronLeft, Clock, Scissors, UserRound } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { DropHeader } from "@/components/drop-header";
import { formatMoney, professionals, servicesByProfessional } from "@/lib/drop-data";
import heroImage from "@/assets/drop-hero.jpg";
import aboutImage from "@/assets/drop-about.jpg";

export const Route = createFileRoute("/agendar")({
  head: () => ({ meta: [
    { title: "Agendar horário | DROP Barbearia" },
    { name: "description", content: "Escolha profissional, serviços, data e horário para seu atendimento na DROP Barbearia." },
    { property: "og:title", content: "Agendar horário | DROP Barbearia" },
    { property: "og:description", content: "Seu próximo corte começa aqui. Agende em poucos passos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: BookingPage,
});

const dates = ["Seg, 07", "Ter, 08", "Qua, 09", "Qui, 10", "Sex, 11", "Sáb, 12"];
const times = ["09:00", "10:30", "11:30", "14:00", "15:30", "17:00", "18:30"];

function BookingPage() {
  const [step,setStep]=useState(0); const [pro,setPro]=useState(""); const [selected,setSelected]=useState<string[]>([]); const [date,setDate]=useState(""); const [time,setTime]=useState("");
  const services=pro?(servicesByProfessional[pro] ?? []):[];
  const total=useMemo(()=>services.filter(s=>selected.includes(s.name)).reduce((a,s)=>a+s.price,0),[services,selected]);
  const canNext=step===0 || (step===1&&!!pro) || (step===2&&selected.length>0) || (step===3&&!!date&&!!time) || step===4;
  const next=()=>{if(canNext)setStep(s=>Math.min(5,s+1))}; const back=()=>setStep(s=>Math.max(0,s-1));
  return <div className="min-h-screen"><DropHeader/><main className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:pt-28">
    <div className="mb-6 flex items-center justify-between"><Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4"/> Voltar ao site</Link>{step<5&&<span className="text-xs font-bold uppercase text-muted-foreground">Etapa {step+1} de 5</span>}</div>
    <div className="mb-6 grid grid-cols-5 gap-2">{[0,1,2,3,4].map(i=><div key={i} className={`h-1 ${i<=step?'bg-primary':'bg-muted'}`}/>)}</div>
    <section className="glass min-h-[650px] overflow-hidden border border-line">
      {step===0&&<div className="grid min-h-[650px] md:grid-cols-[.9fr_1.1fr]"><div className="relative min-h-72 overflow-hidden"><img src={heroImage} alt="Experiência DROP Barbearia" width="1024" height="1280" className="absolute h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"/></div><div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16"><p className="eyebrow">Bem-vindo à DROP</p><h1 className="mt-5 font-display text-4xl uppercase leading-none sm:text-6xl">Seu momento.<br/><span className="text-primary">Seu estilo.</span></h1><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Prepare-se para uma experiência pensada no seu tempo. Em poucos passos, seu horário estará reservado.</p><Button onClick={next} size="lg" className="mt-9 w-fit">Começar <ArrowRight/></Button></div></div>}
      {step===1&&<Step title="Quem cuida do seu estilo?" eyebrow="Escolha o profissional"><div className="grid gap-4 sm:grid-cols-2">{professionals.map((p,i)=><button key={p.key} onClick={()=>setPro(p.key)} className={`choice-card flex items-center gap-4 ${pro===p.key?'choice-card-active':''}`}><img src={i===0?heroImage:aboutImage} alt={p.name} className="h-24 w-20 shrink-0 object-cover"/><div><p className="font-display text-xl uppercase">{p.name}</p><p className="mt-2 text-xs text-muted-foreground">Barbeiro DROP · Ver agenda</p></div>{pro===p.key&&<Check className="ml-auto text-primary"/>}</button>)}</div></Step>}
      {step===2&&<Step title="O que vamos fazer hoje?" eyebrow="Selecione um ou mais serviços"><div className="grid gap-3 sm:grid-cols-2">{services.map(s=><button key={s.name} onClick={()=>setSelected(v=>v.includes(s.name)?v.filter(x=>x!==s.name):[...v,s.name])} className={`choice-card grid grid-cols-[minmax(0,1fr)_auto] gap-4 ${selected.includes(s.name)?'choice-card-active':''}`}><div className="min-w-0">{s.hot&&<span className="text-[10px] font-bold uppercase text-primary">Em alta</span>}<p className="truncate font-bold">{s.name}</p></div><strong>{s.from?'A partir de ':''}{formatMoney(s.price)}</strong></button>)}</div></Step>}
      {step===3&&<Step title="Escolha o melhor momento." eyebrow="Data e horário"><div><p className="mb-3 text-xs font-bold uppercase text-muted-foreground">Próximos dias</p><div className="grid grid-cols-3 gap-2 sm:grid-cols-6">{dates.map(d=><button key={d} onClick={()=>setDate(d)} className={`choice-card text-center text-sm font-bold ${date===d?'choice-card-active':''}`}>{d}</button>)}</div><p className="mb-3 mt-8 text-xs font-bold uppercase text-muted-foreground">Horários disponíveis</p><div className="grid grid-cols-3 gap-2 sm:grid-cols-4">{times.map(t=><button key={t} onClick={()=>setTime(t)} className={`choice-card text-center font-bold ${time===t?'choice-card-active':''}`}>{t}</button>)}</div></div></Step>}
      {step===4&&<Step title="Tudo certo por aqui." eyebrow="Revise seu agendamento"><div className="grid gap-5 md:grid-cols-2"><div className="space-y-4">{[[UserRound,professionals.find(p=>p.key===pro)?.name],[Scissors,selected.join(', ')],[CalendarDays,date],[Clock,time]].map(([Icon,text],i)=>{const I=Icon as typeof UserRound;return <div key={i} className="flex gap-4 border-b border-line pb-4"><I className="h-5 w-5 shrink-0 text-primary"/><p>{String(text)}</p></div>})}</div><div className="border border-primary bg-primary/5 p-6"><p className="text-xs font-bold uppercase text-muted-foreground">Valor total</p><p className="mt-3 font-display text-5xl">{formatMoney(total)}</p><p className="mt-4 text-xs leading-relaxed text-muted-foreground">Ao confirmar, você receberá os detalhes do agendamento pelo WhatsApp.</p></div></div></Step>}
      {step===5&&<div className="flex min-h-[650px] flex-col items-center justify-center p-7 text-center"><div className="grid h-20 w-20 place-items-center rounded-full bg-success text-primary-foreground"><Check className="h-9 w-9"/></div><p className="eyebrow mt-8">Agendamento confirmado</p><h1 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-none sm:text-6xl">Sua cadeira está reservada.</h1><p className="mt-6 max-w-md text-muted-foreground">Você será avisado pelo WhatsApp. Obrigado por escolher a DROP para cuidar do seu estilo.</p><Button asChild size="lg" className="mt-9"><Link to="/">Voltar ao início</Link></Button></div>}
      {step>0&&step<5&&<div className="flex items-center justify-between border-t border-line px-6 py-5 sm:px-10"><Button variant="ghost" onClick={back}><ChevronLeft/> Voltar</Button><Button onClick={next} disabled={!canNext}>{step===4?'Confirmar agendamento':'Próximo'} <ArrowRight/></Button></div>}
    </section>
  </main></div>;
}

function Step({eyebrow,title,children}:{eyebrow:string;title:string;children:React.ReactNode}){return <div className="min-h-[570px] p-6 sm:p-10 lg:p-14"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 font-display text-3xl uppercase sm:text-5xl">{title}</h1><div className="mt-10">{children}</div></div>}