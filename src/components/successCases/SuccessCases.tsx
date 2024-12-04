'use client'
import { Box, Card, CardContent, Grid, Typography,  useMediaQuery, useTheme } from "@mui/material";
import Image from 'next/image';
import { projects } from '@/app/core/utils/contants';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SlideInCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); 
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl')); 

  const colores = [
    { back: '#F6F6F6', text: '#162D4F', imageAlignment: 'left' },
    { back: '#494949', text: '#F6F6F6', imageAlignment: 'left' },
    { back: '#A0730C', text: '#000000', imageAlignment: 'right' },
    { back: '#162D4F', text: '#F6F6F6', imageAlignment: 'right' },
    { back: '#494949', text: '#F6F6F6', imageAlignment: 'left' },
    { back: '#F6F6F6', text: '#162D4F', imageAlignment: 'left' }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Aumenta el umbral para activar la animación antes
    rootMargin: isSmallScreen? '180%' : '75%' 
  });
  
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          width: '100vw',
          overflow: 'hidden',
/*           backgroundImage: 'url(/assets/25.png)',
 */          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 0,
          padding: 0
        }}
      >
        <Grid container spacing={0} sx={{ position: 'relative', zIndex: 1 }}>
          {projects.map((project, index) => {
            const color = colores[index % colores.length];
            const isHovered = hoveredIndex === index;

            return (
              <Grid item xs={12} sm={6} md={6} key={index} ref={ref}>
                <motion.div
                  initial={{ opacity: 0, x: color.imageAlignment === 'left' ? -10 : 10 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : color.imageAlignment === 'left' ? -100 : 100 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <Card sx={{ backgroundColor: color.back, borderRadius: 'none' }}>
                    <Grid
                      container
                      spacing={0}
                      alignItems="center"
                      direction={color.imageAlignment === "left" ? "row" : "row-reverse"}
                      sx={{ position: "relative" }}
                    >
                      <Grid item xs={6} sx={{ display: "flex", justifyContent: color.imageAlignment === "left" ? "left" : "right" }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          animate={{
                             scale: isHovered ? 0.9 : (hoveredIndex !== null ? 1 : 1), // aca Reduce escala si no está en hover
                             x: isHovered 
                            ? (color.imageAlignment === "left" ? -50 : 50)
                            : 0
                         }}
                        >
                          <Image
                            width={isMediumScreen? 340:isLargeScreen? 400:420}
                            height={isMediumScreen? 340:isLargeScreen? 400:420}
                            src={project.image}
                            alt={project.title}
                            style={{ objectFit: "cover", maxWidth: "100%", display: "block" }}
                          />
                        </motion.div>
                      </Grid>
                      <Grid item xs={6}>
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            fontWeight: 'bold',
                            zIndex: 10
                          }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          onHoverStart={() => setHoveredIndex(index)}
                          onHoverEnd={() => setHoveredIndex(null)}
                          animate={{
                            scale: isHovered ? 1 : (hoveredIndex !== null ? 1 : 1), // Reduce escala si no está en hover
                            x: isHovered 
                            ? (color.imageAlignment === "left" ? -50 : 50)
                            : 0

                          }}
                        >
                          <CardContent>
                            <Typography variant="subtitle2" 
                            sx={{ color: color.text,
                             fontFamily: 'Raleway', 
                             fontWeight: 700, 
                             fontSize: isMediumScreen? '13px':isLargeScreen? '15px': '18px', 
                             lineHeight: '1.5', 
                             textTransform: 'uppercase', 
                             marginBottom: '8px', 
                             letterSpacing: '0.1em' }}>
                              {project.category}
                            </Typography>
                            <Typography variant="h6" component="div" 
                            sx={{ color: color.text, 
                            fontFamily: 'Raleway', 
                            fontWeight: 500, 
                            fontSize: isMediumScreen? '11px':isLargeScreen? '14px': '32px', 
                            lineHeight: '1', 
                            textTransform: 'uppercase', 
                            marginBottom: '8px' }}>
                              {project.title}
                            </Typography>
                            <Typography variant="body2" 
                            sx={{ color: color.text, 
                            fontFamily: 'Raleway',  
                            fontWeight: 500, 
                            fontSize: isMediumScreen? '11px':isLargeScreen? '14px': '18px', 
                            lineHeight: '1.25', 
                            marginBottom: '8px' }}>
                              {project.description}
                            </Typography>
                            <Typography variant="subtitle2" 
                            sx={{ color: color.text, 
                            fontFamily: 'Raleway', 
                            fontWeight: 700, 
                            fontSize: isMediumScreen? '12px':isLargeScreen? '16px': '18px', 
                            lineHeight: '1.25', 
                            marginBottom: '8px' }}>
                              {project.client}
                            </Typography>
                          </CardContent>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
