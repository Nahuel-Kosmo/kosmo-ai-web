const WA_LINK = "https://wa.me/5493873659322?text=Hola%20Nahuel%2C%20me%20interesa%20agendar%20una%20reuni%C3%B3n..";

export default function CTA() {
  return (
    <section className="cta" id="contacto">
      <div className="cta-bg" />
      <div className="cta-content reveal">
        <span className="eyebrow" style={{ marginBottom: "32px", display: "inline-flex" }}>06 · Contacto</span>
        <h2 className="cta-title">
          ¿Querés llevar tu<br />
          negocio al <span className="italic gold-text">siguiente nivel</span>?
        </h2>
        <p className="cta-sub">
          Una reunión de 30 minutos. Te mostramos cómo automatizar tu atención y multiplicar tus leads. Sin costo. Sin compromiso.
        </p>
        <a href={WA_LINK} className="btn btn-primary cta-btn" target="_blank" rel="noopener noreferrer">
          Agendar reunión
          <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
