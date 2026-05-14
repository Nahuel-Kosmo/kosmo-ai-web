import Image from "next/image";

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow" style={{ marginBottom: "24px", display: "inline-flex" }}>03 · Proyectos</span>
            <h2 style={{ marginTop: "18px" }}>
              Trabajos<br />
              <span className="serif" style={{ fontStyle: "italic" }}>en <span className="gold-text">órbita</span>.</span>
            </h2>
          </div>
          <p className="lead">Una selección de páginas web construidas para clientes reales. Diseño y código a medida, optimizadas para conversión.</p>
        </div>

        <div className="masonry">
          {/* 1 large */}
          <a href="https://romeroinmobiliaria.vercel.app/" target="_blank" rel="noopener noreferrer" className="proj-card size-large">
            <div className="preview" style={{ background: "#050507" }}>
              <div className="mock-browser">
                <div className="bar">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </div>
                <div className="body" style={{ position: "relative", padding: 0, overflow: "hidden" }}>
                  <Image
                    src="/images/projects/romero.jpg"
                    alt="Inmobiliaria Romero"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
              </div>
            </div>
            <div className="meta">
              <div className="info">
                <div className="name">Inmobiliaria Romero</div>
                <div className="cat">Sitio · Catálogo · 2026</div>
              </div>
              <div className="arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
            </div>
          </a>

          {/* 2 tall */}
          <div className="proj-card size-tall">
            <div className="preview" style={{ background: "radial-gradient(ellipse at center, #2a1010, #050507)" }}>
              <div className="mock-phone">
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,#1a0808,#050507)", padding: "30px 14px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ height: "30px" }} />
                  <div style={{ fontFamily: "var(--serif)", fontSize: "20px", color: "#fff", letterSpacing: "-0.02em" }}>
                    Aurora<br /><em style={{ color: "#E8C566", fontWeight: 400, fontSize: "14px" }}>spa & wellness</em>
                  </div>
                  <div style={{ height: "80px", background: "linear-gradient(135deg,#3a1a1a,#1a0808)", borderRadius: "8px", marginTop: "8px" }} />
                  <div style={{ height: "8px", background: "rgba(232,197,102,0.3)", borderRadius: "2px", width: "60%" }} />
                  <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }} />
                  <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", width: "80%" }} />
                </div>
              </div>
            </div>
            <div className="meta">
              <div className="info">
                <div className="name">Aurora Spa</div>
                <div className="cat">Mobile · 2025</div>
              </div>
            </div>
          </div>

          {/* 3 small */}
          <div className="proj-card size-small">
            <div className="preview" style={{ background: "linear-gradient(135deg,#0d1f1a,#050507)", padding: "18px", alignItems: "flex-end", justifyContent: "flex-start" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: "28px", color: "#fff", lineHeight: 0.9, letterSpacing: "-0.02em" }}>
                Verde<br /><em style={{ color: "#9fd6a8", fontWeight: 400 }}>studio</em>
              </div>
            </div>
            <div className="meta">
              <div className="info">
                <div className="name">Verde Studio</div>
                <div className="cat">Branding · 2025</div>
              </div>
            </div>
          </div>

          {/* 4 wide */}
          <div className="proj-card size-wide">
            <div className="preview" style={{ background: "radial-gradient(ellipse at top right, #2a1f10, #050507)" }}>
              <div className="mock-browser">
                <div className="bar">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </div>
                <div className="body" style={{ background: "#050507", padding: "20px", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "14px" }}>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px" }}>
                    <div style={{ fontFamily: "var(--serif)", fontSize: "28px", color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>
                      Norte<br /><em style={{ color: "#E8C566", fontWeight: 400 }}>Café & Co.</em>
                    </div>
                    <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", width: "80%", marginTop: "8px" }} />
                    <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", width: "60%" }} />
                    <div style={{ marginTop: "10px", width: "80px", height: "24px", background: "linear-gradient(180deg,#FFE08A,#C9A961)", borderRadius: "999px" }} />
                  </div>
                  <div style={{ background: "linear-gradient(135deg,#3d2a1f,#0d0805)", borderRadius: "8px" }} />
                </div>
              </div>
            </div>
            <div className="meta">
              <div className="info">
                <div className="name">Norte Café</div>
                <div className="cat">E-commerce · 2026</div>
              </div>
              <div className="arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>

          {/* 5 med */}
          <div className="proj-card size-med">
            <div className="preview" style={{ background: "linear-gradient(135deg,#1f1f3d,#050507)" }}>
              <div className="mock-browser">
                <div className="bar">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </div>
                <div className="body" style={{ background: "#050a14", padding: "18px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: "24px", color: "#fff", letterSpacing: "-0.02em", textAlign: "center" }}>
                    Clínica <em style={{ color: "#E8C566", fontWeight: 400 }}>Lumen</em>
                  </div>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: "30px", height: "6px", background: "rgba(232,197,102,0.4)", borderRadius: "2px" }} />
                    <div style={{ width: "50px", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="meta">
              <div className="info">
                <div className="name">Clínica Lumen</div>
                <div className="cat">Salud · 2025</div>
              </div>
            </div>
          </div>

          {/* 6 med */}
          <div className="proj-card size-med">
            <div className="preview" style={{ background: "linear-gradient(135deg,#3d1f2a,#050507)" }}>
              <div className="mock-browser">
                <div className="bar">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </div>
                <div className="body" style={{ background: "#0a0508", padding: "18px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center" }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: "24px", color: "#fff", letterSpacing: "-0.02em" }}>
                    Atelier<br /><em style={{ color: "#E8C566", fontWeight: 400 }}>Mendoza</em>
                  </div>
                  <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
                    <div style={{ flex: 1, height: "32px", background: "linear-gradient(180deg,#3d1f2a,#1a0d12)", borderRadius: "4px" }} />
                    <div style={{ flex: 1, height: "32px", background: "linear-gradient(180deg,#1a0d12,#3d1f2a)", borderRadius: "4px" }} />
                    <div style={{ flex: 1, height: "32px", background: "linear-gradient(180deg,#3d1f2a,#1a0d12)", borderRadius: "4px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="meta">
              <div className="info">
                <div className="name">Atelier Mendoza</div>
                <div className="cat">Portfolio · 2026</div>
              </div>
            </div>
          </div>

          {/* 7 small */}
          <div className="proj-card size-small">
            <div className="preview" style={{ background: "linear-gradient(135deg,#1a1a2e,#050507)", padding: "18px", alignItems: "flex-start", justifyContent: "space-between", flexDirection: "column" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "9px", color: "#E8C566", letterSpacing: "0.1em" }}>[ KSM-07 ]</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "26px", color: "#fff", lineHeight: 0.9, letterSpacing: "-0.02em" }}>
                Helios<br /><em style={{ color: "#E8C566", fontWeight: 400 }}>Legal</em>
              </div>
            </div>
            <div className="meta">
              <div className="info">
                <div className="name">Helios Legal</div>
                <div className="cat">Estudio jurídico · 2026</div>
              </div>
            </div>
          </div>

          {/* 8 wide */}
          <div className="proj-card size-wide">
            <div className="preview" style={{ background: "radial-gradient(ellipse at bottom left, #102a3d, #050507)" }}>
              <div className="mock-browser">
                <div className="bar">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </div>
                <div className="body" style={{ background: "#050a14", padding: "20px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "14px" }}>
                  <div style={{ background: "linear-gradient(135deg,#1f3d3d,#050a14)", borderRadius: "8px", display: "flex", alignItems: "flex-end", padding: "10px" }}>
                    <div style={{ width: "60%", height: "6px", background: "rgba(232,197,102,0.4)", borderRadius: "2px" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px" }}>
                    <div style={{ fontFamily: "var(--serif)", fontSize: "26px", color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>
                      Polaris<br /><em style={{ color: "#E8C566", fontWeight: 400 }}>Travel Co.</em>
                    </div>
                    <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", width: "90%", marginTop: "6px" }} />
                    <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", width: "70%" }} />
                    <div style={{ marginTop: "8px", width: "90px", height: "22px", background: "linear-gradient(180deg,#FFE08A,#C9A961)", borderRadius: "999px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="meta">
              <div className="info">
                <div className="name">Polaris Travel</div>
                <div className="cat">Turismo · 2026</div>
              </div>
              <div className="arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
