import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat, Nunito } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], axes: ["opsz", "wdth"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bluebell.com.ng"),
  title: "Bluebell Montessori International School | Port Harcourt",
  description:
    "Bluebell Montessori International School, Port Harcourt: a co-educational preschool, nursery, primary and secondary school founded in 2009. Montessori learning, a Cambridge curriculum, and a safe, supportive environment.",
  icons: { icon: "/img/logo-small.png" },
  openGraph: { title: "Bluebell Montessori International School", description: "Education that inspires excellence, from Early Years to Secondary.", images: ["/img/swings.jpg"] },
};

export const viewport: Viewport = { themeColor: "#fff8ec" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${bricolage.variable} ${nunito.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
