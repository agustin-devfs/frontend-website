'use client'
import { AppBar, Container, Link, Stack, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import { bars } from '@/app/core/utils/contants';

export default function Header() {


  return (
    <AppBar position="static" sx={{ bgcolor: '#EDEDED', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 0 }}>
          <Stack direction="row">
            <Link href={bars.togetherLink} underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={bars.togetherDevsIcon}
                alt="TogetherDevs"
                loading="lazy"
                width={200}
                height={200}
                style={{ borderRadius: '10%' }}
              />
            </Link>
          </Stack>

         
            <Stack direction="row" spacing={4} marginLeft={"20%"}>
              <Link href="https://www.webuildapps.ai/" 
              underline="none"   
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ color: 'Black', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Image
                  src={bars.appIcon}
                  alt="AppIcon"
                  loading="lazy"
                  width={24}
                  height={24}
                  style={{ borderRadius: '10%' }}
                />
                <Typography
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 600,
                    fontSize: { xs: '14px', md: '22px' },
                    lineHeight: { xs: '14px', md: '25px' },
                    letterSpacing: '1%',
                    color: '#353535',
                  }}
                >
                  {bars.app}
                </Typography>
              </Link>

              <Link href="#industries" 
              underline="none"   
              sx={{ color: 'Black', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Image
                  src={bars.webIcon}
                  alt="WebIcon"
                  loading="lazy"
                  width={24}
                  height={24}
                  style={{ borderRadius: '10%' }}
                />
                <Typography
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 600,
                    fontSize: { xs: '14px', md: '22px' },
                    lineHeight: { xs: '14px', md: '25px' },
                    letterSpacing: '1%',
                    color: '#353535',
                  }}
                >
                  {bars.web}
                </Typography>
              </Link>

              <Link 
                href={"https://meetings.hubspot.com/david3299"}
                target="_blank" 
                rel="noopener noreferrer"underline="none" sx={{ color: 'Black', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Image
                  src={bars.hireIcon}
                  alt="HireIcon"
                  loading="lazy"
                  width={24}
                  height={24}
                  style={{ borderRadius: '10%' }}
                />
                <Typography
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 600,
                    fontSize: { xs: '14px', md: '22px' },
                    lineHeight: { xs: '14px', md: '25px' },
                    letterSpacing: '1%',
                    color: '#353535',
                  }}
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
