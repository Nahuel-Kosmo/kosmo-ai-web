"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto tarda el desarrollo de una página web?",
    a: "Una landing page normal se entrega de 2 a 3 días. Una web con catálogo tarda entre 4 y 7 días. Cada proyecto arranca con un brief claro y un timeline definido desde el día uno.",
  },
  {
    q: "¿El asistente de IA realmente responde 24/7?",
    a: "Sí. Una vez entrenado con tu información (productos, horarios, FAQ), el asistente atiende mensajes en WhatsApp todos los días, todo el día. Nunca duerme, nunca pide vacaciones.",
  },
  {
    q: "¿Puede agendar visitas o reuniones automáticamente?",
    a: "Sí. Conectamos el bot con tu Google Calendar (o el sistema que uses). El cliente elige día y horario, recibe la confirmación y un recordatorio antes de la cita. Si necesita reagendar, también lo gestiona el bot.",
  },
  {
    q: "¿Qué información necesitan de mi negocio para empezar?",
    a: "En la primera reunión te enviamos un brief simple: rubro, productos o servicios, preguntas frecuentes que recibís, tono de comunicación y referencias visuales. Con eso armamos la propuesta a medida.",
  },
  {
    q: "¿Cuánto cuesta un proyecto con Kosmo?",
    a: "Depende del alcance: una landing arranca diferente que un sitio completo o que un agente IA con integración a CRM. En la primera reunión (gratis y sin compromiso) te pasamos cotización exacta.",
  },
  {
    q: "¿Ofrecen mantenimiento después del lanzamiento?",
    a: "Sí. Todos nuestros proyectos ofrecen mantenimiento. Trabajamos con un setup inicial + un fee mensual que cubre actualizaciones, mejoras y soporte continuo del sitio o del asistente.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="faq-grid reveal">
          <div>
            <span className="eyebrow" style={{ marginBottom: "24px", display: "inline-flex" }}>05 · FAQ</span>
            <h2 style={{ marginTop: "18px" }}>
              Preguntas<br />
              <span className="serif" style={{ fontStyle: "italic" }}>en <span className="gold-text">órbita</span>.</span>
            </h2>
            <p style={{ marginTop: "24px", color: "var(--ink-dim)", maxWidth: "340px", fontSize: "15px" }}>
              ¿No encontrás tu pregunta? Escribinos por WhatsApp y te respondemos al instante.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item${openIndex === i ? " open" : ""}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="faq-q">
                  {faq.q}
                  <span className="faq-toggle" />
                </div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
