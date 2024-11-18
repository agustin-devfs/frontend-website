import { AppBar,Container, Link, Stack, Toolbar } from '@mui/material'
import Image from 'next/image';
import {bars} from '@/app/core/utils/contants'

export default function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#EDEDED', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py:0 }}>
        <Stack direction="row">
          <Link href={bars.togetherLink} underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={bars.togetherDevsIcon} alt="TogetherDevs"
                  loading="lazy"width={150} height={150} style={{borderRadius:"10%"}} />
          </Link>
          </Stack>

          <Stack direction="row" spacing={6}>
              <Link href="#" underline="none" sx={{ color: 'Black', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Image src={bars.appIcon} alt="AppIcon"
                loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />
                {bars.app}
              </Link>
              <Link href="#" underline="none" sx={{ color: 'Black', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Image src={bars.webIcon} alt="AppIcon"
                loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />
                {bars.web}
              </Link>
              <Link href="#" underline="none" sx={{ color: 'Black', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Image src={bars.hireIcon} alt="AppIcon"
                loading="lazy"width={24} height={24} style={{borderRadius:"10%"}} />
                {bars.hire}
              </Link>
          </Stack>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
