import { CtaButton } from "@/components/CtaButton";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Quieres comprender verdaderamente cada capítulo y versículo de la Biblia.",
  "Quieres enseñar a otros de manera didáctica y espiritual.",
  "Buscas una forma visual y práctica de memorizar historias y enseñanzas.",
  "Deseas aprender sobre la vida y enseñanzas de Jesús de forma clara.",
  "Te sientes frustrado al leer la Biblia sin entender su mensaje profundo.",
];

export const WhatIs = () => {
  return (
    <section className="bg-background py-20">
      <div className="container max-w-4xl space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl font-black text-primary md:text-5xl">
            ¿Qué es <span className="text-gold-dark">CÓDIGO DIVINO</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Es un material exclusivo que te lleva a través de toda la historia de la Biblia con
            bosquejos visuales, ilustraciones impactantes y explicaciones claras, diseñadas para
            ayudarte a entender y aplicar la Palabra de Dios como nunca antes.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 text-left shadow-card-soft md:p-12">
          <h3 className="mb-6 text-center font-serif text-2xl font-bold text-primary">
            Este material es para ti si:
          </h3>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-success" />
                <span className="text-base text-foreground md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <CtaButton size="hero">Sí, lo quiero</CtaButton>
      </div>
    </section>
  );
};
