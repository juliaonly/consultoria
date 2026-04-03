import { ImageResponse } from "next/og";

export const alt = "ConsultorIA | Estrategia, experiencia y automatizacion IA";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const pillars = [
  "Estrategia con criterio ejecutivo",
  "Experiencias claras para decidir",
  "Automatizacion con resguardos operativos",
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #050816 0%, #07101f 46%, #09162c 100%)",
          color: "#F4F7FB",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 16% 14%, rgba(142,217,208,0.24), transparent 36%), radial-gradient(circle at 86% 10%, rgba(87,136,214,0.22), transparent 34%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "110px 110px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "58px 62px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 58,
                  height: 58,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.06)",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "0.26em",
                }}
              >
                CI
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  ConsultorIA
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 18,
                    color: "#D6DEEB",
                    letterSpacing: "0.08em",
                  }}
                >
                  estrategia IA para producto y operacion
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 22px",
                borderRadius: 999,
                border: "1px solid rgba(142,217,208,0.28)",
                background: "rgba(142,217,208,0.10)",
                color: "#B6EFE8",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#8ED9D0",
                }}
              />
              Consultoria corporativa
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              gap: 34,
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 760,
                gap: 26,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "#8ED9D0",
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    background: "#8ED9D0",
                    boxShadow: "0 0 0 8px rgba(142,217,208,0.12)",
                  }}
                />
                Estrategia, experiencia y automatizacion
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 72,
                  lineHeight: 1.02,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  maxWidth: 760,
                  textWrap: "balance",
                }}
              >
                IA aplicada con ritmo ejecutivo y base real para escalar.
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: 700,
                  fontSize: 26,
                  lineHeight: 1.4,
                  color: "#D6DEEB",
                }}
              >
                Consultoria premium para pasar de la exploracion a un piloto gobernable, medible y listo para operar.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minWidth: 340,
                padding: 26,
                borderRadius: 32,
                border: "1px solid rgba(148,163,184,0.18)",
                background: "linear-gradient(155deg, rgba(14,28,50,0.94), rgba(7,15,33,0.92))",
                boxShadow: "0 28px 70px rgba(2,6,23,0.32)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 15,
                  color: "#8ED9D0",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Sprint inaugural
              </div>
              {pillars.map((pillar, index) => (
                <div
                  key={pillar}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "14px 0",
                    borderTop: index === 0 ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(255,255,255,0.10)",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: 34,
                      height: 34,
                      borderRadius: 999,
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(182,239,232,0.26)",
                      background: "rgba(182,239,232,0.08)",
                      color: "#B6EFE8",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      fontSize: 22,
                      lineHeight: 1.35,
                      color: "#F4F7FB",
                    }}
                  >
                    {pillar}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
