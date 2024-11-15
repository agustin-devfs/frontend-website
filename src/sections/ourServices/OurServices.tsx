import { FC } from 'react';
import { Grid, Card, Box, Divider, CardHeader, CardContent, Typography, Container, Button } from '@mui/material';
import Image from 'next/image';



const servicesData = [
  {
    title: "Apps",
    description: "Development of Native and hybrid Mobile Apps for iOS & Android devices.",
    imageSrc: "/appIcon.svg",
    imageAlt: "App",
  },
  {
    title: "Web Platforms",
    description: "Creative & intuitive UX, Backend APIs, Databases & Cloud Services.",
    imageSrc: "/webIcon.svg", 
    imageAlt: "Web Platforms",
  },
  {
    title: "Hire our people",
    description: "Our team is composed of experts in all tech stacks and know how to succeed.",
    imageSrc: "/hire.png", 
    imageAlt: "Hire our people",
  },
];

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, imageSrc, imageAlt }) => (
  <Card elevation={0} style={{ textAlign: 'center', height:"400px", backgroundColor:"#EDEDED" }}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
      sx={{ cursor: "pointer" }}
      py={2}
    >
      <Image
        src={imageSrc}
        width={150}
        height={150}
        alt={imageAlt}
        loading="lazy"
      />
    </Box>
    <Divider style={{ backgroundColor: "#A0730C", marginTop: "5px", padding: "1px", margin: "25px", height: '2px', width: '80%' }} />
    <CardHeader title={title} style={{ fontWeight: 'bold' }} />
    <CardContent>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const ServicesSection = () => (

   <Box py={8} px={4} mt={55}>
   <Container maxWidth="md">
    <Typography variant="h2" component="h1" gutterBottom style={{ color: '#06050F', fontWeight: 400, fontSize: '96px', lineHeight: '96px' }}>
      Our Services
    </Typography>
    
    <Grid container spacing={4}>
      {servicesData.map((service, index) => (
        <Grid item xs={12} md={4} key={index}>
          <ServiceCard
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
          <Button variant="contained" color="primary" style={{ backgroundColor: '#333', color: '#E8FE74', borderRadius:"25px", padding: "6px 110px" }}>
            Book a call
          </Button>
        </Box>
        
  </Box>
);

export default ServicesSection;

