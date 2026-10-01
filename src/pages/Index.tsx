import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Dumbbell,
  Flame,
  Heart,
  Leaf,
  LockKeyhole,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/config/links";
import { trackEvent } from "@/lib/tracking";
import heroImage from "@/assets/gluteos-hero.jpg";
import platformImage from "@/assets/plataforma-balance.jpg";
import resultOne from "@/assets/resultado-aluna-1.png.asset.json";
import resultTwo from "@/assets/resultado-aluna-2.png.asset.json";
import resultThree from "@/assets/resultado-aluna-3.png.asset.json";
import resultBeforeAfter from "@/assets/resultado-antes-depois-1.png.asset.json";
import resultBefore from "@/assets/resultado-antes.png.asset.json";
import resultAfter from "@/assets/resultado-depois.png.asset.json";
import resultEvolution from "@/assets/resultado-evolucao.png.asset.json";

const notifications = [
  ["María", "México"],
  ["Camila", "Colombia"],
  ["Sofía", "Chile"],
  ["Valentina", "Argentina"],
  ["Daniela", "Perú"],
];

const proofImages = [
  { src: resultBeforeAfter.url, alt: "Comparación de evolución enviada por una alumna", label: "Antes → Después" },
  { src: resultEvolution.url, alt: "Evolución en tres etapas enviada por una alumna", label: "Evolución real" },
  { src: resultBefore.url, alt: "Registro de antes enviado por una alumna", label: "Antes" },
  { src: resultAfter.url, alt: "Registro de después enviado por una alumna", label: "Después" },
  { src: resultOne.url, alt: "Resultado compartido por una alumna", label: "Resultado real" },
  { src: resultTwo.url, alt: "Resultado compartido por una alumna", label: "Resultado real" },
  { src: resultThree.url, alt: "Resultado compartido por una alumna", label: "Resultado real" },
];

const faqs = [
  ["¿Esto funciona aunque ya lo haya intentado todo?", "Sí. Porque aquí no haces solo recetas o solo ejercicio. Usas ambos juntos, en el orden correcto, atacando la célula de grasa específica."],
  ["¿Necesito gimnasio o equipamiento?", "No. Todo se hace en casa, con el propio peso del cuerpo."],
  ["¿Las recetas son difíciles?", "No. Son ingredientes que ya tienes en la cocina y vídeos paso a paso."],
  ["¿Y si no me gusta?", "Tienes 7 días para probarlo. Si no notas diferencia, solicitas la devolución."],
];

function PurchaseNotice() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const first = window.setTimeout(() => setVisible(true), 5000);
    const rotate = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % notifications.length);
        setVisible(true);
      }, 450);
    }, 10000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(rotate);
    };
  }, []);

  const current = notifications[index];
  if (!current) return null;
  return (
    <aside className={`purchase-notice ${visible ? "is-visible" : ""}`} aria-live="polite">
      <div className="notice-check"><Check size={16} /></div>
      <div><strong>{current[0]} de {current[1]}</strong><span>acaba de asegurar su acceso</span></div>
      <button type="button" onClick={() => setVisible(false)} aria-label="Cerrar aviso"><X size={15} /></button>
    </aside>
  );
}

function CheckoutButton() {
  return (
    <Button asChild className="sales-cta">
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => void trackEvent("InitiateCheckout", { value: 6.5, currency: "USD", contentName: "Plataforma Ivone Silva" })}
      >
        <span>QUIERO MI ACCESO POR $6,50 AHORA</span><ArrowRight size={20} />
      </a>
    </Button>
  );
}

function OfferLink({ label }: { label: string }) {
  return (
    <Button asChild className="sales-cta">
      <a
        href="#oferta"
        onClick={() => void trackEvent("ViewContent", { value: 6.5, currency: "USD", contentName: "Oferta Plataforma Ivone Silva" })}
      >
        <span>{label}</span><ArrowRight size={20} />
      </a>
    </Button>
  );
}

