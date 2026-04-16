import { CtaButton } from "@/components/CtaButton";
import { Gift } from "lucide-react";

const bonuses = [
  { n: 1, title: "Los 10 Mandamientos: Historia y Aplicación Espiritual", desc: "Descubre el origen, el significado profundo y cómo aplicar los mandamientos en la vida moderna." },
  { n: 2, title: "Los Milagros de Jesús", desc: "Explora cada milagro realizado por el Señor: sanidades, prodigios y señales con contexto y reflexión." },
  { n: 3, title: "Historias Bíblicas para toda la familia", desc: "Colección visual y resumida de las historias más poderosas, ideal para enseñar a niños y adultos." },
  { n: 4, title: "Devocionales de Poder: 30 días", desc: "Reflexiones, versículos clave y oraciones para fortalecer tu conexión diaria con Dios." },
  { n: 5, title: "Manual de Interpretación Bíblica para Principiantes", desc: "Aprende a interpretar correctamente los textos bíblicos y aplicar los principios de hermenéutica." },
];

export const Bonuses = () => {
  return (
    <section className="relative bg-background py-20">
      <div className="container max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <p className="font-semibold uppercase tracking-widest text-gold-dark">Tiempo limitado</p>
          <h2 className="font-serif text-4xl font-black text-primary md:text-5xl">
            🎁 Bonos exclusivos <span className="text-gradient-gold">GRATIS</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Al adquirir <strong>CÓDIGO DIVINO</strong> hoy, recibirás totalmente GRATIS estos
            <strong> 5 regalos exclusivos</strong> que complementarán tu estudio y crecimiento espiritual.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((b) => (
            <article
              key={b.n}
              className="relative overflow-hidden rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-card to-secondary p-8 shadow-card-soft transition-all hover:scale-[1.02] hover:shadow-gold"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                    <Gift className="h-6 w-6 text-gold-foreground" />
                  </div>
                  <span className="font-serif text-lg font-bold text-gold-dark">BONO {b.n}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground line-through">$10</div>
                  <div className="font-serif text-2xl font-black text-success">$0</div>
                </div>
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-primary">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border-2 border-dashed border-gold bg-gold/5 p-8 text-center">
          <p className="font-serif text-2xl font-bold text-primary md:text-3xl">
            🎉 Todo esto valorado en más de{" "}
            <span className="text-muted-foreground line-through">$49 USD</span>{" "}
            <span className="text-gradient-gold">¡totalmente GRATIS!</span>
          </p>
          <p className="mt-2 text-muted-foreground">
            Aprovecha esta oportunidad divina por tiempo limitado.
          </p>
          <div className="mt-6">
            <CtaButton size="hero">Quiero los bonos</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};
