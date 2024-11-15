import { AppBar,Container, Link, Stack, Toolbar } from '@mui/material'
import Image from 'next/image';

export default function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#EDEDED', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py:1 }}>
        <Stack direction="row">
          <Link href="https://togetherdevs.com/" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/TogetherDevs azul.svg" alt="TogetherDevs"
                  loading="lazy"width={150} height={150} style={{borderRadius:"10%"}} />
          </Link>
          </Stack>

          <Stack direction="row" spacing={6}>
              <Link href="#" underline="none" sx={{ color: 'Black', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Image src="/appIcon.svg" alt="AppIcon"
                loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />
                App development
              </Link>
              <Link href="#" underline="none" sx={{ color: 'Black', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Image src="/webIcon.svg" alt="AppIcon"
                loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />
                Web platform
              </Link>
              <Link href="#" underline="none" sx={{ color: 'Black', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Image src="/hireIcon.svg" alt="AppIcon"
                loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />
                Hire our people
              </Link>
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
