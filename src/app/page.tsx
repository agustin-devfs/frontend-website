'use client';

import Footer from '@/sections/footer/Footer';
import ContactForm from '@/sections/contact/ContactForm/ContactForm';
import Testimonials from '@/sections/testimonials/Testimonials';
import Appbar from '@/components/appbar/Appbar';
import OurServices from '@/sections/ourServices/OurServices';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/sections/hero/Hero';

export default function Home() {


  return (
    <>
      <main>
        <Appbar />
        <Navbar />
        <Hero />
        <section id="services">
          <OurServices />
        </section>
        <section id="aboutus">
        </section>
        <section id="industries">
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="ourteam">
        </section>
        <section id="contactForm">
          <ContactForm />
        </section>
        <Footer />
      </main>
    </>
  );
}
