'use client'
import { useEffect, useState } from "react";
import { bars } from "@/app/core/utils/contants";
import { ButtonGroup, Button, Link, Grid, useTheme, useMediaQuery } from "@mui/material";
import Image from 'next/image';

export default function NavBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantallas pequeñas
  const isNormalScreen = useMediaQuery(theme.breakpoints.down('lg')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 

    
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const isAnySectionVisible = entries.some(entry => entry.isIntersecting);
      setIsVisible(!isAnySectionVisible);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });

    const sectionIds = ["services", "aboutus", "industries", "contactForm"];
    
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navbarStyles: React.CSSProperties = {
    opacity: isVisible ? 1 : 0, 
    transition: 'opacity 0.3s ease-in-out',
    backgroundColor: '#353535',
    position: 'fixed',
    bottom: '16%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    pointerEvents: isVisible ? 'auto' : 'none',
  };

  const navbarStylesSmall: React.CSSProperties = {
    width: '200px',
    opacity: isVisible ? 0 : 0, 
    transition: 'opacity 0.3s ease-in-out',
    backgroundColor: '#353535',
    position: 'fixed',
    bottom: '0%',
    zIndex: 1000,
    pointerEvents: isVisible ? 'auto' : 'none',
  };

  return (
    <Grid container sm={10} md={7.2} lg={4.8} xl={4.8} style={ isSmallScreen ? navbarStylesSmall:navbarStyles } >
      <ButtonGroup
        variant="contained"
        
        sx={{
          backgroundColor: '#353535',
          
          '& .MuiButton-root': {
            backgroundColor: '#353535',
            textTransform: 'none',
             fontWeight: '600',
             fontSize: isSmallScreen? '10px':isNormalScreen? '12px': isLargeScreen? '12px':'16px',
             padding: isSmallScreen? '4px 0px': isNormalScreen? '4px 10px': isLargeScreen? '4px 9px':'8px 11px',
            borderColor: "#353535",

            '&:hover': {
              backgroundColor: '#353535',
              color: "white"
            },
            '&:last-of-type': {
              borderRadius: '10px',
              color: '#364049',
              backgroundColor: "#FEFEFE",
              margin: "10px"
            },
            '&:last-of-type:hover': {
              color: 'white',
              backgroundColor: '#66757F',
            }
          },
        }}
      >
        <Grid style={{ padding: isLargeScreen ? '12px' :"20px", marginTop: "10px" }}>
          <Link href="https://togetherdevs.com/" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="logos/TogetherDevs.svg"
              alt="TogetherDevs"
              loading="lazy"
              width={isLargeScreen ? 100: 150}
              height={30}
              style={{ borderRadius: "10%" }}
            />
          </Link>
        </Grid>

        <Button href="#services">{bars.ButtonService}</Button>
        <Button href="#aboutus">{bars.ButtonAbout}</Button>
        <Button href="#industries">{bars.ButtonWork}</Button>
        <Button href="#contactForm">{bars.ButtonCall}</Button>
      </ButtonGroup>
    </Grid>
  );
}
