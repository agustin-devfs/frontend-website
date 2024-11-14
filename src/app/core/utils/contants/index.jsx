
import { strings } from "../strings";

export const link_whatsapp = `https://wa.me/+5491157617111?text=${strings.WHATSAPP.TEXT_LINK}`;

export const configSlideHero = [
  {
    id: 1,
    title: strings.HERO.SLIDE_THREE.TITLE,
    description: strings.HERO.SLIDE_THREE.DESCRIPTION,
    buttonConfig: {
      text: strings.HERO.SLIDE_THREE.BUTTON,
    },
    background: {
      desktop: "home/desktop/0.webp",
      mobile: "home/mobile/0.webp",
    },
  },

  {
    id: 2,
    title: strings.HERO.SLIDE_TWO.TITLE,
    description: strings.HERO.SLIDE_TWO.DESCRIPTION,
    buttonConfig: {
      text: strings.HERO.SLIDE_TWO.BUTTON,
    },
    background: {
      desktop: "home/desktop/2.webp",
      mobile: "home/mobile/2.webp",
    },
  },
  {
    id: 3,
    title: strings.HERO.SLIDE_ONE.TITLE,
    description: strings.HERO.SLIDE_ONE.DESCRIPTION,
    buttonConfig: {
      text: strings.HERO.SLIDE_ONE.BUTTON,
    },
    background: {
      desktop: "home/desktop/1.webp",
      mobile: "home/mobile/1.webp",
    },
  },
];

export const mockPortfolio = [
  {
    title: "Media Entertainment",
    image: {
      desktop: "portfolio/desktop/AMW.webp",
      mobile: "portfolio/mobile/AMW.avif",
    },
  },
  {
    title: "E-Commerce",
    image: {
      desktop: "portfolio/desktop/SS.webp",
      mobile: "portfolio/mobile/SS.avif",
    },
  },
  {
    title: "Finance",
    image: {
      desktop: "portfolio/desktop/AI.webp",
      mobile: "portfolio/mobile/AI.avif",
    },
  },
  /*   {
    title: "Ed Tech",
    image: {
      desktop: "portfolio/desktop/AMW.png",
      mobile: "portfolio/mobile/AMW.png",
    },
  }, */
  {
    title: "Health",
    image: {
      desktop: "portfolio/desktop/HEALTH.webp",
      mobile: "portfolio/mobile/HEALTH.avif",
    },
  },
];

const tabletStyle = {
  borderRadius: 2,
  padding: "16px",
  backgroundColor: "#000",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
};

export const testimonials = [
  {
    author: "Guilllermo Bertossi: ",
    quote:
      "”I know David for more than a decade now and every time we had Technical meetings he always proposed well designed solutions.”",
      position: "Managing Member at Equity Research Desk"

  },
  {
    author: "Pedro Badia: ",
    quote:
      "”For years, we have been working with Together Devs, they always advise us in the best way, the quality of their developers is excellent, they are a strategic Partner”",
      position: "Managing Member at Equity Research Desk"

  },
  {
    author: "Diego Perfumo: ",
    quote:
      "”We hired Together Devs over 5 years ago to develop a platform that automates the entire wealth management process. David, Mateo and their team were instrumental in the design and coding and deployment. We continue to work with them adding new  features, connecting other custodians and integrating new products”",
      position: "Managing Member at Equity Research Desk"

  },
  {
    author: "Andrés Alonso:",
    quote:
      "”I've known David for 20 years now. It's always a pleasure to work together, he's a great partner and ally. Together, we've developed solutions that exceeded customer expectations.”",
      position: "Managing Member at Equity Research Desk"

  },
];


