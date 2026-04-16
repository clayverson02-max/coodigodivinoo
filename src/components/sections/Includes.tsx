import { CtaButton } from "@/components/CtaButton";
import { BookOpenCheck } from "lucide-react";

const modules = [
  {
    title: "170 Bosquejos del Libro de Josué",
    desc: "Resúmenes temáticos con enseñanzas, aplicaciones y oraciones que te guiarán por todo el libro de Josué de forma clara y visual.",
  },
  {
    title: "30 Días de Oración",
    desc: "Una guía devocional para fortalecer tu vida de oración durante 30 días, basada en los cinco primeros libros de la Biblia.",
  },
  {
    title: "Génesis — Versículo por Versículo",
    desc: "Estudio profundo, práctico y espiritual de cada versículo del libro de Génesis, con reflexiones y aplicaciones diarias.",
  },
  {
    title: "Éxodo — Versículo por Versículo",
    desc: "Comprensión clara y edificante del mensaje de Éxodo, explicado de forma accesible para todo lector.",
  },
  {
    title: "Levítico — Versículo por Versículo",
    desc: "Guía espiritual para entender el propósito de las leyes, ofrendas y enseñanzas de Levítico, aplicadas a la vida moderna.",
  },
];

export const Includes = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container max-w-6xl space-y-12">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-black text-primary md:text-5xl">
            ¿Qué incluye <span className="text-gold-dark">CÓDIGO DIVINO</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Recibirás una biblioteca espiritual completa, compuesta por estudios visuales,
            devocionales y explicaciones versículo por versículo de los principales libros de la Biblia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <article
              key={m.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute right-4 top-4 font-serif text-5xl font-black text-gold/20">
                {String(i + 1).padStart(2, "0")}
              </div>
              <BookOpenCheck className="mb-4 h-10 w-10 text-gold-dark" />
              <h3 className="mb-3 font-serif text-xl font-bold text-primary">{m.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <CtaButton size="hero">Quiero comprender la Biblia</CtaButton>
        </div>
      </div>
    </section>
  );
};
