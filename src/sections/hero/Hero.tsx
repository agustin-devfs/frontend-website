'use client'
import { Typography, Grid, Box, Container } from '@mui/material';
import { hero } from '@/app/core/utils/contants';
 import Typewriter from 'typewriter-effect';
function HeroSection() {
 
  return (
    <Container maxWidth='xl' sx={{margin:"4 auto"}} >
      {/* Texto principal */}
      <Grid container justifyContent="left" alignContent={'left'}>
        <Grid item xs={12} md={12}>
            <Box sx={{ 
               minHeight: { xs: '120px', md: '200px' }, 
              minWidth: { xs: '300px', md: '90%' },  
              }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `<span style="
                        font-family: 'Raleway';
                        color: #353535;
                        font-weight: 400;
                        font-size: 96px;
                        line-height: 64px;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                        text-align: left;
                      ">We Develop Ideas into</span>`
                    )
                    .callFunction(() => {
                      // Dispara el evento personalizado
                      const typewriter2 = document.getElementById("typewriter2");
                      if (typewriter2) {
                        typewriter2.dispatchEvent(new Event("startTypewriter"));
                      }
                    })
                    .start();
                }}
              />

              <div id="typewriter2" style={{ display: "inline" }}>
                <Typewriter
                  onInit={(typewriter) => {
                    const typewriter2 = document.getElementById("typewriter2");
                    if (typewriter2) {
                      // Usa `once: true` para que solo se ejecute una vez
                      typewriter2.addEventListener(
                        "startTypewriter",
                        () => {
                          typewriter
                            .typeString(
                              `<span style="
                                font-family: 'Raleway';
                                color: #353535;
                                font-weight: 400;
                                font-size: 96px;
                                line-height: 128px;
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
/*                   backgroundColor:'#494949' ,
 */                   backgroundColor: '#162D4F',
                   padding: { xs: '6px 10px', md: '8px 145px' },
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
