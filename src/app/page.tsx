'use client';

import { useState, useEffect } from 'react';
import Footer from '@/sections/footer/Footer';
import OurTeam from '@/sections/ourTeam/OurTeam';
import ContactForm from '@/sections/contact/ContactForm/ContactForm';
import Testimonials from '@/sections/testimonials/Testimonials';
import Appbar from '@/components/appbar/Appbar';
import OurServices from '@/sections/ourServices/OurServices';
import Navbar from '@/components/navbar/Navbar';
import Banner from '@/components/banner/Banner';
import SuccessCases from '@/components/successCases/SuccessCases';
import ParalaxText from '@/components/Text/ParalaxText/ParalaxText';
import MarqueeIcons from '@/components/marquee/MarqueeIcons';
import Hero from '@/sections/hero/Hero';
import AboutUs from '@/sections/aboutUs/AboutUs';

export default function Home() {
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [scrollLocked]);

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
          <AboutUs onScrollLock={setScrollLocked} />
        </section>
        <MarqueeIcons />
        <Banner />
        <section id="industries">
          <ParalaxText phrase2={'OUR WORK'} />
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
