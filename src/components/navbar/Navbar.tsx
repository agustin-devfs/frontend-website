'use client'

import { ButtonGroup, Button, Link } from "@mui/material"
import Image from 'next/image';

export default function Component() {
  return (
    <div>
      <ButtonGroup 
        variant="contained" 
        sx={{
          backgroundColor: '#353535',  
          position: 'fixed',            
          bottom: '18%',               
          left: '50%',                 
          transform: 'translateX(-50%)', 
          zIndex: 1000, 
          
          '& .MuiButton-root': {
            backgroundColor: '#353535',  
            textTransform: 'none',
            fontWeight: 'bold',
            padding: '8px 16px',
            borderColor: "#353535",
          
            '&:hover': {
              backgroundColor: '#353535',
              color: "white"
            },
            '&:last-of-type': {
              color: '#a4e043',  
              backgroundColor: '#364049',
              margin: "10px"
            },
            '&:last-of-type:hover': {
              backgroundColor: 'rgba(80, 80, 80, 0.95)',
            }
          },
    
        }}
      >
        <div style={{ padding: "20px", marginTop:"10px" }}>
        <Link href="https://togetherdevs.com/" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
         
         <Image src="/TogetherDevs.svg" alt="TogetherDevs"
    loading="lazy"width={120} height={30} style={{borderRadius:"10%"}} />

   </Link>
        </div>
        <Button>OUR SERVICE</Button>
        <Button>ABOUT US</Button>
        <Button>OUR WORK</Button>
        <Button>GET STARDED</Button>
      </ButtonGroup>
    </div>
  )
}
