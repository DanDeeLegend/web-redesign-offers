import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Mulish, Playfair_Display } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ variable: "--font-mulish", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], style: ["normal", "italic"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500", "600"] });

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

export const viewport: Viewport = { themeColor: "#f6f1e7" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${mulish.variable} ${playfair.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
