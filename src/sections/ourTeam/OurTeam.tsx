'use client'
import { Typography, Card, CardContent, Grid, Divider, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { ceo, teamMembers } from '@/app/core/utils/contants';

function TeamSection() {
  const theme = useTheme(); // Hook dentro del cuerpo del componente
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 
  return (

 <Grid container
      style={{
        backgroundColor: "#BBBBC0",
        borderBottomLeftRadius: isSmallScreen? "1%": isMediumScreen? '10%':"100%",
        borderBottomRightRadius: isSmallScreen? "1%": isMediumScreen? '10%':"100%",
      }}
      >

      <Grid
        sx={{ maxWidth: "1200px", margin: "0 auto", pt: isLargeScreen? '1rem':"2rem", pb: isLargeScreen? '0rem':"0rem" }}
        >
        <Typography
          variant="h2"
          component="h1"
          style={{
            color: '#353535',
            fontWeight: 400,
            fontSize: isSmallScreen ? '48px' : isMediumScreen ? '68px' : isLargeScreen? '80px': '96px',
            lineHeight: isSmallScreen ? '56px' : '96px',
          }}
          >
          {'Our Team'}
        </Typography>

        {/* CEO Section */}
        <Card
            variant="outlined"
            sx={{
              color: 'black',
              backgroundColor: "#BBBBC0",
              border: "#eaeaea",
            }}
            style={{
              marginBottom: isLargeScreen ? '1.5rem' : "3rem",
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row", // Apila los elementos en pantallas pequeñas
              alignItems: isSmallScreen ? "center" : "flex-start", // Centra los elementos en pantallas pequeñas
              borderBottomLeftRadius: isSmallScreen ? "2%" : "50%",
              borderBottomRightRadius:  isSmallScreen ? "2%" : "50%",
            }}
          >
            <div style={{ width: isSmallScreen ? "100%" : "30%", padding: "1.5rem", textAlign: isSmallScreen ? "center" : "left" }}>
              <Image
                src="/assets/CEO1.png"
                alt="CEO"
                width={isLargeScreen ? 150 : 200}
                height={isLargeScreen ? 150 : 200}
                style={{ borderRadius: "10%" }}
              />
            </div>
            <div style={{ width: isSmallScreen ? "100%" : "70%" }}>
              <CardContent style={{ width: "100%", padding: isSmallScreen ? "1rem" : "2.5rem", }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 700,
                    fontSize: { xs: '16px', md: '26px', lg: '25px', xl: '32px' },
                    lineHeight: { xs: '24px', md: '40px', lg: '42px', xl: '50px' },
                    color: '#353535',
                  }}
                >
                  {ceo.owner}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 600,
                    fontSize: { xs: '16px', md: '26px', lg: '25px', xl: '32px' },
                    lineHeight: { xs: '24px', md: '40px', lg: '42px', xl: '50px' },
                    color: '#A0730C',
                  }}
                >
                  {ceo.title}
                </Typography>
                <div style={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", gap: "1rem", marginRight: "4rem" }}>
                  <div style={{ flex: 1, marginBottom: isSmallScreen ? "0rem" : "0" }}>
                    <Typography
                      variant="body2"
                      color="#353535"
                      sx={{
                        fontFamily: 'Raleway',
                        fontWeight: 400,
                        fontSize: { xs: '16px', md: '18px', lg: '18px', xl: '24px' },
                      }}
                    >
                      {ceo.text1}
                    </Typography>
                  </div>
                  <div style={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      color="#353535"
                      sx={{
                        fontFamily: 'Raleway',
                        fontWeight: 400,
                        fontSize: { xs: '16px', md: '18px', lg: '18px', xl: '24px' },
                      }}
                    >
                      {ceo.text2}
                    </Typography>
                  </div>
                </div>
              </CardContent>
          

            <Divider
              style={{
                backgroundColor: '#fffff',
                height: '4px',
                marginLeft: "2rem",
                width: '90%',
              }}
              />

            <CardContent style={{ width: "100%", padding: isSmallScreen ? "1rem 8rem" : "1.5rem" }}>
              {/* Team Grid */}
              <Grid container spacing={1}>
                {Array.from({ length: Math.ceil(teamMembers.length / 4) }).map(
                  (_, colIndex) => (
                    <Grid item key={colIndex} xs={12} sm={6} md={3}>
                      <div style={{ textAlign: 'left' }}>
                        {teamMembers
                          .slice(colIndex * 4, colIndex * 4 + 4)
                          .map((member, index) => (
                            <div key={index} style={{ marginBottom: isLargeScreen? '1rem':'1rem' }}>
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 600,
                                  color: '#353535',
                                  fontSize: { xs: '12px', md: '14px', lg: '14px', xl: '16px' },

                                }}
                                >
                                {member.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#A0730C",
                                  fontWeight: 600,
                                  fontSize: { xs: '12px', md: '14px', lg: '14px', xl: '16px' },
                                }}
                                >
                                {member.role}
                              </Typography>
                            </div>
                          ))}
                      </div>
                    </Grid>
                  )
                )}
              </Grid>
            </CardContent>
          </div>
        </Card>
      </Grid>


    </Grid>
  );
}

export default TeamSection;
