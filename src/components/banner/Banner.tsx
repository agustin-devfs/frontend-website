'use client'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'

export default function Component() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        bgcolor: '#353535', // Fondo gris oscuro
        color: 'white',
        padding: '140px 140px 40px 20px', // Espaciado interior
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <Typography
            sx={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: '64px',
              fontWeight: 600,
              color: '#E8FE74', // Color amarillo claro
              lineHeight: 1.1,
            }}
          >
            Ready to build
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            sx={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: '64px',
              fontWeight: 600,
              color: '#FFFFFF', // Color blanco
              lineHeight: 1.1,
              display: 'inline',
              textDecoration: 'underline',
              textDecorationColor: '#FFFFFF',
              textUnderlineOffset: '5px',
              textDecorationThickness: '3px',
              textDecorationSkipInk: 'none',
            }}
          >
            together?
          </Typography>
        </Grid>

        {/* Icono de sonrisa */}
        <Grid item>
          <Image
            src="/assets/sonrisa pequeña.png"
            alt="Sonrisa"
            width={90}
            height={30}
            style={{ marginLeft: '10px' }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
