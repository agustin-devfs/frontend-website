'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { testimonials } from "@/app/core/utils/contants/index"
import Image from 'next/image'
import { SetStateAction, useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

export default function Component() {
  const theme = useTheme(); 
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 


  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia el índice actual basado en el SwiperSlide activo
  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setCurrentIndex(swiper.realIndex); // swiper.realIndex obtiene el índice del slide actual
  };

  return (

    <Box sx={{ 
      color: 'white',
      position: 'relative',
      py: 8,
      px: 4,
      // Cambia el color de fondo basado en el índice actual
      bgcolor: currentIndex % 2 === 0 ? '#353535' : '#A0730C', 
    }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={50}
        onSlideChange={handleSlideChange} // Maneja el cambio de slide
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ 
              maxWidth: '70%',
              mx: 'auto',
              px: { xs: 2, md: 2 },
            }}>
              <Box sx={{ mb: 4 }}>
                {index % 2 === 0 ? (
                  
                  <Image 
                    src="/assets/quoteblancoDorado.svg" 
                    alt="quote"
                    loading="lazy" 
                    width={110} 
                    height={40} 
                    style={{ borderRadius: "10%" }} 
                  />
                ) : (
                  <Image 
                    src="/assets/quoteblanco.svg"
                    alt="quote"
                    loading="lazy" 
                    width={110} 
                    height={40} 
                    style={{ borderRadius: "10%" }} 
                  />
                )}
              </Box>

              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 3,
                  fontSize: { xs: '1.1rem', md: '22px' },
                  lineHeight: 1.6,
                  color: index % 2 === 0 ? '#FFFFFF': '#162D4F',

                }}
              >
                {testimonial.quote}
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: index % 2 === 0 ? '#FFFFFF': '#162D4F',
                  fontWeight: 700,
                  mb: 0.5,
                  fontFamily: 'Raleway',
                  fontSize: '16px',
                  lineHeight: '1.6',

                }}
              >
                {testimonial.author}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: index % 2 === 0 ? '#FFFFFF': '#162D4F',
                  fontWeight: 600,
                  mb: 0.5,
                  fontFamily: 'Raleway',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                {testimonial.position}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <IconButton 
        className="swiper-button-prev"
        sx={{ 
          position: 'absolute',
          top: '80%',
          left: '80%',
          transform: 'translateY(-50%)',
          color: 'transparent',
          zIndex: 2,
          backgroundColor: 'grey',
          width: '50px', 
          height: '50px', 
          display: { xs: 'none', sm: 'initial' }
        }}
      >
        <ChevronLeft  sx={{color: "#F9F9F9"}}/>
      </IconButton>
      
      <IconButton 
        className="swiper-button-next"
        sx={{ 
          position: 'absolute',
          top: '80%',
          right: isMediumScreen? '5%': isLargeScreen? '8%':'12%',
          transform: 'translateY(-50%)',
          color: 'transparent',
          zIndex: 2,
          backgroundColor: 'grey',
          width: '50px', 
          height: '50px', 
          display: { xs: 'none', sm: 'initial' }
        }}
      >
        <ChevronRight sx={{ color: "#F9F9F9"}} /> 
      </IconButton>
    </Box>
  );
}
