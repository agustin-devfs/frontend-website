"use client";

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
        <meta charSet="utf-8" />
        <link rel="icon" href="/logos/isologo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logos/isologo.png" />
        <meta
          name="description"
          content="Togetherdevs.com is a software company with experience in IT solutions, helping businesses scale up team quality and productivity."
        />
        <link rel="canonical" href="https://www.togetherdevs.com/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Together Devs | Nearshore Software Development Company"
        />
        <meta
          property="og:description"
          content="Togetherdevs.com is a software company with experience in IT solutions, helping businesses scale up team quality and productivity."
        />
        <meta property="og:url" content="https://togetherdevs.com/" />
        <meta property="og:site_name" content="Together Devs" />
        <meta
          property="og:image"
          content="https://togetherdevs.com/logos/isologo.png"
        />
        <meta property="og:image:alt" content="Together Devs Logo" />

        {/* Preconnect and Preload Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700;900&display=swap"
          as="style"
          onLoad={(e) => {
            const link = e.target as HTMLLinkElement;
            link.rel = "stylesheet";
          }}        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700;900&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/* HubSpot Script */}
       {/*  <script
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/24068318.js"
        ></script> */}

        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RXQ2MEBV8W"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RXQ2MEBV8W');
            `,
          }}
        />

        {/* Structured Data */}
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

