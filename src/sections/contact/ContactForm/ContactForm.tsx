"use client";
import React from 'react';
import { Button, TextField, Typography, Divider, Grid, Box } from '@mui/material';
import {toast, ToastContainer } from 'react-toastify';
import Image from 'next/image';
import { contact, link_whatsapp, RESPONSES} from '@/app/core/utils/contants';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, Controller } from 'react-hook-form';

export default function Component() {

  type forms = {
    firstName: string;
    lastName: string;
    phone?: string;
    email: string;
    message: string;
  };

/*   const [open, setOpen] = useState(false);
 */
  const yupSchema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phone: yup.string(),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
      message: yup.string().required('Message is required'),
  })
  .required();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(yupSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    },
  });

 /*  const handleClose = () => {
    setOpen(false);
  }; */

  const onSubmit = async (data:forms) => {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/24068318/1e79e6bb-0122-4556-83aa-beff92640515`,
       {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: data.firstName },
            { name: 'lastname', value: data.lastName },
            { name: 'phone_number', value: data.phone },
            { name: 'email', value: data.email },
            {name: 'message', value: data.message},
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      }
    );

    if (response.ok) {
      toast.success(RESPONSES.SUCCESS);
      reset();
  /*    const newWindow = window.open('https://hubs.ly/Q02Lqqw_0', '_blank');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                 setOpen(true);
     }*/  
    } else {
      toast.error(RESPONSES.FAILED);
    }
  };


  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      style={{ minHeight: '100vh', marginBottom:"1%" }}
    >
      <ToastContainer />

      <Grid item xs={12} sm={8} md={8} lg={6}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb:2,
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
                  maxWidth: { xs: '70%', sm: '300px' }, // Máximo ancho responsivo
                  height: { xs: '40px', sm: '50px' }, // Altura responsiva
                  mt: "2%",
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
                  borderWidth: 3, 
                  width: '100%', 
                  minWidth: '300px',
                  maxWidth: { xs: '70%', sm: '300px' }, 
                  height: { xs: '40px', sm: '50px' }, 
                  mt: "2%",

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
                marginTop: '5%'
              }}
            >
              {contact.text}
            </Typography>
              <Divider sx={{ maxWidth: { xs: '100%', sm: '300px' }}} style={ { backgroundColor: '#A0730C', marginTop: "5px", padding:"2px", minWidth: '300px',  borderBottomWidth: "inherit" }} />
          </Grid>

          {/* Divider with Text */}

          {/* Form */}
          <Grid item spacing={3} direction="column" alignItems="center">
          <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
                container
                direction='column'
                spacing={2}
                sx={{
                  width: '100vw',
                  maxWidth: {xs: '300px', sm:'400px'},
                }}
              >
                <Grid  item xs={12} sm={8} md={8} lg={6} >
                  <Controller
                    name='firstName'
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                      {...field}
                      fullWidth
                      label="First Name"
                      variant="standard"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      InputProps={{
                        disableUnderline: true,
                        style: { borderBottom: '1px solid #333' },
                      }}
                      InputLabelProps={{
                        style: { color: '#333', fontFamily: 'Raleway' },
                      }}
                      />
                    )}
                  />
                </Grid>

                <Grid  item xs={12} sm={8} md={8} lg={6}>
                  <Controller
                    name='lastName'
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                      {...field}
                      fullWidth
                      label="Last Name"
                      variant="standard"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      InputProps={{
                        disableUnderline: true,
                        style: { borderBottom: '1px solid #333' },
                      }}
                      InputLabelProps={{
                        style: { color: '#333', fontFamily: 'Raleway' },
                      }}
                      />
                    )}
                  />
                </Grid>

                <Grid  item xs={12} sm={8} md={8} lg={6}>
                  <Controller
                    name='email'
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                      {...field}
                      fullWidth
                      label="Email"
                      variant="standard"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      InputProps={{
                        disableUnderline: true,
                        style: { borderBottom: '1px solid #333' },
                      }}
                      InputLabelProps={{
                        style: { color: '#333', fontFamily: 'Raleway' },
                      }}
                      />
                    )}
                  />
                </Grid>

                <Grid  item xs={12} sm={8} md={8} lg={6}>
                  <Controller
                    name='phone'
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                      {...field}
                      fullWidth
                      label="Phone"
                      variant="standard"
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      InputProps={{
                        disableUnderline: true,
                        style: { borderBottom: '1px solid #333' },
                      }}
                      InputLabelProps={{
                        style: { color: '#333', fontFamily: 'Raleway' },
                      }}
                      />
                    )}
                  />
                  </Grid>
                  <Grid  item xs={12} sm={8} md={8} lg={6}>

                   <Controller
                    name='message'
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                      {...field}
                      fullWidth
                      label="Message"
                      variant="standard"
                      multiline
                      rows={4}
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      InputProps={{
                        disableUnderline: true,
                        style: { borderBottom: '1px solid #333' },
                      }}
                      InputLabelProps={{
                        style: { color: '#333', fontFamily: 'Raleway' },
                      }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={8} md={8} style={{ textAlign: 'center', marginBottom:'20%'}}>
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
                      backgroundColor: '#eee', 
                      color: '#333',          
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
