import { AppBar, Box, Container, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material'
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material'
import Image from 'next/image';

export default function Footer() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#141519', boxShadow: 'none', marginTop: 'auto' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        <Link href="https://togetherdevs.com/" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
         
         <Image src="/TogetherDevs.svg" alt="TogetherDevs"
    loading="lazy"width={150} height={50} style={{borderRadius:"10%"}} />

   </Link>

          <Stack direction="row" spacing={3}>
            <Link href="#" underline="none" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Image src="/appIcon.svg" alt="AppIcon"
          loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />              App development
            </Link>
            <Link href="#" underline="none" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Image src="/webIcon.svg" alt="AppIcon"
          loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />
              Web platform
            </Link>
            <Link href="#" underline="none" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Image src="/hire.png" alt="AppIcon"
          loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />
              Hire our people
            </Link>
          </Stack>
        </Toolbar>

        <Box sx={{ py: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: 'white' }}>
                <LinkedIn />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
            </Stack>
            
            <Stack direction="row" spacing={2} sx={{ color: 'white', fontSize: '0.875rem' }}>
              <Link href="#" underline="none" sx={{ color: 'white' }}>
                Terms
              </Link>
              <Link href="#" underline="none" sx={{ color: 'white' }}>
                Privacy
              </Link>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                ©2024 TogetherDevs. All rights reserved
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </AppBar>
  )
}
