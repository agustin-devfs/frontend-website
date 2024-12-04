import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

type AboutItem = {
  title: string;
  content: string[];
};

interface CardAboutProps {
  item: AboutItem;
}

const CardAbout: React.FC<CardAboutProps> = ({ item }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          gap: 2,
          mb: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Raleway',
            fontWeight: 400,
            fontSize: { xs: '30px', sm: '30px', md: '36px', lg: '36px', xl: '48px' },
            color: 'black',
            textAlign: 'left',
          }}
        >
          {item.title}
        </Typography>
        <Image
          src={'/assets/sonrisa pequeña.png'}
          alt="Sonrisa"
          width={isSmallScreen ? 54 : isMediumScreen ? 72 : isLargeScreen ? 65 : 96}
          height={isSmallScreen ? 21 : isMediumScreen ? 28 : isLargeScreen ? 25 : 38}
        />
      </Box>
      {item.content.map((text: string, index: number) => (
        <Typography
          gutterBottom
          key={index}
          variant="body1"
          sx={{
            fontFamily: 'Raleway',
            fontWeight: 400,
            fontSize: { xs: '14px', sm: '16px', md: '20px', lg: '20px', xl: '28px' },
            lineHeight: { xs: '24px', sm: '30px', md: '30px', lg: '35px', xl: '44px' },
            color: 'black',
            textAlign: 'left',
            padding: '0 20px',
          }}
          dangerouslySetInnerHTML={{ __html: text }} // Procesa el HTML enriquecido
        />
      ))}
    </>
  );
};

export default CardAbout;
