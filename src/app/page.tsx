import Footer from "@/sections/footer/Footer";
import OurTeam from "@/sections/ourTeam/OurTeam";
import ContactForm from "@/sections/contact/ContactForm/ContactForm";
import Testimonials from "@/sections/testimonials/Testimonials";
import Appbar from "@/components/appbar/Appbar";
import OurServices from "@/sections/ourServices/OurServices";
import Navbar from "@/components/navbar/Navbar";
import Banner from '@/components/banner/Banner';
import SuccessCases from '@/components/successCases/SuccessCases';
import ParalaxText from "@/components/Text/ParalaxText/ParalaxText";
import MarqueeIcons from "@/components/marquee/MarqueeIcons";
import Hero from "@/sections/hero/Hero";
import AboutUs from "@/sections/aboutUs/AboutUs";

export default function Home() {
  return (
    <div >
      <main >
        <Navbar/>
        <Appbar />
        <Hero/>
        <OurServices/>
        <AboutUs/>
        {/*  Industries  */}
         <MarqueeIcons/>
        <Banner/>
        <ParalaxText phrase1={""} phrase2={"Industries"}/>
        <SuccessCases/>
        {/*  Industries  */}
          <Testimonials/> 
         <OurTeam/>
         <ContactForm/>
        <Footer/>
      </main>
    </div>
  );
}
