'use client';
import { AppBar, Container, Link, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { bars } from '@/app/core/utils/constants';

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 


  return (
    <AppBar position="static" sx={{ bgcolor: '#EDEDED', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1, md: 1, lg: 0} }}>
          {/* Logo Section */}
          <Stack direction="row">
            <Link
              href={bars.LogoIcon}
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
             <Image
                src={"/images/LogoIcon.png"}
                alt="LogoIcon"
                loading="lazy"
                width={isSmallScreen ? 180 : isMediumScreen ? 180 : isLargeScreen ? 200 : 220} 
                height={isSmallScreen ? 35 :  isMediumScreen ? 80 : isLargeScreen ? 100 :100} 
                style={{ borderRadius: '10%', 
                 marginTop: isSmallScreen ? '1.5rem' :isMediumScreen ? '12%': isLargeScreen ? '10%': '8%',
              }}
              /> 

              
            </Link>
          </Stack>

          {/* Navigation Links */}
          <Stack
          spacing={isSmallScreen ? 0.5 : 2}
          direction= {isSmallScreen ? "column" : "row"}
           sx={{
              mt: { xs: 2, md: 1 },
              alignItems: { xs: 'flex-start', md: 'center' },
              marginLeft: { xs: "5%", md: '10%' },
            }}
          >
            <Link
              href="/"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'Black',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Image
                src={bars.appIcon}
                alt="AppIcon"
                loading="lazy"
                width={isSmallScreen ? 16 : 24} 
                height={24}
                style={{ borderRadius: '10%' }}
              />
              <Typography
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 600,
                  fontSize: { xs: '12px', md: '22px' },
                  lineHeight: { xs: '16px', md: '25px' },
                  letterSpacing: '1%',
                  color: '#353535',
                  }}
                noWrap={true}
              >
                {bars.app}
              </Typography>
            </Link>

            <Link
              href="/"
              underline="none"
              sx={{
                color: 'Black',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Image
                src={bars.webIcon}
                alt="WebIcon"
                loading="lazy"
                width={isSmallScreen ? 16 : 24} 
                height={24}
                style={{ borderRadius: '10%' }}
              />
              <Typography
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 600,
                  fontSize: { xs: '12px', md: '22px' },
                  lineHeight: { xs: '16px', md: '25px' },
                  letterSpacing: '1%',
                  color: '#353535',
                }}
                noWrap={true}

              >
                {bars.web}
              </Typography>
            </Link>

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: 'Black',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Image
                src={bars.hireIcon}
                alt="HireIcon"
                loading="lazy"
                width={isSmallScreen ? 16 : 24} 
                height={24}
                style={{ borderRadius: '10%' }}
              />
              <Typography
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 600,
                  fontSize: { xs: '12px', md: '22px' },
                  lineHeight: { xs: '16px', md: '25px' },
                  letterSpacing: '1%',
                  color: '#353535',
                }}
                noWrap={true}

              >
                {bars.hire}
              </Typography>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
