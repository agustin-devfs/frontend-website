
import { strings } from "../strings";

export const link_whatsapp = `https://wa.me/+5491157617111?text=${strings.WHATSAPP.TEXT_LINK}`;

//BARRAS header-nav
export const bars = {
  app: "App development",
  web: "Web platform",
  hire:"Hire our people", 
  togetherLink: "https://togetherdevs.com/",
  togetherDevsIcon:"logos/TogetherDevs azul.svg",
  appIcon:"icons/appIcon.svg",
  webIcon:"icons/webIcon.svg",
  hireIcon:"icons/appIcon.svg",
  ButtonService:"OUR SERVICE",  
  ButtonAbout:"ABOUT US",
  ButtonWork:" OUR WORK",
  ButtonCall:"GET STARDED",
  appIconB:"icons/appIconB.svg",
  webIconB:"icons/webIconB.svg",
  hireIconB:"icons/appIconB.svg",
}
//HERO
export const hero = 
  {
  prhaseRow1: "We Develop Ideas into" ,
  prhaseRow2:"Thriving Digital Experiences",
  question: "READY TO BUILD TOGETHER?",
  imageBacground: "/Vector lucinda sonsrisa gigante.png",
}
//SERVICES
export const service = 
{
  title: "Our Services",
  button: "Book a call"
}
export const servicesData = [
  {
    title: "Apps",
    description: "Development of Native and hybrid Mobile Apps for iOS & Android devices.",
    imageSrc: "icons/appIcon.svg",
    imageAlt: "App",
  },
  {
    title: "Web Platforms",
    description: "Creative & intuitive UX, Backend APIs, Databases & Cloud Services.",
    imageSrc: "icons/webIcon.svg", 
    imageAlt: "Web Platforms",
  },
  {
    title: "Hire our people",
    description: "Our team is composed of experts in all tech stacks and know how to succeed.",
    imageSrc: "icons/hireIcon.svg", 
    imageAlt: "Hire our people",
  },
];


export const about = {
  aboutImage: {"/assets/sonrisa pequeña.png":String},

  about:[
    {
    title: 'About Us',
    content: "TogetherDevs is an innovative software development company specialising in custom mobile Apps and web platforms. Our goal is to help businesses across various industries turn their ideas into effective, high-impact digital solutions. Our mission is to embrace our client’s ideas and take them to the next level by delivering technological products that exceed industry standards.",
  },
 /*  {
    title: 'How We Make It Happen',
    content: "Teaming up with clients to bring ideas to life. • Personalised approach to every project. • Commitment to quality and innovation • Ensuring tangible and measurable results",
  },
  {
    title: 'Our Values',
    content: "Commitment: Dedicated to client success and project excellence. Curiosity: Constantly learning and innovating to improve. Passion: Driven by enthusiasm and purpose. Transparency: Open and honest in all communications. Customer Orientation: Focused on delivering client-centered solutions.",
  }, */
]};

