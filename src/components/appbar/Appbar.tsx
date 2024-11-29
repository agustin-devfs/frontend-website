'use client';
import { AppBar, Container, Link, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { bars } from '@/app/core/utils/contants';

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantallas pequeñas
  return (
    <AppBar position="static" sx={{ bgcolor: '#EDEDED', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1, md: 2 } }}>
          {/* Logo Section */}
          <Stack direction="row">
            <Link
              href={bars.togetherLink}
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src={bars.togetherDevsIcon}
                alt="TogetherDevs"
                loading="lazy"
                width={isSmallScreen ? 150 : 220} 
                height={isSmallScreen ? 35 : 100} 
                style={{ borderRadius: '10%', 
                 marginTop: isSmallScreen ? '5%' : '3%',
              }}
              />
            </Link>
          </Stack>

          {/* Navigation Links */}
          <Stack
               direction={isSmallScreen ? "column" : "row"} 
               spacing={isSmallScreen ? 1 : 3} 
            sx={{
              mt: { xs: 2, md: 0 },
              alignItems: { xs: 'flex-end', md: 'center' },
              marginLeft: { xs: "5%", md: '20%' },
            }}
          >
            <Link
              href="https://www.webuildapps.ai/"
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
                  fontSize: { xs: '14px', md: '22px' },
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
              href="#industries"
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
                  fontSize: { xs: '14px', md: '22px' },
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
              href="https://meetings.hubspot.com/david3299"
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
                  fontSize: { xs: '14px', md: '22px' },
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
