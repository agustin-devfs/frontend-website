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
        width: '100%',
        height: '40vh',
        padding: '15vh 10vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
          <Grid container alignItems="center">
            <Typography
              sx={{
                fontFamily: 'Raleway',
                fontSize: '64px',
                fontWeight: 600,
                color: '#A07C0D',
                lineHeight: 1.1,
                display: 'inline-block',  // Ajuste para alineación
              }}
            >
              Ready to build
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Raleway',
                fontSize: '64px',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.1,
                display: 'inline-block',  
                textDecoration: 'underline',
                textDecorationColor: '#FFFFFF',
                textUnderlineOffset: '5px',
                textDecorationThickness: '3px',
                textDecorationSkipInk: 'none',
                marginLeft: '8px',  // Espaciado entre textos si es necesario
              }}
            >
              {'together?'}
            </Typography>


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
