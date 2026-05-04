import VortexCanvas from "./VortexCanvas";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-bg">
        <VortexCanvas />
      </div>
      <div className="hero-vignette" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow">Agencia de Inteligencia Artificial · Est. 2024</span>
        </div>
        <h1 className="hero-title">
          <span className="line">Inteligencia que</span>
          <span className="line italic gold-text">orbita tu negocio.</span>
        </h1>
        <p className="hero-sub">
          Diseñamos páginas web a medida y asistentes de IA en WhatsApp que responden, califican leads y agendan reuniones — mientras vos dormís.
        </p>
        <div className="hero-cta">
          <a href="#contacto" className="btn btn-primary">
            Agendar reunión
            <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#servicios" className="btn btn-ghost">Ver servicios</a>
        </div>
      </div>

      <div className="hero-meta">
        <span className="left-meta">Salta, Argentina</span>
        <span className="scroll-ind">Scroll para explorar</span>
      </div>
    </header>
  );
}
