import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Calculadoras Claras — Calculadoras financieras gratis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1d37d7 0%, #3b66f5 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px" }}>
          <div
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "56px",
              fontWeight: 800,
              color: "white",
            }}
          >
            CC
          </div>
          <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
            <span style={{ fontSize: "40px", fontWeight: 800, lineHeight: 1.1 }}>Calculadoras</span>
            <span style={{ fontSize: "40px", fontWeight: 800, lineHeight: 1.1, color: "#bfd3fe" }}>Claras</span>
          </div>
        </div>

        {/* Titular */}
        <div style={{ display: "flex", fontSize: "64px", fontWeight: 800, color: "white", lineHeight: 1.15, maxWidth: "900px" }}>
          Tus números claros antes de decidir
        </div>

        {/* Subtítulo */}
        <div style={{ display: "flex", marginTop: "32px", fontSize: "30px", color: "#dbe7fe", maxWidth: "850px" }}>
          Hipoteca · Nómina · IRPF · Autónomos · Interés compuesto · Finiquito
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: "16px", marginTop: "48px" }}>
          {["100% gratis", "Sin registro", "Al instante"].map((b) => (
            <div
              key={b}
              style={{
                display: "flex",
                padding: "12px 24px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.15)",
                color: "white",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
