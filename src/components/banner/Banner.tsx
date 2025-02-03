"use client";

import Box from "@mui/material/Box";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
export default function Banner() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detecta pantallas pequeñas
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md")); // Pantallas medianas
  const isNormalScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const images = [
    "/assets/banner.jpg",
    "/assets/banner.jpg",
    "/assets/banner.jpg",
    "/assets/banner.jpg",
    "/assets/banner.jpg",
  ];

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full h-[300px] md:h-[400px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              width={600}
              height={400}
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          bgcolor: "#353535",
          color: "white",
          width: "100%",
          height: isSmallScreen ? "25vh" : "40vh",
          padding: isSmallScreen ? "8vh 6vw" : "15vh 15vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container alignItems="center">
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontSize: isSmallScreen
                ? "25px"
                : isMediumScreen
                  ? "40px"
                  : isNormalScreen
                    ? "50px"
                    : isLargeScreen
                      ? "54px"
                      : "64px",
              fontWeight: 600,
              color: "#A07C0D",
              lineHeight: 1.1,
              display: "inline-block",
            }}
          >
            {"Estas lista para comenzar a"}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Raleway",
              fontSize: isSmallScreen
                ? "25px"
                : isMediumScreen
                  ? "40px"
                  : isNormalScreen
                    ? "50px"
                    : isLargeScreen
                      ? "54px"
                      : "64px",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.1,
              display: "inline-block",
              textDecoration: "underline",
              textDecorationColor: "#FFFFFF",
              textUnderlineOffset: "5px",
              textDecorationThickness: "3px",
              textDecorationSkipInk: "none",
              marginLeft: "8px", // Espaciado entre textos si es necesario
            }}
          >
            {"Sanar?"}
          </Typography>

          {/* Icono de sonrisa */}
          {/*    <Grid item sm={1} md={1} lg={1}>
          <Image
            src="/assets/sonrisa pequeña.png"
            alt="Sonrisa"
            width={isSmallScreen? 50 :96}
            height={isSmallScreen?20 :38}
            style={{ marginLeft: '10px' }}
          />
        </Grid> */}
        </Grid>
      </Box>
    </>
  );
}
