"use client";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".svc-card");
    const handlers: { card: HTMLElement; onEnter: () => void; onMove: (e: MouseEvent) => void; onLeave: () => void }[] = [];

    cards.forEach((card) => {
      let rect: DOMRect | null = null;

      const onEnter = () => { rect = card.getBoundingClientRect(); };
      const onMove = (e: MouseEvent) => {
        if (!rect) rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mx", (x / rect.width) * 100 + "%");
        card.style.setProperty("--my", (y / rect.height) * 100 + "%");
        const rx = ((y - rect.height / 2) / rect.height) * -8;
        const ry = ((x - rect.width / 2) / rect.width) * 8;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      };
      const onLeave = () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
        rect = null;
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      handlers.push({ card, onEnter, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ card, onEnter, onMove, onLeave }) => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <section id="servicios">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow" style={{ marginBottom: "24px", display: "inline-flex" }}>01 · Qué Hacemos</span>
            <h2 style={{ marginTop: "18px" }}>
              Lo que hace<br />
              <span className="serif" style={{ fontStyle: "italic" }}>que <span className="gold-text">funcione</span>.</span>
            </h2>
          </div>
          <p className="lead">Combinamos diseño de alta conversión con IA aplicada para que tu negocio trabaje solo — incluso cuando vos no estás.</p>
        </div>

        <div className="services-grid reveal-stagger">
          {/* Card 1 */}
          <article className="svc-card">
            <div>
              <div className="svc-num">01 / Web</div>
              <div className="svc-icon">
                <svg viewBox="0 0 56 56" fill="none">
                  <rect x="4" y="8" width="48" height="36" rx="3" stroke="url(#g1)" strokeWidth="1.4" />
                  <path d="M4 18h48M14 8v10M4 44l14-14 8 8 10-10 16 16" stroke="url(#g1)" strokeWidth="1.4" strokeLinejoin="round" />
                  <rect x="18" y="46" width="20" height="3" rx="1.5" stroke="url(#g1)" strokeWidth="1.4" />
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop stopColor="#FFE08A" /><stop offset="1" stopColor="#8a6f2e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="svc-title">Páginas web a medida</h3>
              <p className="svc-body">Diseñamos y desarrollamos tu sitio desde cero — sin templates genéricos. Cada pixel pensado para convertir visitantes en clientes.</p>
            </div>
            <div className="svc-foot">
              <span className="svc-tag">Next.js</span>
              <span className="svc-tag">SEO</span>
              <span className="svc-tag">CRO</span>
              <span className="svc-tag">Responsive</span>
            </div>
          </article>

          {/* Card 2 */}
          <article className="svc-card">
            <div>
              <div className="svc-num">02 / IA</div>
              <div className="svc-icon">
                <svg viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="12" stroke="url(#g2)" strokeWidth="1.4" />
                  <path d="M28 8v6M28 42v6M8 28h6M42 28h6M14.1 14.1l4.2 4.2M37.7 37.7l4.2 4.2M41.9 14.1l-4.2 4.2M18.3 37.7l-4.2 4.2" stroke="url(#g2)" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="28" cy="28" r="4" fill="#E8C566" />
                  <defs>
                    <linearGradient id="g2" x1="0" x2="1">
                      <stop stopColor="#FFE08A" /><stop offset="1" stopColor="#8a6f2e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="svc-title">Chatbot IA 24/7</h3>
              <p className="svc-body">Asistente entrenado con tu información que responde preguntas en WhatsApp a cualquier hora. Nunca pierde un lead por estar fuera de horario.</p>
            </div>
            <div className="svc-foot">
              <span className="svc-tag">WhatsApp</span>
              <span className="svc-tag">GPT-4</span>
              <span className="svc-tag">24/7</span>
              <span className="svc-tag">Multi-idioma</span>
            </div>
          </article>

          {/* Card 3 */}
          <article className="svc-card">
            <div>
              <div className="svc-num">03 / Leads</div>
              <div className="svc-icon">
                <svg viewBox="0 0 56 56" fill="none">
                  <path d="M10 46L22 26l8 12 8-18 8 26" stroke="url(#g3)" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
                  <circle cx="22" cy="26" r="3" fill="#E8C566" />
                  <circle cx="30" cy="38" r="3" fill="#E8C566" />
                  <circle cx="38" cy="20" r="3" fill="#E8C566" />
                  <defs>
                    <linearGradient id="g3" x1="0" x2="1">
                      <stop stopColor="#FFE08A" /><stop offset="1" stopColor="#8a6f2e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="svc-title">Calificación de leads</h3>
              <p className="svc-body">El bot detecta intención de compra, hace las preguntas correctas y solo escala al equipo humano cuando el lead está caliente y listo.</p>
            </div>
            <div className="svc-foot">
              <span className="svc-tag">CRM</span>
              <span className="svc-tag">Scoring</span>
              <span className="svc-tag">Auto-nurture</span>
            </div>
          </article>

          {/* Card 4 */}
          <article className="svc-card">
            <div>
              <div className="svc-num">04 / Agenda</div>
              <div className="svc-icon">
                <svg viewBox="0 0 56 56" fill="none">
                  <rect x="6" y="10" width="44" height="40" rx="3" stroke="url(#g4)" strokeWidth="1.4" />
                  <path d="M6 22h44M18 6v8M38 6v8" stroke="url(#g4)" strokeWidth="1.4" />
                  <circle cx="28" cy="36" r="8" stroke="#E8C566" strokeWidth="1.4" />
                  <path d="M28 32v4l3 2" stroke="#E8C566" strokeWidth="1.4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="g4" x1="0" x2="1">
                      <stop stopColor="#FFE08A" /><stop offset="1" stopColor="#8a6f2e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="svc-title">Agendado de visitas</h3>
              <p className="svc-body">Conectamos el asistente con tu Google Calendar. El cliente reserva, confirma y recibe recordatorios sin que muevas un dedo.</p>
            </div>
            <div className="svc-foot">
              <span className="svc-tag">Google Cal</span>
              <span className="svc-tag">Recordatorios</span>
              <span className="svc-tag">Reagenda auto</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
