import type { Metadata, Viewport } from "next";
import { Cinzel, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz", "SOFT"] });
const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.starvilleschool.com"),
  title: "Starville School | Crèche to Secondary in Jahi, Abuja",
  description:
    "Starville School, Jahi, Abuja. A Christian, Cambridge International School offering Early Years, Primary and Secondary education since 2007. Children, God's Heritage.",
  icons: { icon: "/img/logo-crest.png" },
  openGraph: {
    title: "Starville School, Abuja",
    description: "Early Years, Primary and Secondary education in Jahi, Abuja. Children, God's Heritage.",
    images: ["/img/hero-classroom.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#022547" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${jakarta.variable} ${fraunces.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
