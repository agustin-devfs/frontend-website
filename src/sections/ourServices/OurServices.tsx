import { Button, Card, CardContent, CardHeader, Typography, Box, Container, Grid, Divider, CardMedia } from "@mui/material";


export default function Services() {
  return (
    <Box py={8} px={4}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Our Services
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card elevation={0} style={{ textAlign: 'center' }}>
          
            <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        sx={{ cursor: "pointer" }}
        py={2}
      >
        <img
          src={"/public/appIcon.svg"}
          height="40px"
          width="100%"
          alt="App"
           loading="lazy"
        />
      </Box>
            
            <Divider style={{ backgroundColor: "#A0730C",marginTop: "5px", padding:"1px", margin: "25px",height:'2px', width: '80%' }} />

              <CardHeader title="Apps" style={{ fontWeight: 'bold' }} />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Development of Native and hybrid Mobile Apps for iOS & Android devices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={0} style={{ textAlign: 'center' }}>

              "LOGO"
              <Divider style={{ backgroundColor: "#A0730C",marginTop: "5px", padding:"1px", margin: "25px",height:'2px', width: '80%' }} />

              <CardHeader title="Web Platforms" style={{ fontWeight: 'bold' }} />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Creative & intuitive UX, Backend APIs, Databases & Cloud Services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={0} style={{ textAlign: 'center' }}>
            "LOGO"
            <Divider style={{ backgroundColor: "#A0730C",marginTop: "5px", padding:"1px", margin: "25px",height:'2px', width: '80%' }} />

              <CardHeader title="Hire our people" style={{ fontWeight: 'bold' }} />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Our team is composed of experts in all tech stacks and know how to succeed.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Button variant="contained" color="primary" style={{ backgroundColor: '#333', color: '#fff', borderRadius:"25px", padding: "6px 110px" }}>
            Book a call
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
