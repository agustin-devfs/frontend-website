import { Card, CardContent, Typography, Grid2 } from "@mui/material";
import Image from "next/image";

export default function OurTeam() {
  const teamMembers = [
    { name: "Mateo Levy", role: "Chief Operating Office" },
    { name: "Carlos Martin", role: "Full-stack Developer" },
    { name: "Fernando Gamba", role: "Full-stack Developer" },
    { name: "Eugenia Galleguillio", role: "Marketing & Communication" },
    { name: "Ethan Harris", role: "Software Developer" },
    { name: "Agustin Rodriguez", role: "Software Developer & PM" },
    { name: "Miguel Maidana", role: "Full-stack Developer" },
    { name: "César Casas", role: "Cloud / DB Architect" },
    { name: "Carlos Acita", role: "Full-stack Developer" },
    { name: "Facundo Varela", role: "Full-stack Developer" },
    { name: "Santiago Martinez", role: "Full-stack Developer" },
    { name: "Martina Fraga", role: "Marketing & Communication" }
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1rem" }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ fontWeight: 500 }}>
        Our Team
      </Typography>

      {/* CEO Section */}
      <Card variant="outlined" style={{ marginBottom: "3rem" }}>
        <CardContent style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "1.5rem" }}>
          <div style={{ width: "128px", height: "128px", position: "relative", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
            <Image
              src="/public/assets/CEO.avif"
              alt="David Levy"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Typography variant="h5" component="h2" style={{ fontWeight: 500 }}>
              David Levy
            </Typography>
            <Typography variant="subtitle1" style={{ color: "#FB8C00", fontWeight: 500, marginBottom: "1rem" }}>
              Founder & CEO
            </Typography>
            <Typography variant="body2" color="textSecondary">
              With more than 20 years of experience in Technology at Together Devs, we embark on a journey of technological evolution, where innovation is more than just a concept—it's a transformative force reshaping industries and unlocking endless possibilities.
            </Typography>
          </div>
        </CardContent>
      </Card>

      {/* Team Grid */}
      <Grid2 container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid2 key={index}>
            <div>
              <Typography variant="body1" style={{ fontWeight: 500 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" style={{ color: "#FB8C00" }}>
                {member.role}
              </Typography>
            </div>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}
