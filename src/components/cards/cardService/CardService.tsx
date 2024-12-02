import { FC } from 'react';
import { Card, Box, Divider, CardContent, Typography, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const CardService: FC<ServiceCardProps> = ({ title, description, imageSrc, imageAlt }) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); 
  const isNormalScreen = useMediaQuery(theme.breakpoints.down('lg')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 

  return (
    <Card
      elevation={0}
      style={{
        textAlign: 'center',
        height: isMediumScreen ? '22rem' : isNormalScreen? '25rem': isLargeScreen? '26rem':'30rem',
        width: isMediumScreen ? '18rem' : isNormalScreen? '20rem': isLargeScreen? '25rem':'30rem',
        backgroundColor: "#EDEDED",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        sx={{ cursor: "pointer" }}
        pt={isLargeScreen? 2: 10}
      >
        <Image
          src={imageSrc}
          width={isMediumScreen? 100: isNormalScreen? 110: 160}
          height={isMediumScreen? 100: isNormalScreen? 110: 160}
          alt={imageAlt}
          loading="lazy"
        />
      </Box>
      <Divider
        style={{
          backgroundColor: "#A0730C",
          padding: "1px",
          margin: '5% auto', 
          height: '2px',
          width: isMediumScreen? '70%' : '90%',
          
        }}
      />
      <Typography
        sx={{
          fontFamily: 'Raleway',
          fontWeight: 700,
          fontSize: isMediumScreen ? '32px' : isNormalScreen? '38px': isLargeScreen? '42px':'46px',
          lineHeight: isMediumScreen ? '36px' : isNormalScreen? '36px': isLargeScreen? '38px':'42px',
        }}
      >
        {title}
      </Typography>
      <CardContent>
        <Typography
          style={{
            color: '#353535',
            fontWeight: 500,
            fontSize: isMediumScreen ? '20px' :isLargeScreen? '24px': '26px',
            lineHeight: '40px',
            textAlign: 'center',
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardService;
