"use client";

import Footer from "@/sections/footer/Footer";
import ContactForm from "@/sections/contact/ContactForm/ContactForm";
import Testimonials from "@/sections/testimonials/Testimonials";
import Appbar from "@/components/appbar/Appbar";
import OurServices from "@/sections/ourServices/OurServices";
import Hero from "@/sections/hero/Hero";
import OurProducts from "@/sections/ourProducts/OurProducts";
import BannerSwiper from "@/components/banner/Banner";
import OurEvents from "@/sections/events/OurEvents";

export default function Home() {
  return (
    <>
      <main>
        <Appbar />

        <Hero />

        <section id="services">
          <OurServices />
        </section>

        <section id="aboutus"></section>

        <section id="galery">
          <BannerSwiper />
        </section>

        <section id="events">
          <OurEvents />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="products">
          <OurProducts />
        </section>

        <section id="contactForm">
          <ContactForm />
        </section>

        <Footer />
      </main>
    </>
  );
}
