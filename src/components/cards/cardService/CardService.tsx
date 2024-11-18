import { FC } from 'react';
import { Card, Box, Divider, CardHeader, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  }
  
  const CardService: FC<ServiceCardProps> = ({ title, description, imageSrc, imageAlt }) => (
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

  export default CardService;