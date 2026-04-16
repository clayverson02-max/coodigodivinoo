import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaButton } from "@/components/CtaButton";

const faqs = [
  {
    q: "¿Cómo recibiré el material después de la compra?",
    a: "Una vez confirmado el pago, recibirás un correo electrónico con el acceso inmediato a todo el contenido digital. No necesitas esperar ni pagar envío. Todo es 100% online y accesible desde cualquier dispositivo.",
  },
  {
    q: "¿Y si el material no es lo que esperaba?",
    a: "No te preocupes. Tienes 7 días de garantía incondicional. Si el contenido no cumple tus expectativas, puedes solicitar tu reembolso total sin complicaciones.",
  },
  {
    q: "¿Necesito tener conocimientos previos de la Biblia?",
    a: "¡Para nada! CÓDIGO DIVINO fue diseñado para todos: nuevos creyentes, estudiantes, líderes, padres o pastores. El lenguaje es claro, práctico y accesible.",
  },
  {
    q: "¿Por qué es tan económico? ¿Es un producto confiable?",
    a: "Queremos que miles de personas tengan acceso a este estudio sin barreras. El bajo precio no refleja baja calidad, sino una misión: facilitar el aprendizaje bíblico a todo cristiano comprometido. Más de 4.000 personas ya han confiado en nosotros.",
  },
  {
    q: "¿Puedo pagar en mi moneda local?",
    a: "Sí. La plataforma de pagos convierte automáticamente el valor a tu moneda local y acepta tarjetas de crédito, débito y otros métodos disponibles en tu país.",
  },
];

export const Faq = () => {
  return (
    <section className="bg-background py-20">
      <div className="container max-w-3xl space-y-10">
        <h2 className="text-center font-serif text-4xl font-black text-primary md:text-5xl">
          ❓ Preguntas <span className="text-gold-dark">Frecuentes</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-card-soft"
            >
              <AccordionTrigger className="text-left font-serif text-lg font-bold text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <CtaButton size="hero" pulse>
            Quiero el Código Divino
          </CtaButton>
        </div>
      </div>
    </section>
  );
};
