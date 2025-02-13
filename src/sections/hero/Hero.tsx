import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import {Instagram, YouTube } from "@mui/icons-material";
import backgroundImage from "../../../public/assets/banner.jpg";
import useHeroList from "./fetchHero";

export default function HeroSection() {
  const { hero } = useHeroList();

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        {hero.map((h, index) => (
          <Box key={index}>
            <Typography variant="h2" fontWeight={600} gutterBottom>
              {h.title}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {h.texto}
            </Typography>

            <Box display="flex" justifyContent="center" gap={2}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                component="a"
                href="#services"
              >
                {h.buttonIzq}
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component="a"
                href="#events"
              >
                {h.buttonDer}
              </Button>
            </Box>
          </Box>
        ))}

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <IconButton
            href="https://www.instagram.com/lunarojacirculo/"
            size="small"
            sx={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cuenta de Instagram"
          >
            <Instagram />
          </IconButton>
          <IconButton
            href="https://www.youtube.com/@Lunarojacirculo"
            size="small"
            sx={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cuenta de Youtube"
          >
            <YouTube />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
