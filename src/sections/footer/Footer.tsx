import { AppBar, Box, Container, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material'
import { Facebook, Instagram, LinkedIn} from '@mui/icons-material'
import Image from 'next/image';
import { bars, footer } from '@/app/core/utils/contants';

export default function Footer() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#141519', boxShadow: 'none', marginTop: 'auto' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        <Link href="/" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
         
         <Image src="logos/TogetherDevs.svg" alt="TogetherDevs"
    loading="lazy"width={150} height={50} style={{borderRadius:"10%"}} />

   </Link>

          <Stack direction="row" spacing={3}>
            <Link href="#" underline="none" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Image src={bars.webIconB} alt="AppIcon"
          loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />              App development
            </Link>
            <Link href="#" underline="none" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Image src={bars.webIconB} alt="AppIcon"
          loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />
              {bars.web}
            </Link>
            <Link href="#" underline="none" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Image src={bars.hireIconB} alt="AppIcon"
          loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />
              {bars.hire}
            </Link>
          </Stack>
        </Toolbar>

        <Box sx={{ py: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={1}>
              <IconButton                 
              href="https://www.linkedin.com/company/togetherdevs/about/"
              size="small" sx={{ color: 'white' }}>
                <LinkedIn />
              </IconButton>
              <IconButton 
                  href="https://www.facebook.com/Togetherdevs/"
                  size="small" sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton            
              href="https://www.instagram.com/togetherdevs?igsh=cTdhcTU1aHkzdGp0"
size="small" sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
            </Stack>
            
            <Stack direction="row" spacing={2} sx={{ color: 'white', fontSize: '0.875rem' }}>
              <Link href="#" underline="none" sx={{ color: 'white' }}>
                {footer.terms}
              </Link>
              
              <Link href="#" underline="none" sx={{ color: 'white' }}>
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
  )
}
