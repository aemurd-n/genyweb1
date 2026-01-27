import React from "react";
import { Container, Grid, Card, CardContent, Box, Button, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import HeroSection from "components/HeroSection";
import ServiceCard from "components/ServiceCard";
import BenefitCard from "components/BenefitCard";
import NewsletterSignup from "components/NewsletterSignup";
import { services } from "data/services";
import { benefits } from "data/benefits";
import StorageIcon from "@mui/icons-material/Storage";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";

const Home = () => {
  return (
    <MDBox component="main">
      {/* Hero Section */}
      <HeroSection
        title="Enterprise AI Solutions Built For You"
        subtitle="Geny Systems delivers intelligent automation through cutting-edge LLM chatbots, RAG systems, and AI agents—tailored for enterprises and innovative startups."
        ctaText="Contact Sales"
        ctaLink="/contact"
      />

      {/* What We Do Section */}
      <MDBox sx={{ py: 6, px: 2 }}>
        <Container maxWidth="lg">
          <MDTypography variant="h3" sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}>
            What We Do
          </MDTypography>
          <Grid container spacing={3}>
            {services.slice(0, 5).map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </MDBox>

      {/* Why Choose Us Section */}
      <MDBox sx={{ py: 6, px: 2, backgroundColor: "rgba(224, 245, 254, 0.3)" }}>
        <Container maxWidth="lg">
          <MDTypography variant="h3" sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}>
            Why Choose Geny Systems
          </MDTypography>
          <Grid container spacing={3}>
            {benefits.map((benefit) => (
              <Grid item xs={12} sm={6} md={3} key={benefit.id}>
                <BenefitCard benefit={benefit} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </MDBox>

      {/* Featured Service Spotlight */}
      <MDBox sx={{ py: 6, px: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MDTypography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                Advanced RAG Systems
              </MDTypography>
              <MDTypography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                Our Retrieval-Augmented Generation systems provide context-aware responses by combining the power of large language models with your proprietary data. Achieve higher accuracy and relevance in every interaction.
              </MDTypography>
              <Button
                variant="contained"
                color="primary"
                href="/services/rag"
                sx={{
                  color: "white !important",
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    color: "white !important"
                  }
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <StorageIcon sx={{ fontSize: 120, color: "primary.main" }} />
            </Grid>
          </Grid>
        </Container>
      </MDBox>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </MDBox>
  );
};

export default Home;
