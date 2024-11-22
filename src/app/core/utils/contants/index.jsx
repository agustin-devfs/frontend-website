
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
  imageBacground: "/sonrisaHero.png",
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
    content: "TogetherDevs is an innovative software development company specializing in custom mobile Apps and web platforms. Our goal is to help businesses across various industries turn their ideas into effective, high-impact digital solutions. Our mission is to embrace our client's ideas and take them to the next level by delivering technological products that exceed industry standards"
   },
/*   {
    title: 'How We Make It Happen',
    content: "• Teaming up with clients to bring ideas to life.• Personalized approach to every project • Commitment to quality and innovation • Ensuring tangible and measurable results."},
  {
    title: 'Our Values',
    content: "• Commitment – Dedicated to client success and project excellence. • Curiosity – Constantly learning and innovating to improve.• Passion – Driven by enthusiasm and purpose.• Transparency – Open and honest in all communications. • Customer Orientation – Focused on delivering client-centered solutions." 
  }, */
]};

export const icons = [
      { src: "/technologies/netcore.svg", alt: ".NET Core" },
      { src: "/technologies/js.svg", alt: "JavaScript" },
      { src: "/technologies/node.svg", alt: "Node.js" },
      { src: "/technologies/react.svg", alt: "React" },
      { src: "/technologies/sql.svg", alt: "SQL" },
      { src: "/technologies/mongo.svg", alt: "MongoDB" },
      { src: "/technologies/aws.svg", alt: "AWS" },
      { src: "/technologies/reactnative.svg", alt: "React Native" },
      { src: "/technologies/azure.svg", alt: "Azure" },
   ];
   
   export const projects = [
    {
      category: "MEDIA ENTERTAINMENT",
      title: "Project: Streaming and Social Interaction Platform",
      description: "For AMW.TV, we crafted a groundbreaking streaming platform powered by AI, redefining how users consume and interact with content. By merging personalized experiences with social engagement, the platform drives higher user interaction, unlocks diverse revenue opportunities, and equips content owners with actionable insights.",
      client: "Client: AMWTV",
      image: "/industries/amw.png"
    },
    {
      category: "ECOMMERCE",
      title: "Project: Simple Shops",
      description:"Our team delivered a versatile platform for Simple Shops, granting merchants seamless control over their digital storefronts. From tailored customization to inventory and logistics management, this solution transforms online retail, streamlining operations, facilitating swift onboarding, and ensuring scalability for future growth.",
      client: "Client: Simple Shops",
      image: "/industries/simple shops.png"
    },
    {
      category: "FITNESS",
      title: " Project: Fitness Training and Marketplace Platform",
      description: "For WeMove Training, we built an innovative marketplace designed for personal trainers to showcase and sell their programs while offering users tailored fitness journeys. This platform elevates engagement, boosts sales potential, and fosters a vibrant fitness community by integrating advanced features and analytics.",
      client: "Client: WeMove Training",
      image: "/industries/fitness.png"
    },
    {
      category: "AI",
      title: "Project: AI Meeting Assistant",
      description:"We collaborated with North Tier to create an AI-driven virtual assistant, designed to streamline meeting management. This smart solution automates note-taking, task assignments, and follow-ups in real-time, accessible via web and mobile platforms. The result: improved efficiency, higher task completion rates, and enhanced team collaboration.",
      client: "Client: North Tier",
      image: "/industries/ai.png"
    },
    {
      category: "FINTECH",
      title: "PROJECT INTELLIGENT ADVISORS",
      description: "West Side Consulting benefited from our development of a cutting-edge platform for managing investments. The solution offers an intuitive user experience across web and mobile devices, enabling real-time portfolio tracking and automated management. It enhances user adoption while preparing for scalable growth.",
      client: "Client: West Side Consulting",
      image: "/industries/asesores.png"
    },
    {
      category: "HEALTHY INDUSTRY",
      title: "AI-DRIVEN VIRTUAL MEDICAL ASSISTANT",
      description: "We developed an innovative AI-Driven Virtual Medical Assistant designed to streamline patient interactions and reduce administrative burdens on healthcare professionals. This solution enhances clinical efficiency, improves patient outcomes, and ensures compliance with healthcare standards through automated follow-ups and intelligent documentation.",
      client: "Client: Horizon Health",
      image: "/industries/medical.png"
    },
  /*   {
    category: "ED TECH",
    title: "Project: Roger Training",
    description: "Our team partnered with Rogers Digittal Limited LLC to enrich their Roger Training app by introducing advanced functionalities and continuous support. We tackled everything from frontend and backend updates to database optimization and environment maintenance, ensuring seamless app performance and accurate reporting while improving user experience.",
    client: "Rogers Digittal Limited LLC",
    image: "/industries/medical.png"
    }, */
  ];
