import ContactSection from "../../../Sections/Contact";
import BlogSection from "../../../Sections/Blog";


import { strings } from "../strings";
export const link_whatsapp = `https://wa.me/+5491157617111?text=${strings.WHATSAPP.TEXT_LINK}`;



export const sectionsDesktop = [
  (props) => <BlogSection {...props} /* blogId={[30, 31, 32]} *//>,

 (props) => <ContactSection {...props} />,
];

export const sectionsMobile = [
  (props) => <BlogSection {...props}/>,
  (props) => <ContactSection {...props} />,
];


