'use client';
import { Typography, Grid, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { hero } from '@/app/core/utils/contants';

function HeroSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Pantallas pequeñas
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); // Pantallas medianas
  const isNormalScreen = useMediaQuery(theme.breakpoints.down('lg')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 

  return (
    <Container maxWidth="xl" sx={{ margin: isLargeScreen? '0rem auto': '2rem auto' }}>
      {/* Texto principal */}
      <Grid container justifyContent="left" alignContent="left">
        <Grid item xs={12} md={12} lg={12}>
          <Box
            sx={{
              marginLeft: isNormalScreen? '15%' : isLargeScreen? '12%' : '7%',
              minHeight: isSmallScreen ? '180px' : isMediumScreen ? '140px' : isNormalScreen? '160px': isLargeScreen? '162px':'180px',
              minWidth: isSmallScreen ? '200px' : isMediumScreen ?'90%' : isLargeScreen? '90%': '90%',
            }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span style="
                      font-family: 'Raleway';
                      color: #353535;
                      font-weight: 400;
                      font-size: ${isSmallScreen ? '36px' : isMediumScreen ? '55px' : isNormalScreen? '65px': isLargeScreen? '68px':'96px'};
                      line-height: ${isSmallScreen ? '40px' : '64px'};
                      text-underline-position: from-font;
                      text-decoration-skip-ink: none;
                      text-align: left;
                    ">We Develop Ideas into</span>`
                  )
                  .callFunction(() => {
                    const typewriter2 = document.getElementById('typewriter2');
                    if (typewriter2) {
                      typewriter2.dispatchEvent(new Event('startTypewriter'));
                    }
                  })
                  .start();
              }}
            />
            <div id="typewriter2" style={{ display: 'inline' }}>
              <Typewriter
                onInit={(typewriter) => {
                  const typewriter2 = document.getElementById('typewriter2');
                  if (typewriter2) {
                    typewriter2.addEventListener(
                      'startTypewriter',
                      () => {
                        typewriter
                          .typeString(
                            `<span style="
                              font-family: 'Raleway';
                              color: #353535;
                              font-weight: 400;
                              font-size: ${isSmallScreen ? '36px' : isMediumScreen ? '55px' : isNormalScreen? '65px': isLargeScreen? '68px':'96px'};
                              line-height: ${isSmallScreen ? '40px' : '90px'};
                              text-align: left;
                            ">Thriving Digital Experiences</span>`
                          )
                          .start();
                      },
                      { once: true }
                    );
                  }
                }}
              />
            </div>
          </Box>
             {/*     </Grid>

           <Grid item xs={12}> */}
          <Box
            sx={{
              
              position: 'relative',
              width: isSmallScreen ? 320 : isMediumScreen ? 690 : isNormalScreen? 950: isLargeScreen? 970: 1250,
              height: isSmallScreen ? 120 : isMediumScreen ? 260 : isNormalScreen? 350: isLargeScreen? 360 :470,

              backgroundImage: 'url(/assets/sonrisaHero.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1,
             margin: isMediumScreen ? '0 0':'0 auto',
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              noWrap
              gutterBottom
              sx={{
                position: 'absolute',
                top: '10%',
                left: isSmallScreen ? '10%': isMediumScreen ? '55%':isNormalScreen? '45%': isLargeScreen? '45%': '50%',
                fontFamily: 'Podkova',
                fontWeight: 500,
                fontSize: isSmallScreen ? '18px' : isMediumScreen ?'24px': isNormalScreen? '30px': isLargeScreen? '30px':'36px',
                color: '#F6F6F6',
                backgroundColor: '#162D4F',
                padding: isSmallScreen ? '6px 15px' : isMediumScreen ? '6px 10px' :isNormalScreen?  '6px 60px': isLargeScreen? '6px 80px':'6px 130px',
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
