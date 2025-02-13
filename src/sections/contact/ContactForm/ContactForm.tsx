"use client";
import React from "react";
import { Button, Typography, Divider, Grid, Box, Link } from "@mui/material";
import {
  contact,
  link_telegram,
  link_whatsapp /* RESPONSES */,
} from "@/app/core/utils/constants";
import Image from "next/image";
import WhatsAppIcon from'@mui/icons-material/WhatsApp'; 
import TelegramIcon from'@mui/icons-material/Telegram';
import "react-toastify/dist/ReactToastify.css";

export default function Component() {

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "60vh", margin: "1%" }}
    >
      <Grid item xs={12} sm={8} md={8} lg={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            style={{
              maxWidth: "fit-content",
              backgroundColor: "#8e0304",
              color: "#F6F6F6",
              padding: "8px 80px",
              borderRadius: "6px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            CONECTEMOSNOS
          </Typography>
        </Box>
        <Grid container spacing={3} direction="column" alignItems="center">
          {/* Action Buttons */}
          <Grid
            item
            container
            spacing={0}
            direction="column"
            alignItems="center"
          >
            <Typography
              variant="body2"
              style={{
                color: "black",
                /*                 fontSize: "15px",
                 */ fontWeight: 600,
                textAlign: "center",
                marginTop: "5%",
                textTransform: "uppercase",
              }}
            >
              {contact.text}
            </Typography>
            <Divider
              sx={{ maxWidth: { xs: "100%", sm: "300px" } }}
              style={{
                backgroundColor: "#A0730C",
                marginTop: "5px",
                padding: "2px",
                minWidth: "300px",
                borderBottomWidth: "inherit",
              }}
            />
         
            <Button
              variant="outlined"
              href={link_whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              sx={{
                borderColor: "#A0730C",
                backgroundColor: "transparent",
                color: "black",
                borderWidth: 3,
                width: "100%",
                minWidth: "300px",
                maxWidth: { xs: "70%", sm: "300px" },
                height: { xs: "40px", sm: "50px" },
                mt: "2%",
                "&:hover": {
                  backgroundColor: "#A0730C",
                  color: "black",
                  fontWeight: "bold",
                },
              }}
            >
              <WhatsAppIcon sx={{ marginRight: 1 }} />
              {contact.buttonChatMariana}
            </Button>
            <Button
              variant="outlined"
              href={link_telegram}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              sx={{
                borderColor: "#A0730C",
                backgroundColor: "transparent",
                color: "black",
                borderWidth: 3,
                width: "100%",
                minWidth: "300px",
                maxWidth: { xs: "70%", sm: "300px" },
                height: { xs: "40px", sm: "50px" },
                mt: "2%",
                "&:hover": {
                  backgroundColor: "#A0730C",
                  color: "black",
                  fontWeight: "bold",
                },
              }}
            >
              <TelegramIcon sx={{ marginRight: 1 }} />
              {contact.buttonChatLau}
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
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
                width={100}
                height={100}
                style={{ borderRadius: "10%" }}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
