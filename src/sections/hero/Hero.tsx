import { Typography } from '@mui/material';
import Image from 'next/image';

function HeroSection() {
  return (
    <div style={{
      color: "black",
      margin: "0 auto",
      padding: "5rem 1rem",
      position: "relative",
      textAlign: "center",
      
    }}>

<div style={{
      position: "absolute",
      top: "10%",
      left: "10%",

      }}>

      <Typography variant="h2" component="h1" style={{
        fontFamily: 'Raleway',
        fontWeight: 400,
        fontSize: '96px',
        lineHeight: '128px',
        textAlign:'left',
        textUnderlinePosition:'from-font',
        textDecorationSkipInk:'none',
      }}>
        {"We Develop Ideas into"}
      </Typography>
      <Typography variant="h2" component="h1" gutterBottom style={{
        fontFamily: 'Raleway',
        fontWeight: 400,
        fontSize: '96px',
        lineHeight: '128px',
        marginBottom: '2rem',
        textAlign:'left',
        textUnderlinePosition:'from-font',
        textDecorationSkipInk:'none',
      }}>
        {"Thriving Digital Experiences"}
      </Typography>

      </div>
      
      <div style={{
        position: "absolute",
        top: "250%",
        left: "55%",
        zIndex: 1,
        overflow: "hidden",
      }}>

      <Typography variant="h2" component="h1" gutterBottom style={{
        fontWeight: 500,
        fontSize: '34px',
        backgroundColor: '#f3ff73',
        color: 'black',
        padding: '8px 50px',
        borderRadius: '6px',
        display: 'inline-block',
        textAlign: 'center',
        marginBottom: '3rem',
      }}>
        {"READY TO BUILD TOGETHER?"}
      </Typography>
        </div>

      <div style={{
        position: "absolute",
        top: "370%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: -1,
        overflow: "hidden",
      }}>
        <Image
          src="/sonrisa gigante dorada.svg"
          alt="SmileIcon"
          loading="lazy"
          width={1600}
          height={600}
        />
      </div>
    </div>
  );
}

export default HeroSection;

