import { AppBar, Box, Container, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material'
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material'

export default function Footer() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: '#996515', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          <Link href="#" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
              together<span style={{ opacity: 0.9 }}>Devs</span>
            </Typography>
          </Link>

          <Stack direction="row" spacing={3}>
            <Link href="#" underline="none" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box component="span" sx={{ fontSize: '1.2rem' }}>⚡</Box>
              App development
            </Link>
            <Link href="#" underline="none" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box component="span" sx={{ fontSize: '1.2rem' }}>⚙️</Box>
              Web platform
            </Link>
            <Link href="#" underline="none" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box component="span" sx={{ fontSize: '1.2rem' }}>✨</Box>
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
