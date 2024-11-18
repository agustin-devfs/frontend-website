'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import {testimonials} from "@/app/core/utils/contants/index"
import Image from 'next/image';

export default function Component() {
  
  return (
    <Box sx={{ 
      bgcolor: '#353535',
      color: 'white',
      position: 'relative',
      py: 8,
      px: 4
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
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              px: { xs: 2, md: 4 }
            }}>
              <Box sx={{ mb: 4 }}>
              
                <Image src="/quote.png" alt="quote"
          loading="lazy"width={110} height={40} style={{borderRadius:"10%"}} />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 3,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6
                }}
              >
                {testimonial.quote}
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: '#D1BB8A',
                  fontWeight: 'bold',
                  mb: 0.5
                }}
              >
                {testimonial.author}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                    color: '#D1BB8A',
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
        }}
      >
        <ChevronLeft  sx={{color: "#E8FE74",marginLeft:"20px"}}/>
      </IconButton>
      
      <IconButton 
        className="swiper-button-next"
        sx={{ 
          position: 'absolute',
          top: '80%',
          right: '12%',
          transform: 'translateY(-50%)',
          color: 'transparent',
          zIndex: 2,
          backgroundColor: 'grey',
          width: '50px', 
          height: '50px', 
          
        }}
      >
  <ChevronRight sx={{ color: "#E8FE74",marginLeft:"25px"}} /> 
  </IconButton>
    </Box>
  )
}

