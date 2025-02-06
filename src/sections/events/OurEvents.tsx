import {
  Grid,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { event } from "@/app/core/utils/constants";
import CardEvents from "@/components/cards/cardEvents/CardEvents";
import useEventList from "./fecthEvents";

const ServicesSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const { isLoading, events } = useEventList(); // Obtiene los datos de la API

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: isSmallScreen ? 4 : isMediumScreen ? 4 : isLargeScreen ? 12 : 12,
        mb: isLargeScreen ? 8 : 14,
      }}
    >
      {/* Título */}
      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mt: isLargeScreen ? 0 : 10,
              fontFamily: "Raleway",
              color: "#06050F",
              fontWeight: 400,
              fontSize: isSmallScreen
                ? "30px"
                : isMediumScreen
                  ? "68px"
                  : isLargeScreen
                    ? "80px"
                    : "96px",
              lineHeight: isSmallScreen ? "56px" : "96px",
              textAlign: "center",
            }}
          >
            {event.title}
          </Typography>
        </Grid>
      </Grid>

      {/* Tarjetas */}
      <Grid
        container
        spacing={isSmallScreen ? 0 : isMediumScreen ? 1 : 4}
        justifyContent="center"
      >
        {events.map((event, index) => (
          <Grid
            item
            xs={10}
            sm={5}
            md={4}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardEvents
              title={event.title}
              description={event.description}
              date={event.date}
              imageSrc={event.imageSrc}
              imageAlt={event.imageAlt}
            />
          </Grid>
        ))}
      </Grid>

      {/* Botón */}
      {/*   <Box mt={isLargeScreen ? 1 : 10} textAlign="center">
        <Button
          href={link_whatsapp}
          variant="contained"
          color="primary"
          sx={{
            fontSize: "18px",
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "25px",
            padding: isSmallScreen ? "12px 50px" : "18px 100px",
            border: "1px solid black",
            transition: "background-color 0.3s, color 0.3s",
            "&:hover": {
              backgroundColor: "#eee",
              color: "#333",
            },
          }}
        >
          {service.button}
        </Button> 
      </Box>*/}
    </Container>
  );
};

export default ServicesSection;
