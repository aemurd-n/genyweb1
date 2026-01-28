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
import { useTranslation } from "react-i18next";
import StorageIcon from "@mui/icons-material/Storage";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";

const Home = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <MDBox component="main">
      {/* Hero Section */}
      <HeroSection
        title={t('home:hero.title')}
        subtitle={t('home:hero.subtitle')}
        ctaText={t('home:hero.ctaText')}
        ctaLink="/contact"
      />

      {/* What We Do Section */}
      <MDBox sx={{ py: 6, px: 2 }}>
        <Container maxWidth="lg">
          <MDTypography variant="h3" sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}>
            {t('home:sections.whatWeDo')}
          </MDTypography>
          <Grid container spacing={3}>
            {services.map((service) => (
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
            {t('home:sections.whyChoose')}
          </MDTypography>
          <Grid container spacing={3}>
            {benefits.map((benefit) => (
              <Grid item xs={12} sm={6} md={3} key={benefit.id}>
                <BenefitCard benefit={{
                  title: t(`home:benefits.${benefit.translationKey}.title`),
                  description: t(`home:benefits.${benefit.translationKey}.description`)
                }} />
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
                {t('home:sections.advancedRAG.title')}
              </MDTypography>
              <MDTypography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                {t('home:sections.advancedRAG.description')}
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
                {t('common:cta.learnMore')}
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
