import type { Metadata } from "next";
import { Raleway, Podkova } from "next/font/google";
import "./globals.css";

// Importación de fuentes de Google Fonts
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "400", "700", "900"],
});

const podkova = Podkova({
  subsets: ["latin"],
  variable: "--font-podkova",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Together Devs",
  description:
    "Togetherdevsis a software company with experience in IT solutions, helping businesses scale up team quality and productivity.",
  icons: {
    icon: "./../../../public/assets/logos/isologo.png",
     apple: "./../../../public/assets/logos/isologo.png",
   },
  openGraph: {
    title: "Together Devs",
    description:
      "Togetherdevs is a software company with experience in IT solutions, helping businesses scale up team quality and productivity.",
    url: "https://togetherdevs.net/",
    siteName: "Together Devs",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://togetherdevs.net/",
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
              url: "https://togetherdevs.net",
              logo: "https://togetherdevs.net/logos/isologo.png",
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

