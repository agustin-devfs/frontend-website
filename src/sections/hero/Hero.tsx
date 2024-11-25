'use client'
import { Typography, Grid, Box, Container } from '@mui/material';
import { hero } from '@/app/core/utils/contants';

function HeroSection() {
 
  return (
    <Container maxWidth='xl' sx={{margin:"4 auto"}} >
      {/* Texto principal */}
      <Grid container justifyContent="left" alignContent={'left'}>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" component="h1" sx={{
            fontFamily: 'Raleway',
            color:'#353535',
            fontWeight: 400,
            fontSize: { xs: '48px', md: '96px' },
            lineHeight: { xs: '64px', md: '128px' },
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            textAlign: { xs: 'left', md: 'left' }
          }}>
            {hero.prhaseRow1}
          </Typography>
          <Typography variant="h2" component="h1" gutterBottom sx={{
            fontFamily: 'Raleway',
            color:'#353535',
            fontWeight: 400,
            fontSize: { xs: '48px', md: '96px' },
            lineHeight: { xs: '64px', md: '128px' },
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}>
          {hero.prhaseRow2}
          </Typography>
 {/*   </Grid>

        <Grid item xs={12} sx={{ textAlign: { xs: 'center', md: 'center' }, mt: 0, mx: 20, mb: 20 }}>  */}
            {/* Contenedor con imagen de fondo y texto superpuesto */}
            <Box
              sx={{
                position: "relative",  
                width: { xs: 200, md: 1400 }, 
                height: { xs: 100, md: 525 },  
                backgroundImage: 'url(/assets/sonrisaHero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 1,
                margin: '0 1', 
                }}>
          
              <Typography
                variant="h2"
                component="h1"
                noWrap={true}
                gutterBottom
                sx={{
                  position: "absolute",  
                  top: "10%",             
                  left: "50%",            
                  fontFamily: 'Podkova',
                  fontWeight: 500,
                  fontSize: { xs: '24px', md: '34px' },
                  color: '#F6F6F6', 
                  backgroundColor:'#494949' ,
/*                   backgroundColor: '#162D4F',
 */                  padding: { xs: '6px 10px', md: '8px 145px' },
                  borderRadius: '3px',
                  display: 'inline-block',
                  zIndex: 2,  
                }}
              >
                {hero.question}
              </Typography>
            </Box>
          </Grid>

      </Grid> 
    </Container>

  );
}

export default HeroSection;
