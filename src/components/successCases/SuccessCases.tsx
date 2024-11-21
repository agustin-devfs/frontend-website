'use client'
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import { projects } from '@/app/core/utils/contants';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function SlideInCard() {
  const colores = [
    { back: '#F6F6F6', text: '#162D4F', imageAlignment: 'left' },
    { back: '#494949', text: '#F6F6F6', imageAlignment: 'left' },
    { back: '#A0730C', text: '#000000', imageAlignment: 'right' },
    { back: '#162D4F', text: '#F6F6F6', imageAlignment: 'right' },
    { back: '#494949', text: '#F6F6F6', imageAlignment: 'left' },
    { back: '#F6F6F6', text: '#162D4F', imageAlignment: 'left' }
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Fondo del logo */}
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          width: '100vw',
          overflow: 'hidden',
          backgroundImage: 'url(/assets/logos/togetherDevs.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin:0,
          padding:0
        }}
      >

      {/* Contenido de las tarjetas */}
      <Grid container spacing={0} sx={{ position: 'relative', zIndex: 1 }}>
        {projects.map((project, index) => {
          const color = colores[index % colores.length];
          return (
            <Grid item xs={12} sm={6} md={6} key={index} ref={ref}>
              <motion.div
                initial={{ opacity: 0, x: color.imageAlignment === 'left' ? -100 : 100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : color.imageAlignment === 'left' ? -100 : 100 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
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
                      >
                        <Image
                          width={420}
                          height={420}
                          src={project.image}
                          alt={project.title}
                          style={{ objectFit: "cover", maxWidth: "100%", display: "block" }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={6}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ color: color.text, fontFamily: 'Raleway', fontWeight: 700, fontSize: '18px', lineHeight: '1.5', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em' }}>
                            {project.category}
                          </Typography>
                          <Typography variant="h6" component="div" sx={{ color: color.text, fontFamily: 'Raleway', fontWeight: 500, fontSize: '32px', lineHeight: '1', textTransform: 'uppercase', marginBottom: '8px' }}>
                            {project.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: color.text, fontFamily: 'Raleway', fontWeight: 500, fontSize: '18px', lineHeight: '1.25', marginBottom: '8px' }}>
                            {project.description}
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: color.text, fontFamily: 'Raleway', fontWeight: 700, fontSize: '20px', lineHeight: '1.25', marginBottom: '8px' }}>
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
