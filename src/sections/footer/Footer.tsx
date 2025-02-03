'use client';
import { AppBar, Box, Container, IconButton, Link, Stack, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import Image from 'next/image';
import { bars, footer } from '@/app/core/utils/contants';

export default function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isNormalScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <AppBar position="static" sx={{ bgcolor: '#141519', boxShadow: 'none', marginTop: 'auto' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 2, md: 2 } , px: isSmallScreen ? 1 : 0 }}>
          <Link href="/" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
            <Image 
              src="" 
              alt="LogoIcon"
              loading="lazy"
              width={isSmallScreen ? 150 : 150} 
              height={isSmallScreen ? 35 : 50} 
              style={{ borderRadius: "10%" }} 
            />
          </Link>

          <Stack 
            direction={isSmallScreen ? "column" : isMediumScreen ? 'row': "row"} 
            spacing={isSmallScreen ? 1 : isMediumScreen ? 3 : isNormalScreen? 8 : 8} 
            sx={{
              flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              alignItems: { xs: 'flex-start',sm: 'center' , md: 'center' },
              marginLeft: { xs: "5%", md: '20%' },
            }}
          >
            <Link 
              href="https://www.webuildapps.ai/" 
              underline="none"   
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <Image 
                src={bars.appIconB} 
                alt="AppIcon"
                loading="lazy"
                width={isSmallScreen ? 16 : 24} 
                height={24} 
                style={{ borderRadius: "10%" }} 
              />              
              {bars.app}
            </Link>
            <Link 
              href="#industries" 
              underline="none" 
              sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image 
                src={bars.webIconB} 
                alt="AppIcon"
                loading="lazy"
                width={isSmallScreen ? 16 : 24} 
                height={24} 
                style={{ borderRadius: "10%" }} 
              />
              {bars.web}
            </Link>
            <Link 
              href={"https://meetings.hubspot.com/david3299"}
              target="_blank" 
              rel="noopener noreferrer" 
              underline="none" 
              sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <Image 
                src={bars.hireIconB} 
                alt="AppIcon"
                loading="lazy"
                width={isSmallScreen ? 16 : 24} 
                height={24} 
                style={{ borderRadius: "10%" }} 
              />
              {bars.hire}
            </Link>
          </Stack>
        </Toolbar>

        <Box sx={{ py: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Stack 
            direction={isSmallScreen ? "column" : "row"} 
            justifyContent="space-between" 
            alignItems={isSmallScreen ? "center" : "flex-start"} 
            spacing={isSmallScreen ? 2 : 0}
          >
            <Stack direction="row" spacing={1} justifyContent={isSmallScreen ? "center" : "flex-start"}>
              <IconButton
                href="https://www.linkedin.com/company/togetherdevs/about/"
                size="small" 
                sx={{ color: 'white' }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de TogetherDevs"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/Togetherdevs/"
                size="small" 
                sx={{ color: 'white' }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Página de Facebook de TogetherDevs"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/togetherdevs?igsh=cTdhcTU1aHkzdGp0"
                size="small" 
                sx={{ color: 'white' }}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Cuenta de Instagram de TogetherDevs"
              >
                <Instagram />
              </IconButton>
            </Stack>

            <Stack 
              direction={isSmallScreen ? "column" : "row"} 
              spacing={2} 
              sx={{ color: 'white', fontSize: '0.875rem', textAlign: isSmallScreen ? 'center' : 'left' }}
            >
              <Link 
                href="#" 
                underline="none" 
                sx={{ color: 'white' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {footer.terms}
              </Link>
              <Link 
                href="#" 
                underline="none" 
                sx={{ color: 'white' }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {footer.privacy}
              </Link>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {footer.ALL_RIGHTS_RESERVED}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </AppBar>
  );
}
