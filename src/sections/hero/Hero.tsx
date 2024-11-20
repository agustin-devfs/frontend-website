'use client'
import { Typography, Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { hero } from '@/app/core/utils/contants';

function HeroSection() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const widthImg = isMdUp ? 1400 : 200;
  const heightImg = isMdUp ? 525 : 100;

  return (
    <Box sx={{
      color: "black",
      position: "relative",
      margin: "0 auto",
    }}>
      {/* Texto principal */}
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} md={10} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h2" component="h1" sx={{
            fontFamily: 'Raleway',
            fontWeight: 400,
            fontSize: { xs: '48px', md: '96px' },
            lineHeight: { xs: '64px', md: '128px' },
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}>
            {hero.prhaseRow1}
          </Typography>
          <Typography variant="h2" component="h1" gutterBottom sx={{
            fontFamily: 'Raleway',
            fontWeight: 400,
            fontSize: { xs: '48px', md: '96px' },
            lineHeight: { xs: '64px', md: '128px' },
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}>
          {hero.prhaseRow2}
          </Typography>
        </Grid>

        {/* Botón de llamado a la acción */}
        <Grid item xs={12} sx={{ textAlign: { xs: 'center', md: 'right' } , mt: 2, mx:20 }}>

          <Typography variant="h2" component="h1" gutterBottom sx={{
             fontFamily: 'Podkova',
            fontWeight: 500,
            fontSize: { xs: '24px', md: '34px' },
            color: '#353535',
            backgroundColor: '#E8FE74',
            padding: { xs: '6px 30px', md: '8px 50px' },
            borderRadius: '6px',
            display: 'inline-block',
          }}>
            {hero.question}
          </Typography>
        </Grid>

        {/* Imagen de fondo */}
        <Grid item xs={12} sx={{
          position: "absolute",
          top: { xs: "80%", md: "70%" },
          left: "10%",
          zIndex: -1,
          overflow: "hidden",
        }}>
          <Image
            src={'/assets/Vector lucinda sonsrisa gigante.png'}
            alt="SmileIcon"
            loading="lazy"
            width={widthImg}
            height={heightImg}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
