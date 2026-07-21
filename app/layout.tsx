import type { Metadata } from "next";
import { Archivo_Black, Work_Sans, Space_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullatif-portfolio.vercel.app"),
  title: "Abdullatif Alzaid — Software Engineering Student",
  description:
    "Software Engineering student who designs, directs, and ships real production web products using AI-directed development workflows.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Abdullatif Alzaid — Software Engineering Student",
    description:
      "I design, direct, and ship real production software — using AI-directed development to turn business requirements into deployed products.",
    url: "https://abdullatif-portfolio.vercel.app",
    siteName: "Abdullatif Alzaid",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullatif Alzaid — Software Engineering Student",
    description:
      "I design, direct, and ship real production software — using AI-directed development to turn business requirements into deployed products.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${workSans.variable} ${spaceMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
