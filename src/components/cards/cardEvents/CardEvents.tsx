import { FC, useState } from "react";
import {
  Card,
  Box,
  Divider,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "@/app/core/utils/colors";

interface ServiceCardProps {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
}

const CardService: FC<ServiceCardProps> = ({
  title,
  description,
  date,
  imageSrc,
  imageAlt,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isNormalScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 

  return (
    <>
      <Card
        elevation={0}
        onClick={handleOpen}
        sx={{
          textAlign: "center",
          height: isMediumScreen
            ? "30rem"
            : isNormalScreen
              ? "25rem"
              : isLargeScreen
                ? "28rem"
                : "32rem",
          width: isMediumScreen
            ? "20rem"
            : isNormalScreen
              ? "20rem"
              : isLargeScreen
                ? "28rem"
                : "30rem",
          backgroundColor: "#EDEDED",
          margin: "2% auto",
          cursor: "pointer",        
          overflow: "hidden",
          borderRadius: "25px",
          padding:"20px",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
          pt={isSmallScreen ? 0 : isLargeScreen ? 2 : 4}
        >
          <Image
            style={{ borderRadius: 8 }}
            src={imageSrc}
            width={250}
            height={250}
            alt={imageAlt}
            loading="lazy"
          />
        </Box>
        <Divider
          sx={{
            backgroundColor: "#A0730C",
            padding: "1px",
            margin: "2% auto",
            height: "2px",
            width: isMediumScreen ? "60%" : "80%",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontWeight: 700,
            /*  color: colors.primary, */
            fontSize: isSmallScreen
              ? "28px"
              : isMediumScreen
                ? "32px"
                : isNormalScreen
                  ? "32px"
                  : isLargeScreen
                    ? "32px"
                    : "32px",
          }}
        >
          {title}
        </Typography>
        <CardContent>
          <Typography
            sx={{
              color: colors.primary,
              fontWeight: 500,
              fontSize: isSmallScreen
                ? "18px"
                : isMediumScreen
                  ? "20px"
                  : isLargeScreen
                    ? "22px"
                    : "24px",
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            {date}
          </Typography>
          <Typography
            sx={{
              color: colors.primary,
              fontWeight: 500,
              fontSize: isSmallScreen
                ? "14px"
                : isMediumScreen
                  ? "16px"
                  : isLargeScreen
                    ? "18px"
                    : "18px",
              lineHeight: "18px",
              textAlign: "center",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>

      {/* *Modal*/}
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            textAlign: "center",
            fontWeight: 700,
            fontSize: "1.5rem",
          }}
        >
          {title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box display="flex" justifyContent="center">
            <Image
              style={{ borderRadius: 8 }}
              src={imageSrc}
              width={250}
              height={250}
              alt={imageAlt}
              loading="lazy"
            />
          </Box>
          <Typography
            sx={{ marginTop: 2, fontWeight: 700, textAlign: "center" }}
          >
            {date}
          </Typography>
          <Typography
            sx={{
              marginTop: 2,
              color: "#353535",
              textAlign: "center", // Ahora está centrado
              fontSize: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            {description}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardService;
