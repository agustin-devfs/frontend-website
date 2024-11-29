'use client'
import { useEffect } from "react";
import Footer from "@/sections/footer/Footer";
import OurTeam from "@/sections/ourTeam/OurTeam";
import ContactForm from "@/sections/contact/ContactForm/ContactForm";
import Testimonials from "@/sections/testimonials/Testimonials";
import Appbar from "@/components/appbar/Appbar";
import OurServices from "@/sections/ourServices/OurServices";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import SuccessCases from "@/components/successCases/SuccessCases";
import ParalaxText from "@/components/Text/ParalaxText/ParalaxText";
import MarqueeIcons from "@/components/marquee/MarqueeIcons"; 
import Hero from "@/sections/hero/Hero";
import AboutUs from "@/sections/aboutUs/AboutUs";

function isMobileClient() {
  const userAgent = navigator.userAgent || navigator.vendor;

  // Detecta dispositivos Android
  if (/android/i.test(userAgent)) {
    return true; // Es un cliente móvil
  }

  // Detecta dispositivos iOS
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return true; // Es un cliente móvil
  }

  return false; // No es un cliente móvil
}

export default function Home() {
  useEffect(() => {
    if (isMobileClient()) {
      window.location.href = "https://webuildapps.ai"; // Redirige a la página para móviles
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <>
      <main>
        <Appbar />
        <Hero />
        <Navbar />
        <section id="services">
          <OurServices />
        </section>
        <section id="aboutus">
          <AboutUs />
        </section>
        <MarqueeIcons />
        <Banner />
        <section id="industries">
          <ParalaxText phrase2={"OUR WORK"} />
          <SuccessCases />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="ourteam">
          <OurTeam />
        </section>
        <section id="contactForm">
          <ContactForm />
        </section>
        <Footer />
      </main>
    </>
  );
}
