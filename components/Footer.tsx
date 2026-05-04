export default function Footer() {
  return (
    <footer>
      <div className="l">
        <span style={{ fontFamily: "var(--serif)", fontSize: "18px", color: "var(--ink)" }}>
          Kosmo<span style={{ color: "var(--gold-2)" }}> Ai.</span>
        </span>
        <div className="footer-social">
          <a href="https://www.instagram.com/nahuelc.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            <span>nahuelc.ai</span>
          </a>
          <a href="mailto:nahuel.kosmoai@gmail.com" aria-label="Email" className="footer-social-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 7 9-7" />
            </svg>
            <span>nahuel.kosmoai@gmail.com</span>
          </a>
        </div>
      </div>
      <div>© 2026 Kosmo AI — Todos los derechos reservados</div>
    </footer>
  );
}
