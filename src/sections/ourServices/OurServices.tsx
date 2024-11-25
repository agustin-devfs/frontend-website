
import CardService from '@/components/cards/cardService/CardService';
import { Grid, Box, Typography, Container, Button } from '@mui/material';
import {servicesData, service } from '@/app/core/utils/contants'

const ServicesSection = () => (

  
  <Container maxWidth='xl' >

    <Typography variant="h2" component="h1"  
    sx={{mt:15, mb:4 , }}
    style={{fontFamily: 'Raleway',color: '#06050F', fontWeight: 400, fontSize: '96px', lineHeight: '96px', textAlign:'center'}}>
      {service.title}
    </Typography>
    
    <Grid container spacing={12} >
         {servicesData.map((service, index) => (
        <Grid item xs={12} md={4} key={index}>
          <CardService
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
          />
        </Grid>
      ))}
    </Grid>
          <Box mt={0} mb={10} alignContent= "center" textAlign="center">
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
                  color: '#333',            // Texto oscuro en hover
                },
              }}
            >
              {service.button}
            </Button>
              </Box>

      </Container>
        
);

export default ServicesSection;

