
import CardService from '@/components/cards/cardService/CardService';
import { Grid, Box, Typography, Container, Button } from '@mui/material';
import {servicesData, service } from '@/app/core/utils/contants'

const ServicesSection = () => (

   <Box py={10} px={4} mt={75} mb={30}>
   <Container maxWidth="md">

    <Typography variant="h2" component="h1" gutterBottom style={{ color: '#06050F', fontWeight: 400, fontSize: '96px', lineHeight: '96px', textAlign:'center' }}>
      {service.title}
    </Typography>
    
    <Grid container spacing={4}>
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
    </Container>

    <Box mt={4} textAlign="center">
          <Button           
                  href="https://meetings.hubspot.com/david3299"
                  variant="contained" color="primary" style={{ backgroundColor: '#333', color: '#E8FE74', borderRadius:"25px", padding: "6px 110px" }}>
          {service.button}
          </Button>
        </Box>
        
  </Box>
);

export default ServicesSection;

