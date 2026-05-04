"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
