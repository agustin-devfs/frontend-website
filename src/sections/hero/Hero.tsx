import { Typography, Grid, Box } from '@mui/material';
import Image from 'next/image';
import { hero } from '@/app/core/utils/contants';

function HeroSection() {
  return (
    <Box sx={{
      color: "black",
      margin: "0 auto",
      padding: { xs: "1rem 1rem", md: "0.5rem 2rem" },
      position: "relative",
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
        <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 ,ml:100 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{
            fontWeight: 500,
            fontSize: { xs: '24px', md: '34px' },
            backgroundColor: '#f3ff73',
            color: 'black',
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
            src={hero.imageBacground}
            alt="SmileIcon"
            loading="lazy"
            width={1400}
            height={500}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
