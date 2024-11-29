"use client"; // Directiva para habilitar funcionalidades del cliente

import { Raleway, Podkova } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

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

// Función para detectar dispositivos móviles
function isMobileClient() {
  const userAgent = typeof window !== "undefined" ? navigator.userAgent || navigator.vendor : "";

  if (/android/i.test(userAgent)) {
    return true;
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return true;
  }

  return false;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (isMobileClient()) {
      window.location.href = "https://webuildapps.ai";
    }
  }, []);

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
