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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kosmo AI",
  url: "https://kosmoai.dev",
  logo: "https://kosmoai.dev/icon.svg",
  description:
    "Agencia de inteligencia artificial para negocios en LATAM. Desarrollamos páginas web a medida y chatbots en WhatsApp que responden 24/7, califican leads y agendan reuniones.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salta",
    addressCountry: "AR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: ["https://www.instagram.com/nahuelc.ai/"],
  areaServed: {
    "@type": "Place",
    name: "Latinoamérica",
  },
  serviceType: [
    "Desarrollo de páginas web",
    "Chatbots de inteligencia artificial",
    "Automatización de negocios",
    "Asistentes virtuales WhatsApp",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
