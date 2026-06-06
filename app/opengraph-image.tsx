import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kosmo AI — Agencia de Inteligencia Artificial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050507",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Gold accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #C9A961, #FFE08A, #C9A961)",
          }}
        />

        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(201,169,97,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,169,97,0.05) 0%, transparent 50%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            zIndex: 1,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.2em",
              color: "#C9A961",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Agencia de Inteligencia Artificial · Argentina
          </div>

          <div
            style={{
              fontSize: "72px",
              fontWeight: "600",
              color: "#F5F0E8",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Kosmo{" "}
            <span style={{ color: "#E8C566", fontStyle: "italic" }}>AI.</span>
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "rgba(245,240,232,0.6)",
              maxWidth: "700px",
              lineHeight: 1.5,
              fontFamily: "sans-serif",
              fontWeight: 400,
            }}
          >
            Páginas web a medida y chatbots en WhatsApp que responden 24/7,
            califican leads y agendan reuniones.
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(245,240,232,0.35)",
            fontSize: "14px",
            fontFamily: "monospace",
          }}
        >
          kosmoai.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
