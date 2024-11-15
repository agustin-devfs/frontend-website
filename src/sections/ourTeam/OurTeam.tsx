import { Typography, Card, CardContent, Grid, Divider } from '@mui/material';
import Image from 'next/image';

const teamMembers = [
          { name: "Mateo Levy", role: "Chief Technology Officer" },
          { name: "Carlos Martin", role: "Full Stack Developer" },
          { name: "Fernando Gamba", role: "PHP Developer" },
          { name: "Eugenia Galleguillo", role: "Marketing & Communication" },
          { name: "Ethan Harris", role: "Business Partner" },
          { name: "Augusto Romero", role: "Full Stack Developer" },
          { name: "Miguel Maidana", role: "Full Stack Developer" },
          { name: "Martina Fraga", role: "Marketing & Communication" },
          { name: "Agustin Rodriguez", role: "Software Developer & PM" },
          { name: "Facundo Varela", role: "Full Stack Developer" },
          { name: "Cesar Casas", role: " Cloud Architect" },
          { name: "Milagros Caruso", role: "Sales Development Representative" },
          { name: "Carlos Actis", role: "Full Stack Developer" },
          { name: "Santiago Martinez", role: "Backend Developer" },
          ];

function TeamSection() {
  return (
    <div style={{ color: "black", maxWidth: "1200px", margin: "0 auto", padding: "5rem 1rem" }}>
      <Typography variant="h2" component="h1" gutterBottom style={{ fontWeight: 400, fontSize:'96px', lineHeight:'96px' }}>
        Our Team
      </Typography>
      

      {/* CEO Section */}
      <Card variant="outlined" sx={{color:'black', backgroundColor:"#ededed", border:"#ededed"}} style={{ marginBottom: "3rem", display: "flex"}}>
        <div style={{ width: "30%", padding: "1.5rem" }}>
        <Image src="/assets/CEO.png" alt="CEO" width={150} height={150} style={{borderRadius:"10%"}} />
        </div>
        <div> 
            <CardContent style={{ width: "100%", padding: "1.5rem" }}>
              <Typography variant="h5" component="h2" style={{ fontWeight: 500 }}>
                David Levy
              </Typography>
              <Typography variant="subtitle1" style={{ color: "#A0730C", fontWeight: 500, marginBottom: "1rem" }}>
                Founder & CEO
              </Typography>
              <div style={{ display: "flex", gap: "4rem", marginRight:"4rem"}}>
                <div style={{ flex: 1 }}>
                  <Typography variant="body2" color="textSecondary">
                    With more than 20 years of experience in Technology at Together Devs, we embark on a journey of technological evolution.
                  </Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <Typography variant="body2" color="textSecondary">
                    Innovation is more than just a concept—it's a transformative force reshaping industries and unlocking endless possibilities.
                  </Typography>
                </div>
              </div>
            </CardContent>



        <Divider style={{ backgroundColor: '#fffff', height: '4px', marginLeft:"2rem", width: '90%' }} />

        <CardContent style={{ width: "100%", padding: "1.5rem"}}>

         {/* Team Grid */}
      <Grid container spacing={1}>
      {teamMembers.map((member, index) => (
        <Grid item key={index} xs={10} sm={6} md={3}>
          <div style={{ textAlign: 'left' }}>
            <Typography variant="body1" style={{ fontWeight: 400 }}>
              {member.name}
            </Typography>
            <Typography variant="body2" style={{ color: "#A0730C" }}>
              {member.role}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
    </CardContent>
    </div>
      </Card>

         </div>
  );
}

export default TeamSection;
