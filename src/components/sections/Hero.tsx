import { CtaButton } from "@/components/CtaButton";
import heroBg from "@/assets/hero-bible.jpg";
import mockup from "@/assets/mockup-product.png";
import { BookOpen, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary" />
      <div className="absolute inset-0 bg-radiant" />

      <div className="container relative z-10 grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div className="space-y-6 animate-float-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-light">
            <Star className="h-4 w-4 fill-gold text-gold" />
            Más de 4.000 cristianos transformados
          </div>

          <h1 className="font-serif text-4xl font-black leading-tight md:text-6xl">
            <span className="text-gradient-gold">CÓDIGO DIVINO</span>
          </h1>

          <h2 className="font-serif text-2xl font-bold leading-snug md:text-3xl">
            Comprende la Biblia de principio a fin con claridad, profundidad y poder espiritual
          </h2>

          <p className="max-w-xl text-lg text-primary-foreground/85">
            Un estudio visual y didáctico que revela los misterios y enseñanzas de toda la Biblia
            de una manera clara, organizada y accesible para todos.
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <CtaButton size="hero" pulse>
              Quiero comprender la Biblia
            </CtaButton>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <BookOpen className="h-5 w-5 text-gold" />
              Acceso inmediato 100% digital
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-10 rounded-full bg-gold/30 blur-3xl" />
          <img
            src={mockup}
            alt="Mockup del producto Código Divino — biblioteca espiritual digital"
            width={600}
            height={600}
            className="relative w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
