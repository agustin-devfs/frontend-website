'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Mousewheel } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { about } from '@/app/core/utils/contants';

import 'swiper/css';
import 'swiper/css/pagination';
import CardAbout from '@/components/banner/swiperAbout/CardAbout';

export default function AboutUsSection() {
  const theme = useTheme(); 
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 

  
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden'; // Bloquea el scroll del body
      document.documentElement.style.overflow = 'hidden'; // Bloquea el scroll del html
    } else {
      document.body.style.overflow = ''; // Restaura el scroll del body
      document.documentElement.style.overflow = ''; // Restaura el scroll del html
    }
    return () => {
      document.body.style.overflow = ''; // Asegura desbloquear al desmontar
      document.documentElement.style.overflow = ''; // Asegura desbloquear al desmontar
    };
  }, [scrollLocked]);
  

  return (
    <Box
      id="aboutus"
      sx={{
        position: 'relative',
        height: isMediumScreen? '80vh': isLargeScreen? '90vh':'100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundImage: 'url(/assets/11.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Contenedor del carrusel */}
      <Box
        sx={{
          position: 'absolute',
          top: isLargeScreen? 30: 50,
          left: isMediumScreen? '40%':'60%',
          width: isMediumScreen? '60%':'40%',
          height: '90%',
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
          onSlideChange={(swiper) => {
            // Bloquea el scroll al entrar en el Swiper
            if (swiper.activeIndex > 0 && swiper.activeIndex < about.about.length - 1) {
              setScrollLocked(true);
            }
          }}
          onReachBeginning={() => {
            // Habilita el scroll al regresar al inicio
            setScrollLocked(false);
          }}
          onReachEnd={() => {
            // Habilita el scroll al llegar al final
            setScrollLocked(false);
          }}
        >
          {about.about.map((item, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <CardAbout item={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
