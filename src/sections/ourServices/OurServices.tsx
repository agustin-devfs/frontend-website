
import CardService from '@/components/cards/cardService/CardService';
import { Grid, Box, Typography, Container, Button } from '@mui/material';
import {servicesData, service } from '@/app/core/utils/contants'

const ServicesSection = () => (

  
  <Container maxWidth='xl'>
     <Box py={6} px={1} mt={65} mb={30}> 

    <Typography variant="h2" component="h1" gutterBottom style={{ color: '#06050F', fontWeight: 400, fontSize: '96px', lineHeight: '96px', textAlign:'center' }}>
      {service.title}
    </Typography>
    
    <Grid container spacing={20}>
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

    <Box mt={4} textAlign="center">
          <Button           
                  href="https://meetings.hubspot.com/david3299"
                  variant="contained" color="primary" style={{ fontSize:"24px" ,backgroundColor: '#333', color: '#fff', borderRadius:"25px", padding: "18px 100px" }}>
          {service.button}
          </Button>
        </Box>
        </Box>
                    </Container>
        
);

export default ServicesSection;

