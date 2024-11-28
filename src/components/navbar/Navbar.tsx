'use client'
import { useEffect, useState } from "react";
import { bars } from "@/app/core/utils/contants";
import { ButtonGroup, Button, Link, Grid } from "@mui/material";
import Image from 'next/image';

export default function NavBar() {
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

  return (
    <Grid container md={4.5} style={navbarStyles}>
      <ButtonGroup
        variant="contained"
        sx={{
          backgroundColor: '#353535',
          
          '& .MuiButton-root': {
            backgroundColor: '#353535',
            textTransform: 'none',
             fontWeight: '600',
             padding: '8px 16px',
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
        <Grid style={{ padding: "20px", marginTop: "10px" }}>
          <Link href="https://togetherdevs.com/" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="logos/TogetherDevs.svg"
              alt="TogetherDevs"
              loading="lazy"
              width={120}
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
