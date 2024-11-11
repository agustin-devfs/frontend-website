import { Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";
import Image from "next/image";

export default function Component() {
  const projects = [
    {
      category: "MEDIA ENTERTAINMENT",
      title: "STREAMING AND SOCIAL INTERACTION PLATFORM",
      description: "We developed an innovative AI-powered streaming platform for AMPTV that revolutionizes content consumption by integrating social interaction and personalized recommendations. This solution includes content management, boosts content monetization through machine models, and provides valuable insights to content owners.",
      client: "Client: AMPTV",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      category: "ECOMMERCE",
      title: "SIMPLE SHOPS",
      description: "We developed a comprehensive e-commerce platform for Simple Shops, empowering merchants with full control over their online storefronts, from customization to inventory and shipping management. This solution includes advanced reporting, real-time tracking, and future-ready scalability.",
      client: "Client: Simple Shops",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      category: "FITNESS",
      title: "FITNESS TRAINING AND MARKETPLACE PLATFORM",
      description: "We developed an advanced fitness empowers personal trainers to run their business efficiently while providing users with personalized fitness experiences. This solution includes user engagement, booking management, and comprehensive analytics through innovative features and insights.",
      client: "Client: WorkDay Training",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      category: "AI",
      title: "AI MEETING ASSISTANT",
      description: "We developed an advanced AI-powered solution for North Ten that streamlines meeting scheduling, agenda creation, task assignment, and follow-ups in real time across web and mobile platforms. This innovative solution transforms meeting management, boosting efficiency, tracking task completion and generating actionable insights while reducing human error.",
      client: "Client: North Ten",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      category: "FINTECH",
      title: "PROJECT INTELLIGENT ADVISORS",
      description: "We developed a robust and scalable investment management platform for West Side Consulting, featuring an intuitive web and mobile interface with comprehensive client and portfolio tracking. This solution transforms investment management, enhances client user adoption and future-ready scalability.",
      client: "Client: West Side Consulting",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      category: "HEALTH INDUSTRY",
      title: "AI-DRIVEN VIRTUAL MEDICAL ASSISTANT",
      description: "We developed an innovative AI-Driven Virtual Medical Assistant (VMA) for Horizon Health that uses proprietary patient interaction technology to assist healthcare professionals. This solution enhances clinical efficiency, improves patient experience, and delivers through innovative healthcare analytics through predictive analytics.",
      client: "Client: Horizon Health",
      image: "/placeholder.svg?height=300&width=400"
    }
  ];

  return (
    <Container maxWidth="lg" style={{ padding: '24px' }}>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} sx={{ overflow: 'hidden', transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
              <CardMedia sx={{ position: 'relative', height: 0, paddingTop: '56.25%' }}>
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              </CardMedia>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  {project.category}
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {project.client}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
