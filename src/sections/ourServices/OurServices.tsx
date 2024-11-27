import CardService from '@/components/cards/cardService/CardService';
import { Grid, Box, Typography, Container, Button } from '@mui/material';
import { servicesData, service } from '@/app/core/utils/contants';

const ServicesSection = () => (
  <Container maxWidth="xl" sx={{ mt: 12, mb: 10 }}>
    {/* Título */}
    <Grid container justifyContent="center" sx={{mb: 12}}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          component="h1"
          style={{
            fontFamily: 'Raleway',
            color: '#06050F',
            fontWeight: 400,
            fontSize: '96px',
            lineHeight: '96px',
            textAlign: 'center',
          }}
        >
          {service.title}
        </Typography>
      </Grid>
    </Grid>

    {/* Tarjetas */}
    <Grid container spacing={12} justifyContent="center">
      {servicesData.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
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
    <Box mt={1} textAlign="center">
      <Button
        href="https://meetings.hubspot.com/david3299"
        variant="contained"
        color="primary"
        sx={{
          fontSize: '24px',
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: '25px',
          padding: '18px 100px',
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

export default ServicesSection;
