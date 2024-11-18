import ContactSection from "../../../Sections/Contact";

import BioSection from "../../../Sections/OurTeam/Bio/Desktop";
import BioSectionMobile from "../../../Sections/OurTeam/Bio/Mobile";

import { strings } from "../strings";
export const link_whatsapp = `https://wa.me/+5491157617111?text=${strings.WHATSAPP.TEXT_LINK}`;

export const sectionsDesktop = [
  (props) => <BioSection {...props} leaderIds={[22]} />,

  (props) => <ContactSection {...props} />,
];

export const sectionsMobile = [
  (props) => <BioSectionMobile {...props} leaderIds={[22]} />,
  (props) => <ContactSection {...props} />,
];
