'use client'
import { Typography, Card, CardContent, Grid, Divider, Box } from '@mui/material';
import Image from 'next/image';
import {ceo, teamMembers} from '@/app/core/utils/contants'


function TeamSection() {
  return (
    <Box style={{ color: "black", maxWidth: "1200px", margin: "0 auto", padding: "5rem 1rem" }}>
      <Typography variant="h2" component="h1" gutterBottom style={{ fontWeight: 400, fontSize:'96px', lineHeight:'96px' }}>
        Our Team
      </Typography>
      

      {/* CEO Section */}
      <Card variant="outlined" sx={{color:'black', backgroundColor:"#F9F9F9", border:"#ededed"}} style={{ marginBottom: "3rem", display: "flex"}}>
        <div style={{ width: "30%", padding: "1.5rem" }}>
        <Image src="/assets/CEO.png" alt="CEO" width={200} height={200} style={{borderRadius:"10%"}} />
        </div>
        <div> 
            <CardContent style={{ width: "100%", padding: "3.5rem" }}>
              <Typography variant="h5" component="h2" style={{ fontWeight: 500 }}>
                {ceo.owner}
              </Typography>
              <Typography variant="subtitle1" style={{ /* color: "#A0730C",  */ color:"000000", fontWeight: 500, marginBottom: "1rem" }}>
                {ceo.title}
              </Typography>
              <div style={{ display: "flex", gap: "4rem", marginRight:"4rem"}}>
                <div style={{ flex: 1 }}>
                  <Typography variant="body2" color="textSecondary">
                    {ceo.text1}
                  </Typography>
                </div>
                <div style={{ flex: 1 }}>
                  <Typography variant="body2" color="textSecondary">
                    {ceo.text2}
                  </Typography>
                </div>
              </div>
            </CardContent>



        <Divider style={{ backgroundColor: '#fffff', height: '4px', marginLeft:"2rem", width: '90%' }} />

        <CardContent style={{ width: "100%", padding: "1.5rem"}}>

         {/* Team Grid */}
         <Grid container spacing={1}>
  {Array.from({ length: Math.ceil(teamMembers.length / 4) }).map((_, colIndex) => (
    <Grid item key={colIndex} xs={12} sm={6} md={3}>
      <div style={{ textAlign: 'left' }}>
        {teamMembers
          .slice(colIndex * 4, colIndex * 4 + 4)
          .map((member, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <Typography variant="body1" style={{ fontWeight: 400 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" style={{  /* color: "#A0730C",  */ color:"000000",  }}>
                {member.role}
              </Typography>
            </div>
          ))}
      </div>
    </Grid>
  ))}
</Grid>

    </CardContent>
    </div>
      </Card>

         </Box>
  );
}

export default TeamSection;
