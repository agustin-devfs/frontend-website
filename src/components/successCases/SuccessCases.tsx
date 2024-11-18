import { Card, CardContent,Grid, Typography } from "@mui/material";
import Image from 'next/image';
import {projects} from '@/app/core/utils/contants'

export default function Component() {

  const colores = [
    { back: '#A0730C', text: '#FEFEFE',imageAlignment:'left' }, 
    { back: '#162D4F', text: '#FEFEFE',imageAlignment:'left'  },
    { back: '#494949', text: '#E8FE74',imageAlignment:'rigth' },
    { back: '#E8FE74', text: '#364049',imageAlignment:'rigth'},
    { back: '#162D4F', text: '#FEFEFE',imageAlignment:'left' },
    { back: '#353535', text: '#FEFEFE',imageAlignment:'left' }
  ];

  
  return (
    <div>
      <Grid container spacing={0}>
        {projects.map((project, index) => {
          const color = colores[index % colores.length];
  
          return (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card sx={{ backgroundColor: color.back, borderRadius:'none' }}>
                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  direction={color.imageAlignment === "left" ? "row" : "row-reverse"}
                  sx={{ position: "relative" }}
                >
                  <Grid item xs={6} sx={{ display: "flex", justifyContent: color.imageAlignment === "left" ? "left":"right" }}>
                    <Image
                      width={500}
                      height={500}
                      src={project.image}
                      alt={project.title}
                      style={{ objectFit: "cover", maxWidth: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CardContent>
                      <Typography variant="subtitle2" sx={{ color: color.text }}>
                        {project.category}
                      </Typography>
                      <Typography variant="h6" component="div" sx={{ color: color.text }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: color.text }}>
                        {project.description}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: color.text, marginTop: "8px" }}>
                        {project.client}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}