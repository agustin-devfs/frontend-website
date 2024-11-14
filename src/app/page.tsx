import Footer from "@/sections/footer/Footer";
import OurTeam from "@/sections/ourTeam/OurTeam";
import ContactForm from "@/sections/contact/ContactForm/ContactForm";
import Testimonials from "@/sections/testimonials/Testimonials";
import Appbar from "@/components/appbar/Appbar";
import OurServices from "@/sections/ourServices/OurServices";
import Navbar from "@/components/navbar/Navbar";
import Industries from "@/sections/industries/Industries";


export default function Home() {
  return (
    <div >
      <main >
        <Navbar/>
        <Appbar />
       <OurServices/>
      {/*      <Industries/> */}
         <Testimonials/> 
         <OurTeam/>
         <ContactForm/>
        <Footer/>
      </main>
    </div>
  );
}
