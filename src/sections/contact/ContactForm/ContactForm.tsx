"use client";
import { Button, TextField, Typography, Divider, Grid, Box } from '@mui/material';
import { useState } from 'react';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { contact, link_whatsapp} from '@/app/core/utils/contants';

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = undefined
  /* (e:) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  }; */

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      style={{ minHeight: '100vh', marginBottom:"0.1%" }}
    >
      <ToastContainer />

      <Grid item xs={12} sm={8} md={6} lg={4}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb:4,
        }}
        >
        <Typography
          variant="h6"
          component="h6"
          style={{
            maxWidth: 'fit-content',
            backgroundColor: '#162D4F',
            color: '#F6F6F6',
            padding: '8px 50px',
            borderRadius: '6px',
            fontWeight: 600,
            textAlign: 'center',
          }}
          >
          LET&apos;S BUILD TOGETHER!
        </Typography>
      </Box>
        <Grid container spacing={3} direction="column" alignItems="center">
            <Grid item xs={8}>
            <Image src="/assets/sonrisa pequeña.png" alt="CEO" width={100} height={35} style={{borderRadius:"10%"}} />
            </Grid>

          {/* Action Buttons */}
          <Grid item container spacing={0} direction="column" alignItems="center">
              <Button
                variant="outlined"
                fullWidth
                href={"https://meetings.hubspot.com/david3299"}
                target="_blank" 
                rel="noopener noreferrer"
                sx={{
                  borderColor: '#A0730C',
                  backgroundColor: 'transparent',
                  color: 'black',
                  borderWidth: 3, // Ancho del borde
                  width: '100%', // Ancho completo del contenedor
                  minWidth: '300px',
                  maxWidth: { xs: '100%', sm: '300px' }, // Máximo ancho responsivo
                  height: { xs: '40px', sm: '50px' }, // Altura responsiva
                  mt: "5%",
                  '&:hover': {
                    backgroundColor: '#A0730C',
                    color: 'black',
                    fontWeight:'bold'

                  },
                }}
              >
                {contact.buttonMeet}
              </Button>

              <Button
                variant="outlined"
                 href={link_whatsapp}
                   target="_blank" 
                    rel="noopener noreferrer"
                fullWidth
                sx={{
                  borderColor: '#A0730C',
                  backgroundColor: 'transparent',
                  color: 'black',
                  borderWidth: 3, // Ancho del borde
                  width: '100%', // Ancho completo del contenedor
                  minWidth: '300px',
                  maxWidth: { xs: '100%', sm: '300px' }, // Máximo ancho responsivo
                  height: { xs: '40px', sm: '50px' }, // Altura responsiva
                  mt: "5%",

                  '&:hover': {
                    backgroundColor: '#A0730C',
                     color: 'black',
                    fontWeight:'bold'
                  },
                }}
              >
                {contact.buttonChat}
              </Button>
            <Typography
              variant="body2"
              style={{
                color: 'black',
                fontWeight: 600,
                textAlign: 'center',
                marginTop: '10%'
              }}
            >
              {contact.text}
            </Typography>
              <Divider sx={{ maxWidth: { xs: '100%', sm: '300px' }}} style={ { backgroundColor: '#A0730C', marginTop: "5px", padding:"2px", minWidth: '300px',  borderBottomWidth: "inherit" }} />
          </Grid>

          {/* Divider with Text */}

          {/* Form */}
          <Grid item spacing={3} direction="column" alignItems="center">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="standard"
                    fullWidth
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="standard"
                    fullWidth
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Phone"
                    type="tel"
                    variant="standard"
                    fullWidth
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="standard"
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: '100px',
                    borderRadius: '50px',
                    padding: '16px 80px',
                    backgroundColor: '#333',
                    color: '#fff',
                    border: '1px solid black',
                    marginTop: '10%',
                    transition: 'background-color 0.3s, color 0.3s',
                    '&:hover': {
                      backgroundColor: '#eee', // Fondo claro en hover
                      color: '#333',            // Texto oscuro en hover
                    },
                  }}
                >
                  {contact.buttonSubmit}
                </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
