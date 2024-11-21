'use client'

import Box from '@mui/material/Box'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'

export default function Component() {

  return (
    <Box
      sx={{
        bgcolor: '#353535',
        color: 'white',
        padding: '140px 40px 80px 220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container alignItems="center" spacing={0}>
        <Grid item md={4}>
          <Typography
            sx={{
              fontFamily: 'Raleway',
              fontSize: '64px',
              fontWeight: 600,
              color: '#A07C0D',
              lineHeight: 1.1,
            }}
          >
            Ready to build
          </Typography>
        </Grid>

        <Grid item md={4}>
          <Typography
            sx={{
              fontFamily: 'Raleway',
              fontSize: '64px',
              fontWeight: 600,
              color: '#FFFFFF', 
              lineHeight: 1.1,
              display: 'inline',
              textDecoration: 'underline',
              textDecorationColor: '#FFFFFF',
              textUnderlineOffset: '5px',
              textDecorationThickness: '3px',
              textDecorationSkipInk: 'none',
            }}
          >
            {'together?'}
          </Typography>
        </Grid>

        {/* Icono de sonrisa */}
        <Grid item md={4}>
          <Image
            src="/assets/sonrisa pequeña.png"
            alt="Sonrisa"
            width={96}
            height={38}
            style={{ marginLeft: '10px' }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
