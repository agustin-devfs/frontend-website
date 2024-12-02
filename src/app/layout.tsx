"use client"; // Directiva para habilitar funcionalidades del cliente

import { Raleway, Podkova } from "next/font/google";
import "./globals.css";

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
