import { Box, Button, Container, Typography } from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import backgroundImage from "../../../public/assets/banner.jpg";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
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
        <Typography variant="h2" fontWeight={600} gutterBottom>
          Curso de sanación energética y chakras
        </Typography>
        <Typography variant="h5" gutterBottom>
          Viaje de sanación y conocimiento a través de tu sistema energético.
        </Typography>
        <Typography variant="h6" mb={3}>
          Enraizando tu poder
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="outlined" color="inherit" size="large">
            Ver Curso
          </Button>
          <Button variant="contained" color="primary" size="large">
            Ver todos los Cursos
          </Button>
        </Box>
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
          <Facebook sx={{ cursor: "pointer" }} />
          <Instagram sx={{ cursor: "pointer" }} />
          <YouTube sx={{ cursor: "pointer" }} />
        </Box>
      </Container>
    </Box>
  );
}
