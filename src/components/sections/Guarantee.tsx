import seal from "@/assets/guarantee-seal.png";

export const Guarantee = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container grid max-w-5xl items-center gap-10 md:grid-cols-[auto,1fr]">
        <img src={seal} alt="Sello de garantía 7 días" width={220} height={220} loading="lazy" className="mx-auto drop-shadow-xl" />
        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-serif text-3xl font-black text-primary md:text-4xl">
            Garantía Incondicional de <span className="text-gold-dark">7 Días</span>
          </h2>
          <p className="text-lg font-semibold text-foreground">
            ¿Aún tienes dudas? Tranquilo, tu compra está 100% protegida.
          </p>
          <p className="text-muted-foreground">
            Si por cualquier motivo el contenido que recibes no cumple con lo prometido, tienes
            hasta 7 días para solicitar el reembolso completo, sin preguntas ni complicaciones.
          </p>
          <p className="text-muted-foreground">
            Recuerda que tu acceso es de por vida, y constantemente añadimos nuevos materiales
            diseñados para fortalecer tu fe, tu ministerio y tu enseñanza en la Iglesia.
          </p>
        </div>
      </div>
    </section>
  );
};
