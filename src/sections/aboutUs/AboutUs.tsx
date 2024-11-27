'use client';
import { Box, Container, Typography } from '@mui/material';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { about } from '@/app/core/utils/contants';

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const smoothScroll = useSpring(scrollProgress, { stiffness: 50, damping: 20 });
  const [scrollLocked, setScrollLocked] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const start = window.innerHeight * 0.1;
      const end = window.innerHeight * 0.9;

      // Detect if user is in the section
      if (rect.top <= start && rect.bottom >= end) {
        if (!scrollLocked) {
          document.body.style.overflow = 'hidden';
          setScrollLocked(true);
        }

        event.preventDefault();

        const scrollableHeight = section.scrollHeight - section.offsetHeight;
        const progress = Math.min(
          Math.max((start - rect.top) / scrollableHeight, 0),
          1
        );
        scrollProgress.set(progress);

        // Adjust slide index based on scroll progress
        const totalSlides = about.about.length;
        const newIndex = Math.floor(progress * totalSlides);
        setSlideIndex(newIndex);
      } else {
        if (scrollLocked) {
          document.body.style.overflow = '';
          setScrollLocked(false);
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
      document.body.style.overflow = '';
    };
  }, [scrollProgress, scrollLocked]);

  return (
    <Container maxWidth="xl" sx={{ margin: '0', padding: '0' }}>
      <Box
        ref={sectionRef}
        id="aboutus"
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          backgroundImage: 'url(/assets/11.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: '0',
          padding: '0',
        }}
      >
        {/* Scrollable Content */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '60%',
            width: '40%',
            height: '100%',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: 'white',
            borderTopLeftRadius: '25%',
            borderBottomLeftRadius: '25%',
          }}
        >
          {about.about.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: slideIndex === index ? 1 : 0,
                y: slideIndex === index ? 0 : 50,
              }}
              transition={{ duration: 0.5 }}
              style={{
                position: slideIndex === index ? 'relative' : 'absolute',
                width: '70%',
                display: slideIndex === index ? 'block' : 'none',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 400,
                  fontSize: { xs: '32px', md: '44px' },
                  color: 'black',
                  textAlign: 'center',
                }}
              >
                {item.title}
              </Typography>
              <Image
                src={'/assets/sonrisa pequeña.png'}
                alt="Sonrisa"
                width={96}
                height={38}
                style={{ margin: '10px 0' }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 400,
                  fontSize: { xs: '16px', md: '26px' },
                  lineHeight: { xs: '24px', md: '44px' },
                  color: 'black',
                  textAlign: 'center',
                }}
              >
                {item.content}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
