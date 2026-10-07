import type { Metadata, Viewport } from "next";
import { Archivo, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"] });
const source = Source_Sans_3({ variable: "--font-source", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://premiereacademyng.org"),
  title: "Premiere Academy | International Boarding School in Lugbe, Abuja",
  description:
    "Premiere Academy, Lugbe, Abuja: an international co-education boarding school. 92% WAEC credit pass in 2025. Robotics, AI, coding and test prep alongside conventional studies. Admissions open for 2026/2027.",
  openGraph: {
    title: "Premiere Academy, Abuja: The pride of the nation",
    description: "Education beyond academic excellence. Admissions open for the 2026/2027 session.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#a3202e" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${source.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
