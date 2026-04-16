import { CtaButton } from "@/components/CtaButton";
import { Check, Lock, Smartphone, Mail, Flame } from "lucide-react";
import seal from "@/assets/guarantee-seal.png";

const items = [
  "170 Bosquejos del Libro de Josué",
  "Éxodo – Versículo por Versículo",
  "Génesis – Versículo por Versículo",
  "Levítico – Versículo por Versículo",
  "30 Días de Oración",
  "🎁 BONO 1: Los 10 Mandamientos",
  "🎁 BONO 2: Los Milagros de Jesús",
  "🎁 BONO 3: Historias Bíblicas para toda la familia",
  "🎁 BONO 4: Devocionales de Poder",
  "🎁 BONO 5: Manual de Interpretación Bíblica",
];

export const Offer = () => {
  return (
    <section className="bg-gradient-primary py-20 text-primary-foreground">
      <div className="container max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-destructive/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-gold-light">
            <Flame className="h-4 w-4 text-destructive" />
            Precio especial de lanzamiento
          </p>
          <h2 className="font-serif text-4xl font-black md:text-5xl">
            ¡Llévate <span className="text-gradient-gold">TODO esto</span> por solo
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border-2 border-gold/40 bg-card text-card-foreground shadow-elegant">
          <div className="bg-gradient-gold py-8 text-center text-gold-foreground">
            <div className="font-serif text-7xl font-black md:text-8xl">$9,90</div>
            <div className="mt-1 text-sm font-semibold uppercase tracking-widest">USD — pago único</div>
            <div className="mt-2 text-sm">(Puedes pagar en tu moneda local)</div>
          </div>

          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h3 className="mb-4 font-serif text-xl font-bold text-primary">Recibirás:</h3>
              <ul className="space-y-3">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <img src={seal} alt="Garantía de 7 días" width={180} height={180} loading="lazy" className="drop-shadow-xl" />
              <div className="space-y-2 text-center text-sm">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Lock className="h-4 w-4 text-success" /> Acceso 100% seguro y digital
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Smartphone className="h-4 w-4 text-success" /> Compatible con cualquier dispositivo
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-success" /> Entrega inmediata por email
                </div>
              </div>
              <CtaButton size="hero" pulse>
                Quiero el Código Divino
              </CtaButton>
              <p className="text-center text-xs font-semibold uppercase tracking-wider text-destructive">
                ⚠️ Oferta limitada — Últimos cupos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
