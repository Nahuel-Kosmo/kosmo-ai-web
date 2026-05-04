"use client";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    const nav = document.querySelector(".nav") as HTMLElement;
    const onScroll = () => {
      if (window.scrollY > 30) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        Kosmo<span className="dot"> Ai.</span>
      </a>
      <div className="nav-links">
        <a href="#servicios">Servicios</a>
        <a href="#resultados">Resultados</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#resenas">Reseñas</a>
        <a href="#faq">FAQ</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}
