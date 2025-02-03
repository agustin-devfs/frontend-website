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
      
        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
    
        <meta
          property="og:description"
          content="Togetherdevs.com is a software company with experience in IT solutions, helping businesses scale up team quality and productivity."
        />
  
        <meta
          property="og:image"
          content="https://togetherdevs.com/logos/isologo.png"
        />

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


      </head>
      <body className={`${raleway.variable} ${podkova.variable}`}>
        {children}
      </body>
    </html>
  );
}

