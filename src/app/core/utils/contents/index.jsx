import ContactSection from "../../../Sections/Contact";
import OurTeamSection from "../../../Sections/OurTeam/Desktop";
import OurTeamSectionMobile from "../../../Sections/OurTeam/Mobile";

import TeamSection from "../../../Sections/OurTeam/Team/Desktop";
import BioSection from "../../../Sections/OurTeam/Bio/Desktop";
import BioSectionMobile from "../../../Sections/OurTeam/Bio/Mobile";

import { strings } from "../strings";
export const link_whatsapp = `https://wa.me/+5491157617111?text=${strings.WHATSAPP.TEXT_LINK}`;

export const sectionsDesktop = [
  (props) => <OurTeamSection {...props} />,
  (props) => <TeamSection {...props} teamIds={[13, 14, 15]} />,
  (props) => <TeamSection {...props} teamIds={[16, 17, 18]} />,
  (props) => <TeamSection {...props} teamIds={[19, 20, 21]} />,
  (props) => <BioSection {...props} leaderIds={[12]} />,
  (props) => <BioSection {...props} leaderIds={[22]} />,
  (props) => <BioSection {...props} leadersIds={[10]} />,
  (props) => <ContactSection {...props} />,
];

export const sectionsMobile = [
  (props) => <OurTeamSectionMobile {...props} leaderIds={[10]} />,
  (props) => <OurTeamSectionMobile {...props} leaderIds={[22]} />,
  (props) => <OurTeamSectionMobile {...props} leaderIds={[12]} />,

  (props) => <TeamSection {...props} teamIds={[13, 14, 15]} />,
  (props) => <TeamSection {...props} teamIds={[16, 17, 18]} />,
  (props) => <TeamSection {...props} teamIds={[19, 20, 21]} />,
  (props) => <BioSectionMobile {...props} leaderIds={[12]} />,
  (props) => <BioSectionMobile {...props} leaderIds={[22]} />,
  (props) => <BioSectionMobile {...props} leaderIds={[10]} />,
  (props) => <ContactSection {...props} />,
];
