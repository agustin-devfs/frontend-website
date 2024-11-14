import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";

interface Project {
  category: string;
  title: string;
  description: string;
  client: string;
  image: string;
}

export default function Component() {
  const projects: Project[] = [
    {
      category: "MEDIA ENTERTAINMENT",
      title: "STREAMING AND SOCIAL INTERACTION PLATFORM",
      description: "We developed an innovative AI-powered streaming platform that revolutionizes content consumption by integrating social interaction and personalized user experiences. This solution increases user engagement, boosts content monetization through multiple models, and provides valuable insights to content owners.",
      client: "Client: AMWTV",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      category: "ECOMMERCE",
      title: "SIMPLE SHOPS",
      description: "We developed a dynamic and scalable platform for Simple Shops, empowering merchants with full control over their online storefronts, from customization to inventory and shipping management. This solution revolutionizes store operations, enabling rapid onboarding, streamlined inventory management, and future-ready scalability.",
      client: "Client: Simple Shops",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      category: "FITNESS",
      title: "FITNESS TRAINING AND MARKETPLACE PLATFORM",
      description: "We developed an advanced fitness marketplace that empowers personal trainers to sell their training programs while providing users with personalized fitness experiences. This solution enhances user engagement, boosts program sales, and fosters a strong fitness community through innovative features and insights.",
      client: "Client: WeMove Training",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      category: "AI",
      title: "AI MEETING ASSISTANT",
      description: "We developed an advanced AI-powered solution acting as a virtual secretary that automates note-taking, task assignment, and follow-ups in real time across web and mobile platforms. This innovative assistant transforms meeting management, increasing efficiency, boosting task completion rates, and enhancing collaboration.",
      client: "Client: North Tier",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      category: "FINTECH",
      title: "PROJECT INTELLIGENT ADVISORS",
      description: "We developed a robust and scalable investment management platform featuring an intuitive web and mobile experience with real-time automated portfolio tracking. This solution transforms investment management, enabling fast user adoption and future-ready scalability.",
      client: "Client: West Side Consulting",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      category: "HEALTHY INDUSTRY",
      title: "AI-DRIVEN VIRTUAL MEDICAL ASSISTANT",
      description: "We developed an innovative AI-Driven Virtual Medical Assistant designed to streamline patient interactions and reduce administrative burdens on healthcare professionals. This solution enhances clinical efficiency, improves patient outcomes, and ensures compliance with healthcare standards through automated follow-ups and intelligent documentation.",
      client: "Client: Horizon Health",
      image: "/public/assets/CEO.png"
    }
  ];

  return (
    <div style={{ padding: "16px" }}>
      <Grid container spacing={0}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  {project.category}
                </Typography>
                <Typography variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
                <Typography variant="subtitle2" color="textPrimary" sx={{ marginTop: "8px" }}>
                  {project.client}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
