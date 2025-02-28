import React, { useEffect, useState, useRef } from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useTheme, useMediaQuery } from "@mui/material";

export default function CardTeam({
  hashtag,
  name,
  rol,
  description,
  avatar,
  avatarAlignment,
  onClick,
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) observer.disconnect();
    };
  }, []);

  const direct = avatarAlignment === "left" ? "row" : "row-reverse";
  const justify = avatarAlignment === "left" ? "flex-start" : "flex-end";
  const paddingx =
    avatarAlignment === "left"
      ? " 1rem 12rem 1rem 6rem"
      : "1rem 6rem 1rem 12rem";
  const pos =
    avatarAlignment === "left" ? "translate(-5%, 0%)" : "translate(5%, 0%)";
  const position =
    avatarAlignment === "left" ? "translate(30%, 0%)" : "translate(-30%, 0%)";

  const paddingMobile =
    avatarAlignment === "left"
      ? "0.5rem 2.5rem 0.5rem 2.5rem"
      : "0.5rem 2.5rem 0.5rem 2.5rem";
  const positionMobile =
    avatarAlignment === "left" ? "translate(15%, 0%)" : "translate(-15%, 0%)";

  return (
    <Stack direction={direct} spacing={0} alignItems="center" sx={{ my: 0.2 }}>
      <Stack direction={"column"} spacing={0} alignItems="center">
        <Avatar
          alt={name}
          ref={imgRef}
          src={isVisible ? avatar : ""}
          sx={{
            width: matches ? 140 : 80,
            height: matches ? 140 : 80,
            objectFit: "cover",
            transform: matches ? position : positionMobile,
            zIndex: 1,
          }}
          slotProps={{
            img: { loading: "lazy" }
          }}
        />
      </Stack>
      <Paper
        elevation={5}
        className="card"
        sx={{
          backgroundColor: theme.palette.primary.grey,
          opacity: 0.7,
          borderRadius: "25px",
          zIndex: 0,
          maxWidth: {
            xs: "25rem",
            sm: "30rem",
            md: "45rem",
            lg: "50rem",
          },
          minWidth: {
            xs: "15rem",
            sm: "30rem",
            md: "45rem",
            lg: "50rem",
          },
          whiteSpace: "nowrap",
          marginBottom: "1rem",
          padding: matches ? paddingx : paddingMobile,
          margin: 0,
          transform: pos,
          justifyContent: justify,
          textAlign: avatarAlignment,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <Typography
          gutterBottom
          fontSize={matches ? 10 : 8}
          component="div"
          fontFamily={"Raleway"}
          color={theme.palette.common.white}
          sx={{ fontWeight: 500, whiteSpace: "normal" }}
        >
          {hashtag}
        </Typography>
        <Typography
          fontSize={matches ? 16 : 12}
          component="div"
          fontFamily={"Raleway"}
          color={theme.palette.primary.black}
          sx={{ fontWeight: 700, whiteSpace: "normal" }}
        >
          {name}
        </Typography>
        <Typography
          fontSize={matches ? 14 : 12}
          component="div"
          fontFamily={"Raleway"}
          color={theme.palette.common.white}
          sx={{ fontWeight: 700, whiteSpace: "normal" }}
        >
          {rol}
        </Typography>
        <Typography
          fontSize={matches ? 14 : 12}
          component="div"
          fontFamily={"Raleway"}
          color={theme.palette.common.white}
          sx={{
            fontWeight: 500,
            whiteSpace: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontStyle: "italic",
          }}
        >
          {description}
        </Typography>
      </Paper>
    </Stack>
  );
}
