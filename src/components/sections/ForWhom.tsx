import { GraduationCap, Users, Home, Heart } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";

const audience = [
  { icon: GraduationCap, title: "Profesores y Pastores", desc: "Material perfecto para clases, prédicas y discipulados." },
  { icon: Users, title: "Estudiantes y nuevos creyentes", desc: "Una forma sencilla y poderosa de aprender." },
  { icon: Home, title: "Familias", desc: "Enseña a tus hijos de forma visual y memorable." },
  { icon: Heart, title: "Líderes de célula o grupos", desc: "Una herramienta que transforma vidas." },
];

export const ForWhom = () => {
  return (
    <section className="bg-gradient-primary py-20 text-primary-foreground">
      <div className="container max-w-6xl space-y-12">
        <div className="text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-gold">Ventajas de usar</p>
          <h2 className="font-serif text-4xl font-black md:text-5xl">
            ¿Quién puede <span className="text-gradient-gold">usarlo</span>?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audience.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-gold/20 bg-primary-foreground/5 p-8 text-center backdrop-blur-sm transition-all hover:border-gold/60 hover:bg-primary-foreground/10"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <Icon className="h-8 w-8 text-gold-foreground" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-gold-light">{title}</h3>
              <p className="text-sm text-primary-foreground/80">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CtaButton size="hero">Sí, quiero aprender</CtaButton>
        </div>
      </div>
    </section>
  );
};
