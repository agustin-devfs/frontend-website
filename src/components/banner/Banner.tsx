'use client'

import Box from '@mui/material/Box'
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

export default function Banner() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantallas pequeñas
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); // Pantallas medianas
  const isNormalScreen = useMediaQuery(theme.breakpoints.down('lg')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 

  return (
    <Box
      sx={{
        bgcolor: '#353535',
        color: 'white',
        width: '100%',
        height: isSmallScreen? '25vh' : '40vh',
        padding: isSmallScreen? '8vh 6vw':'15vh 15vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
          <Grid container alignItems="center">
            <Typography
              sx={{
                fontFamily: 'Raleway',
                fontSize: isSmallScreen? '25px' :isMediumScreen? '40px' : isNormalScreen? '50px': isLargeScreen? '54px':'64px',
                fontWeight: 600,
                color: '#A07C0D',
                lineHeight: 1.1,
                display: 'inline-block', 
              }}
            >
             {'Ready to build'}
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Raleway',
                fontSize: isSmallScreen? '25px' : isMediumScreen? '40px' : isNormalScreen? '50px':isLargeScreen? '54px':'64px',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.1,
                display: 'inline-block',  
                textDecoration: 'underline',
                textDecorationColor: '#FFFFFF',
                textUnderlineOffset: '5px',
                textDecorationThickness: '3px',
                textDecorationSkipInk: 'none',
                marginLeft: '8px',  // Espaciado entre textos si es necesario
              }}
            >
              {'together?'}
            </Typography>


        {/* Icono de sonrisa */}
        <Grid item sm={1} md={1} lg={1}>
          <Image
            src="/assets/sonrisa pequeña.png"
            alt="Sonrisa"
            width={isSmallScreen? 50 :96}
            height={isSmallScreen?20 :38}
            style={{ marginLeft: '10px' }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
