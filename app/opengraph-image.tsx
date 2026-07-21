import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`
  ).then((r) => r.text());
  const url = css.match(/src: url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error(`Could not resolve font URL for ${family}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [archivoBlack, workSans] = await Promise.all([
    loadFont("Archivo+Black", 400),
    loadFont("Work+Sans", 700),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#FAFAFA",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontFamily: "Work Sans",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#0A0A0A",
            borderBottom: "3px solid #EF4444",
            paddingBottom: 10,
            marginBottom: 32,
            display: "flex",
          }}
        >
          Software Engineering Student — Kuwait
        </div>
        <div
          style={{
            fontFamily: "Archivo Black",
            fontSize: 104,
            lineHeight: 1.0,
            letterSpacing: -2,
            color: "#0A0A0A",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>ABDULLATIF</span>
          <span>ALZAID</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo Black", data: archivoBlack, weight: 400, style: "normal" },
        { name: "Work Sans", data: workSans, weight: 700, style: "normal" },
      ],
    }
  );
}
