'use client'
import { Box, Typography, useTheme } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const about = [
  {
    title: 'About Us',
    content: "TogetherDevs is an innovative software development company specialising in custom mobile Apps and web platforms. Our goal is to help businesses across various industries turn their ideas into effective, high-impact digital solutions. Our mission is to embrace our client’s ideas and take them to the next level by delivering technological products that exceed industry standards.",
  },
  {
    title: 'How We Make It Happen',
    content: "Teaming up with clients to bring ideas to life. • Personalised approach to every project. • Commitment to quality and innovation • Ensuring tangible and measurable results",
  },
  {
    title: 'Our Values',
    content: "Commitment: Dedicated to client success and project excellence. Curiosity: Constantly learning and innovating to improve. Passion: Driven by enthusiasm and purpose. Transparency: Open and honest in all communications. Customer Orientation: Focused on delivering client-centered solutions.",
  },
];

export default function AboutSection() {
  const theme = useTheme();

  // Scroll synchronization
  const { scrollY } = useScroll();
  const sectionHeight = 400; // Height allocated for each section
  const scrollRange = sectionHeight * about.length;

  // Calculate the visible index
  const visibleIndex = useTransform(scrollY, [0, scrollRange], [0, about.length - 1]);

  return (
    <Box sx={{ position: 'relative', height: '400vh', overflow: 'hidden' }}>

      <Box
        component="img"
        src="/about.jpeg"
        alt="Background"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: '60%',
          width: '40%',
          height: '100%',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderTopLeftRadius: '25%',
          borderBottomLeftRadius: '25%',
        }}
      >
        {about.map((item, index) => (
          <motion.div
            key={index}
            style={{
              opacity: useTransform(visibleIndex, [index - 0.5, index, index + 0.5], [0, 1, 0]),
              y: useTransform(visibleIndex, [index - 0.5, index, index + 0.5], [100, 0, -100]),
              position: 'absolute',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontSize: { xs: '32px', md: '48px' },
                color: 'black',
              }}
            >
              {item.title}
            </Typography>
            <Image
              src="/assets/sonrisa pequeña.png"
              alt="Sonrisa"
              width={90}
              height={30}
              style={{ margin: '10px 0' }}
            />
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: { xs: '24px', md: '32px' },
                color: 'black',
              }}
            >
              {item.content}
            </Typography>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
