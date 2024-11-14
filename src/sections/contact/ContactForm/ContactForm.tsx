"use client";
import { Button, TextField, Typography, Divider, Grid } from '@mui/material';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      style={{ minHeight: '100vh', padding: '16px', marginBottom:"5%" }}
    >
      <ToastContainer />

      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Grid container spacing={3} direction="column" alignItems="center">
          {/* Header */}
          <Grid item >
            <Typography
              variant="h6"
              component="h2"
              style={{
                backgroundColor: '#f3ff73',
                color: 'black',
                padding: '8px 50px',
                borderRadius: '6px',
                fontWeight: 600,
                textAlign: 'center'
              }}
            >
              LET&apos;S BUILD TOGETHER!
            </Typography>
          </Grid>

            <Grid item xs={8}>
            <Image src="/assets/sonrisa pequeña.png" alt="CEO" width={100} height={35} style={{borderRadius:"10%", marginTop:"2%"}} />
            </Grid>

          {/* Action Buttons */}
          <Grid item container spacing={0} direction="column" alignItems="center">
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: '#f3ff73',
                  backgroundColor: 'transparent',
                  color: 'black',
                  borderWidth: 3, // Ancho del borde
                  width: '100%', // Ancho completo del contenedor
                  minWidth: '300px',
                  maxWidth: { xs: '100%', sm: '300px' }, // Máximo ancho responsivo
                  height: { xs: '40px', sm: '50px' }, // Altura responsiva
                  mt: "5%",
                  '&:hover': {
                    backgroundColor: '#f3ff73',
                  },
                }}
              >
                SCHEDULE A MEETING
              </Button>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: '#f3ff73',
                  backgroundColor: 'transparent',
                  color: 'black',
                  borderWidth: 3, // Ancho del borde
                  width: '100%', // Ancho completo del contenedor
                  minWidth: '300px',
                  maxWidth: { xs: '100%', sm: '300px' }, // Máximo ancho responsivo
                  height: { xs: '40px', sm: '50px' }, // Altura responsiva
                  mt: "5%",

                  '&:hover': {
                    backgroundColor: '#f3ff73',
                  },
                }}
              >
                LET&apos;S CHAT
              </Button>
             {/*  <Grid item> */}
            <Typography
              variant="body2"
              style={{
                color: 'black',
                fontWeight: 600,
                textAlign: 'center',
                marginTop: '10%'
              }}
            >
              OR SIMPLY MESSAGE US
            </Typography>
              <Divider sx={{ maxWidth: { xs: '100%', sm: '300px' }}} style={ { backgroundColor: '#f3ff73', marginTop: "5px", padding:"2px", minWidth: '300px',  borderBottomWidth: "inherit" }} />
          {/* </Grid> */}
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
                    style={{
                      width: '100px',
                      borderRadius: '50px',
                      padding: "8px 80px",
                      backgroundColor: 'transparent',
                      color: 'black',
                      border: '1px solid black'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'black';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'black';
                    }}
                  >
                    Submit
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
