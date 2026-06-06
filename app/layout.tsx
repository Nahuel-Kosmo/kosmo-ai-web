import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kosmoai.dev"),
  title: {
    default: "Kosmo AI | Agencia de Inteligencia Artificial",
    template: "%s | Kosmo AI",
  },
  description:
    "Agencia de IA para negocios en LATAM. Diseñamos páginas web a medida y chatbots en WhatsApp que responden 24/7, califican leads y agendan reuniones automáticamente.",
  keywords: [
    "agencia inteligencia artificial LATAM",
    "chatbot WhatsApp",
    "páginas web a medida",
    "automatización negocios",
    "chatbot IA 24/7",
    "agendado automático",
    "Kosmo AI",
  ],
  authors: [{ name: "Kosmo AI", url: "https://kosmoai.dev" }],
  creator: "Kosmo AI",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://kosmoai.dev",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://kosmoai.dev",
    siteName: "Kosmo AI",
    title: "Kosmo AI | Agencia de Inteligencia Artificial",
    description:
      "Diseñamos páginas web a medida y chatbots en WhatsApp que responden 24/7, califican leads y agendan reuniones. Para negocios en LATAM.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kosmo AI — Agencia de Inteligencia Artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosmo AI | Agencia de Inteligencia Artificial",
    description:
      "Diseñamos páginas web a medida y chatbots en WhatsApp que responden 24/7, califican leads y agendan reuniones.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
      >
        <JsonLd />
        {children}
        <ScrollReveal />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
