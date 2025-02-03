'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { SetStateAction, useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import useTestimonialList from './fetchTestimonials';

export default function Component() {
  const theme = useTheme(); 
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 


  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia el índice actual basado en el SwiperSlide activo
  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setCurrentIndex(swiper.realIndex); // swiper.realIndex obtiene el índice del slide actual
  };



  const { isLoading, testimonials } = useTestimonialList(); // Obtiene los datos de la API

  if (isLoading) return <div>Loading...</div>;

  return (

    <Box sx={{ 
      color: 'white',
      position: 'relative',
      py: isSmallScreen? 10:8,
      px: isSmallScreen? 1: 4,
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
        onSlideChange={handleSlideChange} 
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ 
              maxWidth: isSmallScreen ? '90%' : '70%',
              mx: 'auto',
              px: { xs: 2, md: 2 },
              pb: { xs: 2, md: 6 },
            }}>
         
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
          top: isSmallScreen? '91%' : '80%',
          left: isSmallScreen? '30%' : '80%',
          color: 'transparent',
          zIndex: 2,
          backgroundColor: 'grey',
          width: '50px', 
          height: '50px', 
          display: 'initial', 
 
        }}
      >
        <ChevronLeft  sx={{color: "#F9F9F9", }}/>
      </IconButton>
      
      <IconButton 
        className="swiper-button-next"
        sx={{ 
          position: 'absolute',
          top: isSmallScreen? '91%' : '80%',
          right:isSmallScreen? '25%' : isMediumScreen? '5%': isLargeScreen? '8%':'12%',
          color: 'transparent',
          zIndex: 2,
          backgroundColor: 'grey',
          width: '50px', 
          height: '50px', 
          display: 'initial', 

        }}
      >
        <ChevronRight sx={{ color: "#F9F9F9",}} /> 
      </IconButton>
    </Box>
  );
}
