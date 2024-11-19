import { FC } from 'react';
import { Card, Box, Divider, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  }
  
  const CardService: FC<ServiceCardProps> = ({ title, description, imageSrc, imageAlt }) => (
    <Card elevation={0} style={{textAlign: 'center', height:"36rem",width:"25rem", backgroundColor:"#EDEDED"}}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        sx={{ cursor: "pointer" }}
        pt={4}
      >
        <Image
          src={imageSrc}
          width={150}
          height={150}
          alt={imageAlt}
          loading="lazy"
        />
      </Box>
      <Divider style={{ backgroundColor: "#A0730C", marginTop: "5px", padding: "1px", margin: "25px", height: '2px', width: '90%' }} />
    
        <Typography sx={{
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: { xs: '36px', md: '48px'},
            lineHeight: { xs: '26px', md: '40px' },

          }}>
            {title}
          </Typography>

      <CardContent>
        <Typography 
        style={{ color: '#353535', fontWeight: 500, fontSize: '24px', lineHeight: '40px', textAlign:'center' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );

  export default CardService;