"use client";
import { useEffect } from "react";

function animateCounter(el: Element) {
  const target = parseFloat((el as HTMLElement).dataset.count || "0");
  const duration = 1800;
  const numEl = el.querySelector(".num")!;
  const start = performance.now();

  function tick(now: number) {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    numEl.textContent = String(Math.floor(target * eased));
    if (p < 1) requestAnimationFrame(tick);
    else numEl.textContent = String(target);
  }
  requestAnimationFrame(tick);
}

export default function Results() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && (en.target as HTMLElement).dataset.count) {
            animateCounter(en.target);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="resultados">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow" style={{ marginBottom: "24px", display: "inline-flex" }}>02 · Resultados</span>
            <h2 style={{ marginTop: "18px" }}>
              Lo que <span className="serif" style={{ fontStyle: "italic" }}>prometemos</span>
              <br />y entregamos.
            </h2>
          </div>
          <p className="lead">Métricas reales de los negocios que confiaron en Kosmo. Cada número es el resultado promedio luego de 60 días de operación.</p>
        </div>

        <div className="results-grid">
          <div className="result-card reveal" data-count="70">
            <div className="result-num">
              <span className="num">0</span>
              <span className="sym">%</span>
            </div>
            <span className="result-label">Menos tiempo administrativo</span>
            <span className="result-desc">El asistente responde, agenda y filtra. Tu equipo recupera horas para vender.</span>
          </div>
          <div className="result-card reveal" data-count="30">
            <div className="result-num">
              <span className="pre">+</span>
              <span className="num">0</span>
              <span className="sym">%</span>
            </div>
            <span className="result-label">Más leads calificados</span>
            <span className="result-desc">Aumento promedio en captura y calificación de oportunidades reales.</span>
          </div>
          <div className="result-card reveal" data-count="10">
            <div className="result-num">
              <span className="pre">+</span>
              <span className="num">0</span>
            </div>
            <span className="result-label">Negocios transformados</span>
            <span className="result-desc">Marcas que automatizaron su atención y duplicaron su capacidad de respuesta.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
