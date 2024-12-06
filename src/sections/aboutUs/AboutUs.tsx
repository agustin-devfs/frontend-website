'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
/* import { useEffect, useRef } from 'react';
import scrollIntoView from 'scroll-into-view'; */
import { about } from '@/app/core/utils/contants';
import CardAbout from '@/components/banner/swiperAbout/CardAbout';

import 'swiper/css';
import 'swiper/css/pagination';

export default function AboutUs({ onScrollLock }: { onScrollLock: (lock: boolean) => void }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));
  
   /*const aboutUsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          onScrollLock(true);
          if (aboutUsRef.current) {
            // Configuración para un desplazamiento suave
            scrollIntoView(aboutUsRef.current, {
              align: {
                top: 1, // Alinear al inicio de la sección
              },
              time: 100, // Duración en ms del desplazamiento
            });
          }
        } else {
          onScrollLock(false);
        }
      },
      { threshold: 0.5 }
    );
  
    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }
  
    return () => {
      if (aboutUsRef.current) observer.unobserve(aboutUsRef.current);
    };
  }, [onScrollLock]); */

  
  return (
    <Box
/*       ref={aboutUsRef}
 */      id="aboutus"
      sx={{
        position: 'relative',
        height:  isMediumScreen ? '80vh' : isLargeScreen ? '90vh' : '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundImage: 'url(/assets/11.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: isSmallScreen ? 50 : isLargeScreen ? 30 : 50,
          left: isSmallScreen ? '15%' : isMediumScreen ? '40%' : '60%',
          width: isSmallScreen ? '90%' :isMediumScreen ? '60%' : '40%',
          height: isSmallScreen ? '80%':'90%',
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
        <Swiper
          direction="vertical"
          modules={[Pagination, Mousewheel]}
          pagination={{ clickable: true }}
          mousewheel
          style={{ width: '90%', height: '100%' }}
          onReachBeginning={() => {
            // Habilita el scroll al regresar al inicio
            onScrollLock(false);
          }}
          onReachEnd={() => {
            // Habilita el scroll al llegar al final
            onScrollLock(false);
          }}
        >
          {about.about.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardAbout item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
