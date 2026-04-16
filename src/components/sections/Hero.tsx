import heroBg from "@/assets/hero-landscape.jpg";
import bundle from "@/assets/product-bundle.png";
import { Star } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background landscape */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/60 to-background" />
      <div className="absolute inset-0 bg-radiant" />

      <div className="container relative z-10 flex flex-col items-center px-4 py-12 text-center text-primary-foreground md:py-20">
        {/* Title */}
        <h1 className="font-serif text-4xl font-black leading-none tracking-wide md:text-6xl animate-float-up">
          <span className="text-gradient-gold">CÓDIGO DIVINO</span>
        </h1>

        <h2 className="mt-4 max-w-3xl font-serif text-xl font-extrabold uppercase leading-tight tracking-wide md:text-3xl animate-float-up">
          Comprende la Biblia de principio a fin con claridad, profundidad y poder espiritual
        </h2>

        {/* Product bundle */}
        <div className="relative mt-8 w-full max-w-2xl">
          <div className="absolute inset-0 -z-10 rounded-full bg-gold/20 blur-3xl" />
          <img
            src={bundle}
            alt="Bundle Código Divino — libros y bonos exclusivos"
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-lg drop-shadow-2xl md:max-w-xl"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Stars */}
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-gold text-gold drop-shadow" />
          ))}
        </div>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/95 md:text-lg">
          Un estudio visual y didáctico que revela los misterios y enseñanzas de toda la Biblia
          de una manera clara, organizada y accesible para todos.
        </p>

        {/* CTA — Green button like the original */}
        <div className="mt-8 w-full max-w-md">
          <a
            href="https://pay.hotmart.com/N105420855S?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              void trackEvent("InitiateCheckout", {
                value: 9.9,
                currency: "USD",
                contentName: "Código Divino - Hero",
              });
            }}
            className="block w-full"
          >
            <button className="w-full rounded-full bg-success px-6 py-5 text-base font-extrabold uppercase tracking-wide text-success-foreground shadow-elegant transition-all hover:scale-[1.02] hover:brightness-110 animate-pulse-gold md:text-lg md:py-6">
              Quiero comprender la Biblia
            </button>
          </a>
          <p className="mt-3 text-xs text-primary-foreground/70">
            🔒 Acceso 100% digital · Entrega inmediata
          </p>
        </div>
      </div>
    </section>
  );
};