export default function Index() {
  const today = new Intl.DateTimeFormat("es", { day: "2-digit", month: "long" }).format(new Date());
  return (
    <div className="sales-page">
      <div className="today-bar">
        <Clock3 size={16} />
        <strong>Oferta disponible solo hoy, {today}</strong>
        <span>por tiempo limitado</span>
      </div>

      <header className="sales-header page-shell">
        <a href="#inicio" className="wordmark" aria-label="Inicio"><span>IVONE</span> SILVA</a>
        <a href="#oferta" className="header-cta">Ver oferta <ArrowRight size={15} /></a>
      </header>

      <main>
        <section className="sales-hero page-shell" id="inicio">
          <div className="hero-copy">
            <div className="overline"><Sparkles size={15} /> Método completo en vídeo</div>
            <h1>Tu trasero no está “feo”… está inflamado, con grasa atrapada en células específicas y sin estímulo muscular.</h1>
            <p className="hero-promise">En 15 días puedes cambiarlo de verdad.</p>
            <p className="lead">La única plataforma que combina recetas que atacan la célula de grasa localizada de los glúteos + entrenamientos en vídeo que trabajan en sinergia con esas recetas. Resultado: menos celulitis, menos estrías, menos manchas y un trasero firme y vivo de nuevo.</p>
            <div className="cta-trust"><LockKeyhole size={15} /> Acceso inmediato · Pago seguro · 7 días de garantía</div>
          </div>
          <div className="hero-media">
            <img src={heroImage} alt="Mujer observando su cuerpo frente al espejo" width={1200} height={1408} fetchPriority="high" />
            <div className="hero-stamp"><strong>15</strong><span>días para empezar a notar cambios</span></div>
          </div>
        </section>

        <section className="pain-section section-space">
          <div className="narrow-shell">
            <span className="section-number">01 — LO QUE SIENTES</span>
            <h2>Mírate al espejo ahora.<br />¿Qué sientes cuando ves tu trasero?</h2>
            <div className="emotion-row"><span>¿Vergüenza?</span><span>¿Frustración?</span><span>¿Ganas de esconderte?</span></div>
            <p>¿Esas ganas de esconderte con shorts largos, leggings negros o una falda larga?</p>
            <p>Ya lo has intentado todo:</p>
            <ul className="attempt-list">
              <li><Check /> Gimnasio 5 veces por semana</li>
              <li><Check /> Cremas carísimas</li>
              <li><Check /> Dietas locas</li>
              <li><Check /> Ejercicios de “glúteos en el gimnasio” que solo dejan las piernas cansadas</li>
            </ul>
            <div className="pain-callout"><span>¿Y el resultado?</span><p>El mismo trasero flácido, con celulitis de piel de naranja, estrías blancas o moradas y esa grasa rebelde que parece pegada.</p></div>
          </div>
        </section>

        <section className="truth-section section-space">
          <div className="page-shell truth-grid">
            <div>
              <span className="section-number">02 — LA VERDAD QUE NADIE TE CUENTA</span>
              <h2>La mayoría de los métodos falla porque trata el síntoma, no la causa.</h2>
              <p>La grasa localizada en los glúteos no desaparece solo con ejercicio.</p>
              <p>Está atrapada en células específicas que necesitan ser “despertadas” y vaciadas.</p>
              <p>Sin atacar esas células + estimular el músculo en el orden correcto, el resultado tarda meses… o nunca llega.</p>
            </div>
            <div className="truth-card">
              <div className="cell-visual"><img src="/celulas-grasa.png" alt="Ilustración de células de grasa localizadas" width="616" height="376" loading="lazy" /></div>
              <h3>Receta + estímulo muscular</h3>
              <p>Dos acciones trabajando en sinergia, en la secuencia correcta.</p>
              <div className="truth-arrow"><ArrowRight /><strong>Célula activada</strong><ArrowRight /><strong>Músculo estimulado</strong></div>
            </div>
          </div>
          <div className="narrow-shell emotional-copy"><p>Y mientras tanto, la autoestima se va. Te sientes menos mujer. Menos deseada. Menos segura.</p><strong>Eso duele. Y sabes que duele.</strong></div>
        </section>

        <section className="solution-section section-space" id="metodo">
          <div className="page-shell">
            <div className="section-heading centered"><span className="section-number">03 — LA SOLUCIÓN</span><h2>No es “otra receta casera”.<br />No es “otro entrenamiento de glúteos”.</h2><p>Es una plataforma completa creada por Ivone Silva —exfisicoculturista y especialista en recetas naturales— después de años estudiando lo que realmente funciona en el cuerpo de la mujer.</p></div>
            <div className="deliverables">
              <article><div className="feature-icon"><Leaf /></div><span>01</span><h3>50 recetas en vídeo</h3><p>Paso a paso, actúan directamente en las células de grasa localizada de los glúteos. No son “recetitas para adelgazar”. Son fórmulas con ingredientes de tu cocina para facilitar la eliminación de esa grasa específica.</p></article>
              <article><div className="feature-icon"><Dumbbell /></div><span>02</span><h3>100 entrenamientos en vídeo</h3><p>Organizados en una secuencia inteligente. Mientras la receta ayuda a vaciar la célula de grasa, el ejercicio estimula el músculo para ocupar ese espacio, dejando el trasero más firme, redondo y “vivo”.</p></article>
            </div>
            <div className="platform-showcase"><img src={platformImage} alt="Plataforma con recetas y entrenamientos en vídeo" width={1408} height={1008} loading="lazy" /><div><span className="section-number">TODO EN UN SOLO LUGAR</span><h3>Todo organizado.<br />Todo en vídeo.</h3><p>Todo para hacerlo en casa, sin equipamiento, sin gimnasio, sin complicaciones.</p><ul><li><Play /> Clases paso a paso</li><li><Heart /> Rutina pensada para mujeres</li><li><ShieldCheck /> Acceso desde el primer día</li></ul></div></div>
            <div className="average-result"><strong>El resultado medio de las mujeres que siguieron correctamente la plataforma:</strong><p>En 15 días ya se podía ver una diferencia real. En 20 días el trasero estaba visiblemente más firme, con menos celulitis, menos estrías aparentes y sin esa grasa que “no sale de ninguna manera”.</p><span>Esto no es una promesa vacía. Es lo que ocurre cuando atacas la causa correcta, en el orden correcto.</span></div>
            <div className="middle-cta"><OfferLink label="VER LA OFERTA COMPLETA" /></div>
          </div>
        </section>


        <section className="coach-section section-space" id="ivone">
          <div className="page-shell coach-grid">
            <div className="coach-media">
              <img src="/ivone-coach-actual.png" alt="Ivone Silva, especialista en entrenamiento y recetas naturales" width="700" height="933" loading="lazy" />
              <span>IVONE SILVA · MÉTODO COMPLETO</span>
            </div>
            <div className="coach-copy">
              <span className="section-number">CONOCE A IVONE</span>
              <h2>Una metodología creada por una mujer que entiende el cuerpo femenino.</h2>
              <p>Ivone Silva es exfisicoculturista y especialista en recetas naturales. Después de años estudiando lo que realmente funciona en el cuerpo de la mujer, organizó su método en una plataforma práctica, directa y fácil de seguir.</p>
              <p>Su propuesta une dos partes que normalmente se encuentran separadas: recetas en vídeo y entrenamientos en vídeo. Todo está pensado para que puedas hacerlo en casa, con una secuencia clara y sin perder tiempo improvisando.</p>
              <div className="coach-proof">
                <div><strong>50</strong><span>recetas en vídeo</span></div>
                <div><strong>100</strong><span>entrenamientos en vídeo</span></div>
                <div><strong>1</strong><span>plataforma organizada</span></div>
              </div>
              <p className="coach-signature">“No necesitas más confusión. Necesitas un método que puedas seguir.”</p>
            </div>
          </div>
        </section>

        <section className="proof-section section-space" id="resultados">
          <div className="page-shell">
            <div className="section-heading centered"><span className="section-number">04 — RESULTADOS REALES</span><h2>Ellas dejaron de probar métodos aislados…</h2><p>Y utilizaron la plataforma completa. Desliza para ver registros compartidos por alumnas.</p></div>
            <div className="proof-scroll" aria-label="Resultados de alumnas en desplazamiento automático"><div className="proof-track">{[...proofImages, ...proofImages].map((image, i) => <figure key={`${image.src}-${i}`}><div className="proof-image-wrap"><img src={image.src} alt={image.alt} loading="lazy" /><span>{image.label}</span></div><figcaption><div>{Array.from({ length: 5 }).map((_, star) => <Star key={star} size={14} fill="currentColor" />)}</div><strong>Registro de alumna {String((i % proofImages.length) + 1).padStart(2, "0")}</strong></figcaption></figure>)}</div></div>
                        <div className="proof-copy"><p>Estas mujeres no hicieron un milagro. Solo dejaron de probar métodos aislados y utilizaron la plataforma completa.</p><p>Volvieron a mirarse al espejo y sonreír. Volvieron a usar shorts. Volvieron a sentirse atractivas.</p><strong>Y tú puedes ser la próxima.</strong></div>
          </div>
        </section>

        <section className="steps-section-new section-space">
          <div className="page-shell">
            <div className="section-heading"><span className="section-number">05 — CÓMO FUNCIONA</span><h2>Simple, en casa y a tu ritmo.</h2></div>
            <div className="steps-grid-new">
              {[['01','Accedes hoy','Entras en la plataforma el mismo día.'],['02','Sigues las recetas','Vídeos de 5–10 minutos al día.'],['03','Haces los entrenamientos','Sesiones cortas y eficaces en vídeo.'],['04','Notas el cambio','En 15 días empiezas a ver cómo cambia el espejo.']].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
            </div>
            <div className="no-need"><span>Sin suplemento caro</span><span>Sin gimnasio</span><span>Sin dieta restrictiva</span></div>
            <p className="only-follow">Solo necesitas seguir lo que ya está organizado para ti.</p>
          </div>
        </section>


        <section className="desire-section section-space">
          <div className="page-shell desire-grid">
            <div className="desire-media">
              <img src="/autoestima-feminina.png" alt="Mujer midiendo su cuerpo y visualizando su transformación" width="602" height="604" loading="lazy" />
            </div>
            <div className="desire-copy">
              <span className="section-number">VUELVE A SENTIRTE SEGURA</span>
              <h2>No se trata solo de cambiar tu cuerpo. Se trata de volver a reconocerte.</h2>
              <p>Dejar de esconderte. Vestir lo que quieres. Mirarte al espejo y sentir que estás cuidando de ti, con un método claro y una plataforma creada para acompañarte.</p>
              <p><strong>Tu autoestima no tiene que esperar a que encuentres otro método.</strong> Empieza con una rutina organizada, recetas en vídeo y entrenamientos que puedes hacer en casa.</p>
            </div>
          </div>
        </section>

        <section className="offer-section section-space" id="oferta">
          <div className="offer-shell">
            <div className="offer-copy"><span className="offer-badge"><Flame size={15} /> SOLO 50 ACCESOS</span><h2>Tu momento de empezar es hoy.</h2><p>El valor normal de esta plataforma es <strong>$27,90</strong>. Pero Ivone liberó solo 50 accesos con un descuento agresivo:</p><div className="price"><del>$27,90</del><strong>$6,50</strong><span>pago único</span></div><p>Así es. Seis dólares con cincuenta. Menos que una merienda. Menos que cualquier crema que no soluciona nada.</p><ul className="offer-deliverables"><li><Check /> 50 recetas en vídeo, paso a paso</li><li><Check /> 100 entrenamientos en vídeo</li><li><Check /> Plataforma organizada para usar en casa</li><li><Check /> Acceso inmediato + garantía de 7 días</li></ul><CheckoutButton /><div className="cta-trust light"><LockKeyhole size={15} /> Compra segura · Acceso inmediato · Garantía de 7 días</div></div>
            <div className="choice-card"><span>Tienes dos opciones ahora:</span><div><i>1</i><p>Seguir mirándote al espejo y sintiendo la misma frustración de siempre.</p></div><div className="selected-choice"><i>2</i><p>Garantizar tu acceso por <strong>$6,50</strong> y en 15–20 días ver por fin el trasero que mereces.</p></div><p className="urgency-note">Después de que se agoten los 50 cupos, el precio vuelve a la normalidad o la oferta desaparece.</p></div>
          </div>
        </section>

        <section className="faq-section section-space">
          <div className="narrow-shell"><div className="section-heading centered"><span className="section-number">PREGUNTAS FRECUENTES</span><h2>Resolvemos tus dudas.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section className="final-section section-space"><div className="narrow-shell centered"><span className="section-number">ÚLTIMA OPORTUNIDAD</span><h2>Ya has pasado demasiado tiempo sintiéndote menos de lo que eres.</h2><p>Ya invertiste dinero y energía en cosas que no funcionan.</p><p>Ahora la solución está frente a ti.<br /><strong>Completa. Organizada. En vídeo.</strong><br />Y por un precio que casi no existe.</p><h3>No dejes pasar esta oportunidad.<br />Haz clic ahora y empieza hoy.</h3><OfferLink label="QUIERO VER LA OFERTA DE $6,50" /></div></section>
      </main>

      <footer className="sales-footer"><div className="page-shell"><div className="wordmark"><span>IVONE</span> SILVA</div><p>© 2026 Ivone Silva. Todos los derechos reservados.</p><small>Los resultados pueden variar de una persona a otra según la constancia y las condiciones individuales.</small></div></footer>
      <PurchaseNotice />
    </div>
  );
}