"use client";
import {
  AppBar,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { bars } from "@/app/core/utils/constants";
import useNavList, { ServiceNav } from "@/sections/footer/fetchNavs";
import { colors } from "@/app/core/utils/colors";
import { Mockdata } from "@/app/core/utils/mockdata/Mockdata";

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const { isLoading, nav_data } = useNavList();

  console.log(nav_data);

  if (isLoading) return <div>Loading...</div>;

const nav = nav_data.length > 0 ? nav_data : Mockdata.navs;

  return (
    <AppBar position="static" sx={{ bgcolor: "#FFF5F5", boxShadow: "none", minHeight:"60px" }} >
      <Container maxWidth="xl">
        <Toolbar
          sx={{ justifyContent: "space-between", py: { xs: 1, md: 1, lg: 0 }, minHeight:"60px" }}
        >
          {/* Logo Section */}
          <Stack direction="row">
            <Link
              href={bars.LogoIcon}
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={"/logos/logo.png"}
                alt="LogoIcon"
                width={
                  isSmallScreen
                    ? 60
                    : isMediumScreen
                      ? 80
                      : isLargeScreen
                        ? 100
                        : 100
                }
                height={
                  isSmallScreen
                    ? 60
                    : isMediumScreen
                      ? 80
                      : isLargeScreen
                        ? 100
                        : 100
                }
                style={{
                  borderRadius: "10%",
                  marginTop: isSmallScreen
                    ? "1.5rem"
                    : isMediumScreen
                      ? "12%"
                      : isLargeScreen
                        ? "10%"
                        : "8%",
                }}
              />
            </Link>
          </Stack>

          {/* Navigation Links */}
          <Stack
            spacing={isSmallScreen ? 0.5 : 2}
            direction={isSmallScreen ? "column" : "row"}
            sx={{
              mt: { xs: 2, md: 1 },
              alignItems: { xs: "flex-start", md: "center" },
              marginLeft: { xs: "5%", md: "10%" },
            }}
          >
            {nav.map((n: ServiceNav, index: number) => (
              <Link
                key={index}
                href={n.linkNav}
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: colors.primary,
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
                    fontFamily: "Raleway",
                    fontWeight: 600,
                    fontSize: { xs: "12px", md: "22px" },
                    lineHeight: { xs: "16px", md: "25px" },
                    letterSpacing: "1%",
                    color: colors.primary,
                  }}
                  noWrap={true}
                >
                  {n.nav}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
