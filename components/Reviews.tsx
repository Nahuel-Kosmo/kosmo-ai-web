const reviews = [
  { stars: 5, t: "Tenía mi inmobiliaria con WhatsApp colapsado. En 3 semanas Kosmo armó la web y el bot — ahora cierro visitas mientras duermo.", n: "Lucía Mendoza", c: "Solaris Inmobiliaria" },
  { stars: 5, t: "El asistente entendió el negocio mejor que mis empleados nuevos. Reservas pasaron de 12 a 38 por semana, sin sumar personal.", n: "Tomás Vidal", c: "Aurora Spa & Wellness" },
  { stars: 5, t: "El equipo es obsesivo con el detalle. La web tiene animaciones que dejaron a mis clientes con la boca abierta.", n: "Camila Herrera", c: "Verde Studio" },
  { stars: 5, t: "Bajamos un 70% el tiempo que el equipo pasaba respondiendo lo mismo. Ahora se enfocan en cerrar, no en explicar el menú.", n: "Federico López", c: "Norte Café & Co." },
  { stars: 5, t: "Profesionales y rápidos. Lo que más valoré: el bot suena humano, los pacientes ni se dan cuenta de que es IA.", n: "Dra. Marina Sosa", c: "Clínica Lumen" },
  { stars: 5, t: "Pasé de perder mensajes los fines de semana a tener la agenda llena. La inversión se pagó sola en 6 semanas.", n: "Iván Roselli", c: "Atelier Mendoza" },
  { stars: 5, t: "Llegaron con propuestas que ni había imaginado. La web es una pieza de diseño, no una plantilla más.", n: "Florencia Quiroga", c: "Estudio Quiroga" },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3 7 7 .8-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.8 9 9z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="review-card">
      <div className="review-stars">
        {Array.from({ length: review.stars }).map((_, i) => <StarIcon key={i} />)}
      </div>
      <div className="review-text">&ldquo;{review.t}&rdquo;</div>
      <div className="review-author">
        <div className="review-avatar">{review.n[0]}</div>
        <div>
          <div className="review-name">{review.n}</div>
          <div className="review-co">{review.c}</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const doubled = [...reviews, ...reviews];
  return (
    <section id="resenas">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow" style={{ marginBottom: "24px", display: "inline-flex" }}>04 · Reseñas</span>
            <h2 style={{ marginTop: "18px" }}>
              Lo que dicen<br />
              <span className="serif" style={{ fontStyle: "italic" }}>quienes <span className="gold-text">confiaron</span>.</span>
            </h2>
          </div>
          <p className="lead">Reseñas reales de clientes que automatizaron su atención y vieron sus números cambiar en semanas.</p>
        </div>
      </div>
      <div className="reviews-track-wrap reveal">
        <div className="reviews-track">
          {doubled.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>
    </section>
  );
}
