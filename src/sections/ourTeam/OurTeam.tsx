'use client'
import { Typography, Card, CardContent, Grid, Divider, Box } from '@mui/material';
import Image from 'next/image';
import { ceo, teamMembers } from '@/app/core/utils/contants';

function TeamSection() {
  return (
 /*    <Container maxWidth='xl' sx={{padding:0, margin:0}}
    > */

    <Grid
      style={{
        backgroundColor: "#BBBBC0",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
      }}
      >
      <Grid
        sx={{ maxWidth: "1200px", margin: "0 auto", pt: "5rem", pb: "4rem" }}
        >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{
            color: '#353535',
            fontWeight: 400,
            fontSize: '96px',
            lineHeight: '96px',
          }}
          >
          Our Team
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
            marginBottom: "3rem",
            display: "flex",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
          >
          <div style={{ width: "30%", padding: "1.5rem" }}>
            <Image
              src="/assets/CEO.png"
              alt="CEO"
              width={200}
              height={200}
              style={{ borderRadius: "10%" }}
              />
          </div>
          <div>
            <CardContent style={{ width: "100%", padding: "3rem" }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 700,
                  fontSize: { xs: '16px', md: '32px' },
                  lineHeight: { xs: '24px', md: '50px' },
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
                  fontSize: { xs: '16px', md: '24px' },
                  lineHeight: { xs: '24px', md: '50px' },
                  color: '#A0730C',
                }}
                >
                {ceo.title}
              </Typography>

              <div style={{ display: "flex", gap: "4rem", marginRight: "4rem" }}>
                <div style={{ flex: 1 }}>
                  <Typography
                    variant="body2"
                    color="#353535"
                    sx={{
                      fontFamily: 'Raleway',
                      fontWeight: 400,
                      fontSize: { xs: '16px', md: '16px' },
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
                      fontSize: { xs: '16px', md: '16px' },
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

            <CardContent style={{ width: "100%", padding: "1.5rem" }}>
              {/* Team Grid */}
              <Grid container spacing={1}>
                {Array.from({ length: Math.ceil(teamMembers.length / 4) }).map(
                  (_, colIndex) => (
                    <Grid item key={colIndex} xs={12} sm={6} md={3}>
                      <div style={{ textAlign: 'left' }}>
                        {teamMembers
                          .slice(colIndex * 4, colIndex * 4 + 4)
                          .map((member, index) => (
                            <div key={index} style={{ marginBottom: '16px' }}>
                              <Typography
                                variant="body1"
                                style={{
                                  fontWeight: 600,
                                  color: '#353535',
                                }}
                                >
                                {member.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{
                                  color: "#A0730C",
                                  fontWeight: 600,
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '2rem',
        }}
        >
        <Typography
          variant="h6"
          component="h6"
          style={{
            maxWidth: 'fit-content',
            backgroundColor: '#162D4F',
            color: '#F6F6F6',
            padding: '8px 50px',
            borderRadius: '6px',
            fontWeight: 600,
            textAlign: 'center',
          }}
          >
          LET&apos;S BUILD TOGETHER!
        </Typography>
      </Box>
    </Grid>
/*           </Container>
 */  );
}

export default TeamSection;