export const testimonials = [
 /*  {
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

  }, */
  {
    author: "Diego Perfumo: ",
    quote: "”From the beginning, we knew this project would be complex due to the integrations with several providers and the need to follow strict API guidelines. The Together Devs team exceeded our expectations with their professionalism and attention to detail. They not only met the deadlines but delivered a platform designed to scale effortlessly. We are incredibly grateful for the final result.”",
      position: "Product Manager at West Side Consulting"


  },
  {
    author: "Fernando Skiarski:",
    quote:"”We were impressed by Together Devs' ability to tackle the complexity of integrating multiple payment and shipping services while adhering to stringent API standards. Their professionalism throughout the project was outstanding, and they delivered a solution primed for long-term scalability. It’s been a pleasure working with such a capable team”.",
    position: "Product Manager, Simple Shops",

  },
  {
    author: "John Simmons:",
    quote:"”Together Devs has truly redefined how we run meetings. Their AI assistant not only listens and takes notes but also proactively assigns tasks and integrates with our project management tools. The application has become an indispensable part of our operations, enhancing productivity and ensuring that no detail falls through the cracks. The professionalism and technical expertise of Together Devs have made this project a resounding success.”",
    position: "Operations Manager at North Tier",

  },
  {
    author: "Dr. Emily Clarke:",
    quote:"”The AI-Driven Virtual Medical Assistant developed by Together Devs has been a game-changer for us. Not only does it handle administrative tasks effortlessly, but it also enhances patient care through predictive recommendations and seamless EHR integration. The expertise and innovation brought by Together Devs have set a new standard in healthcare technology.”",
    position: "Chief Innovation Officer at Horizon Health",

  },
  {
    author: "James Collins:",
    quote:
      "”Together Devs has redefined what a streaming platform can be. The combination of seamless content monetization with a vibrant, social user experience has taken AMW.TV to the next level. Their expertise in AI, scalable infrastructure, and user engagement has been invaluable to the success of our platform.”",
      position: "CEO at AMW.TV"

  },
  {
    author: "Emma Larris:",
    quote:
      "”Together Devs has transformed our vision into reality with a cutting-edge platform that empowers trainers and provides users with a personalized fitness experience. Their expertise in AI, mobile development, and e-commerce solutions has been instrumental to our success. The platform has exceeded our expectations in terms of both functionality and user engagement.”",
      position: "Founder at WeMove Training"

  },
  {
    author: "John Matthews:",
    quote:"”Together Devs has given us the perfect platform to expand our business. Their ability to blend B2B and B2C functionality into a single eCommerce system has been a game-changer. The seamless experience for both retailers and consumers, combined with AI-powered insights, has significantly boosted our sales. We couldn’t be happier with the results.”",
      position: "CEO at BioLab Commerce"

  }, 

  /* {
    author: "Andrés Alonso:",
    quote:
      "”I've known David for 20 years now. It's always a pleasure to work together, he's a great partner and ally. Together, we've developed solutions that exceeded customer expectations.”",
      position: "Managing Member at Equity Research Desk"

  }, */
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