export const icons = [
  /*   { src: "/technologies/netcore.svg", alt: ".NET Core" },
   *//*   { src: "/technologies/js.svg", alt: "JavaScript" },
   */  { src: "/technologies/node.svg", alt: "Node.js" },
    { src: "/technologies/react.svg", alt: "React" },
    { src: "/technologies/sql.svg", alt: "SQL" },
    { src: "/technologies/mongo.svg", alt: "MongoDB" },
  /*   { src: "/technologies/aws.svg", alt: "AWS" },
   */  { src: "/technologies/reactnative.svg", alt: "React Native" },
  /*   { src: "/technologies/azure.svg", alt: "Azure" },
   */];
   
   export const projects = [
    {
      category: "MEDIA ENTERTAINMENT",
      title: "STREAMING AND SOCIAL INTERACTION PLATFORM",
      description: "We developed an innovative AI-powered streaming platform that revolutionizes content consumption by integrating social interaction and personalized user experiences. This solution increases user engagement, boosts content monetization through multiple models, and provides valuable insights to content owners.",
      client: "Client: AMWTV",
      image: "/aws.png"
    },
    {
      category: "ECOMMERCE",
      title: "SIMPLE SHOPS",
      description: "We developed a dynamic and scalable platform for Simple Shops, empowering merchants with full control over their online storefronts, from customization to inventory and shipping management. This solution revolutionizes store operations, enabling rapid onboarding, streamlined inventory management, and future-ready scalability.",
      client: "Client: Simple Shops",
      image: "/simple shops.png"
    },
    {
      category: "FITNESS",
      title: "FITNESS TRAINING AND MARKETPLACE PLATFORM",
      description: "We developed an advanced fitness marketplace that empowers personal trainers to sell their training programs while providing users with personalized fitness experiences. This solution enhances user engagement, boosts program sales, and fosters a strong fitness community through innovative features and insights.",
      client: "Client: WeMove Training",
      image: "/fitness.png"
    },
    {
      category: "AI",
      title: "AI MEETING ASSISTANT",
      description: "We developed an advanced AI-powered solution acting as a virtual secretary that automates note-taking, task assignment, and follow-ups in real time across web and mobile platforms. This innovative assistant transforms meeting management, increasing efficiency, boosting task completion rates, and enhancing collaboration.",
      client: "Client: North Tier",
      image: "/ai.png"
    },
    {
      category: "FINTECH",
      title: "PROJECT INTELLIGENT ADVISORS",
      description: "We developed a robust and scalable investment management platform featuring an intuitive web and mobile experience with real-time automated portfolio tracking. This solution transforms investment management, enabling fast user adoption and future-ready scalability.",
      client: "Client: West Side Consulting",
      image: "/asesores.png"
    },
    {
      category: "HEALTHY INDUSTRY",
      title: "AI-DRIVEN VIRTUAL MEDICAL ASSISTANT",
      description: "We developed an innovative AI-Driven Virtual Medical Assistant designed to streamline patient interactions and reduce administrative burdens on healthcare professionals. This solution enhances clinical efficiency, improves patient outcomes, and ensures compliance with healthcare standards through automated follow-ups and intelligent documentation.",
      client: "Client: Horizon Health",
      image: "/medical.png"
    }
  ];
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

export const ceo = {
  owner:"David Levy",
  title:"Founder & CEO",
  text1: "With more than 20 years of experience in Technology at Together Devs, we embark on a journey of technological evolution.",
  text2: " Innovation is more than just a concept—it's a transformative force reshaping industries and unlocking endless possibilities."
}

export const teamMembers = [
  { name: "Mateo Levy", role: "Chief Technology Officer" },
  { name: "Agustin Rodriguez", role: "Software Developer & PM" },
  { name: "Ethan Harris", role: "Business Partner" },
  { name: "Facundo Varela", role: "Full Stack Developer" },
  { name: "Carlos Actis", role: "Full Stack Developer" },
  { name: "Carlos Martin", role: "Full Stack Developer" },
  { name: "Fernando Gamba", role: "PHP Developer" },
  { name: "Miguel Maidana", role: "Full Stack Developer" },
  { name: "Augusto Romero", role: "Full Stack Developer" },
  { name: "Santiago Martinez", role: "Backend Developer" },
  { name: "Cesar Casas", role: " Cloud Architect" },
  { name: "Milagros Caruso", role: "Sales Development Representative" },
  { name: "Martina Fraga", role: "Marketing & Communication" },
  { name: "Eugenia Galleguillo", role: "Marketing & Communication" },
  ];

  export const contact ={
    buttonMeet: "SCHEDULE A MEETING",
    buttonChat: "let´s chat",
    text:"OR SIMPLY MESSAGE US",
    buttonSubmit: "Submit"
  }

  export const  footer = {
    terms: "Terms",
    privacy:"Privacy",
    ALL_RIGHTS_RESERVED: "© 2024 TogetherDevs. All Rights Reserved.",
    FOLLOW_US: "Follow us",
  }