import type { Metadata } from "next";
import { Raleway, Podkova } from "next/font/google";
import "./globals.css";

// Importación de fuentes de Google Fonts
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "400", "700", "900"], // Selecciona los pesos necesarios
});

const podkova = Podkova({
  subsets: ["latin"],
  variable: "--font-podkova",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Together Devs | Nearshore Software Development Company",
  description:
    "Togetherdevs.com is a software company with experience in IT solutions, helping businesses scale up team quality and productivity.",
  icons: {
    icon: "./../../public/logos/isologo.png",
    apple: "./../../public/logos//logos/isologo.png",
  },
  openGraph: {
    title: "Home",
    description:
      "Togetherdevs.com is a software company with experience in IT solutions, helping businesses scale up team quality and productivity.",
    url: "https://togetherdevs.com/",
    siteName: "Together Devs",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://togetherdevs.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Together Devs",
              url: "https://togetherdevs.com",
              logo: "https://togetherdevs.com/logos/isologo.png",
              sameAs: [
                "https://www.facebook.com/togetherdevs",
                "https://www.linkedin.com/company/togetherdevs",
              ],
            }),
          }}
        />
      </head>
      <body className={`${raleway.variable} ${podkova.variable}`}>
        {children}
      </body>
    </html>
  );
}

