'use client';
import { Box, Typography } from '@mui/material';
import { motion, /* useTransform, */ /* useSpring,  */useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {about} from '@/app/core/utils/contants'

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
/*   const smoothScroll = useSpring(scrollProgress, { stiffness: 50, damping: 20 });
 */
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const start = window.innerHeight * 0.7255; // Ajustar el comienzo del efecto
      const end = window.innerHeight * 0.7266; // Ajustar el final del efecto

   if (rect.top <= start && rect.bottom >= end) {
        // Bloqueamos el body cuando la sección es visible
        document.body.style.overflow = 'hidden';
        const scrollableHeight = section.scrollHeight - section.offsetHeight;
        const progress = Math.min(
          Math.max((start - rect.top) / scrollableHeight, 0),
          1
        );
        scrollProgress.set(progress);
      } else {
        document.body.style.overflow = '';
      } 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollProgress]);

  return (
    <Box
      ref={sectionRef}
      id="aboutus"
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Static Background */}
      <Image
        src="/assets/about.png"
        alt="Background"
        width= {2000}
        height= {1200}
        style={{
          top: 0,
          left: 0,
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      {/* Scrollable Content */}
      <Box
        sx={{
          position: 'absolute',
          top: 50,
          left: '65%',
          width: '40%',
          height: '90%',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflowY: 'scroll',
          backgroundColor: 'white',
          borderTopLeftRadius: '25%',
          borderBottomLeftRadius: '25%',
        }}
      >
        {about.about.map((item, index) => (
          <motion.div
            key={index}
            style={{
 /*              opacity: useTransform(smoothScroll, [index - 0.5, index, index + 0.5], [0, 1, 0]),
              y: useTransform(smoothScroll, [index - 0.5, index, index + 0.5], [50, 0, -50]), */
              position: 'absolute',
              width:'70%'
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: 'Raleway', fontWeight: 400, fontSize: { xs: '32px', md: '48px' }, color: 'black' }}>
              {item.title}
            </Typography>
            <Image src={"/assets/sonrisa pequeña.png"} alt="Sonrisa" width={96} height={38} style={{ margin: '10px 0' }} />
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontSize: { xs: '16px', md: '30px' },
                lineHeight: { xs: '24px', md: '50px' },
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
