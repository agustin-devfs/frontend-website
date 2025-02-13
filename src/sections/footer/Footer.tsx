"use client";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Instagram, YouTube } from "@mui/icons-material";
import Image from "next/image";
import { footer } from "@/app/core/utils/constants";

import useNavList from "./fetchNavs";

export default function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { isLoading, nav } = useNavList();

  //console.log(nav)

  if (isLoading) return <div>Loading...</div>;

  
  
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#8E0304", boxShadow: "none", marginTop: "auto" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: { xs: 2, md: 2 },
            px: isSmallScreen ? 1 : 0,
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src="/logos/logo.png"
              alt="LogoIcon"
              loading="lazy"
              width={isSmallScreen ? 50 : 55}
              height={isSmallScreen ? 45 : 50}
              style={{ borderRadius: "10%" }}
            />
          </Link>
 
          <Stack
            direction={isSmallScreen ? "column" : "row"}
            spacing={isSmallScreen ? 1 : isMediumScreen ? 3 : 8}
            sx={{
              flexDirection: { xs: "column", sm: "row", md: "row" },
              alignItems: { xs: "flex-start", sm: "center", md: "center" },
              marginLeft: { xs: "5%", md: "20%" },
            }}
          >
            {nav.map((n:any, index:number) => (
              <Link
                key={index}
                href={n.linkNav}
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Image
                  src={n.iconNav}
                  alt={n.nav}
                  loading="lazy"
                  width={isSmallScreen ? 16 : 24}
                  height={24}
                  style={{ borderRadius: "10%" }}
                />
                 <Typography
                sx={{
                  fontFamily: 'Raleway',
                  fontWeight: 600,
                  fontSize: { xs: '12px', md: '22px' },
                  lineHeight: { xs: '16px', md: '25px' },
                  letterSpacing: '1%',
                  color: 'white',
                }}
                noWrap={true}

              >
                {n.nav}
                </Typography>

              </Link>
            ))}
          </Stack> 
        </Toolbar>

        <Box sx={{ py: 2, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <Stack
            direction={isSmallScreen ? "column" : "row"}
            justifyContent="space-between"
            alignItems={isSmallScreen ? "center" : "flex-start"}
            spacing={isSmallScreen ? 2 : 0}
          >
            <Stack
              direction="row"
              spacing={1}
              justifyContent={isSmallScreen ? "center" : "flex-start"}
            >
             
              <IconButton
                href="https://www.instagram.com/lunarojacirculo/?igsh=c2RmbWVrZHZta3dn"
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
            </Stack>

            <Stack
              direction={isSmallScreen ? "column" : "row"}
              spacing={2}
              sx={{
                color: "white",
                fontSize: "0.875rem",
                textAlign: isSmallScreen ? "center" : "left",
              }}
            >
              <Link
                href="#"
                underline="none"
                sx={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footer.terms}
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footer.privacy}
              </Link>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {footer.ALL_RIGHTS_RESERVED}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </AppBar>
  );
}
