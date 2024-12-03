import CardService from '@/components/cards/cardService/CardService';
import { Grid, Box, Typography, Container, Button, useMediaQuery, useTheme } from '@mui/material';
import { servicesData, service } from '@/app/core/utils/contants';

const ServicesSection = () => {
  const theme = useTheme(); // Hook dentro del cuerpo del componente
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 

  return (
    <Container maxWidth="xl" sx={{ mt: isSmallScreen? 4 :isLargeScreen? 12: 12, mb: isLargeScreen? 8:14 }}>
      {/* Título */}
      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Typography 
            variant="h2"
            component="h1"
            sx={{
              mt:isLargeScreen? 0: 10,
              fontFamily: 'Raleway',
              color: '#06050F',
              fontWeight: 400,
              fontSize: isSmallScreen ? '48px' : isMediumScreen ? '68px' : isLargeScreen? '80px': '96px',
              lineHeight: isSmallScreen ? '56px' : '96px',
              textAlign: 'center',
            }}
          >
            {service.title}
          </Typography>
        </Grid>
      </Grid>

      {/* Tarjetas */}
      <Grid container spacing={isMediumScreen? 1: 4} justifyContent="center">
        {servicesData.map((service, index) => (
          <Grid item xs={9} sm={5} md={4} key={index}>
            <CardService
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          </Grid>
        ))}
      </Grid>

      {/* Botón */}
      <Box mt={isLargeScreen? 1 : 10} textAlign="center">
        <Button
          href="https://meetings.hubspot.com/david3299"
          variant="contained"
          color="primary"
          sx={{
            fontSize: '18px',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '25px',
            padding: isSmallScreen ? '12px 50px' : '18px 100px',
            border: '1px solid black',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: '#eee', // Fondo claro en hover
              color: '#333', // Texto oscuro en hover
            },
          }}
        >
          {service.button}
        </Button>
      </Box>
    </Container>
  );
};

export default ServicesSection;
