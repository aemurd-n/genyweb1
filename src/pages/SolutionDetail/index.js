import React from "react";
import {
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useParams, Link as RouterLink } from "react-router-dom";
import { solutions } from "data/solutions";
import { useTranslation } from "react-i18next";
import FeatureCard from "components/FeatureCard";
import PricingTable from "components/PricingTable";
import SEOHead from "components/SEOHead";

const SolutionDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation(['solutions', 'common']);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const solution = solutions.find((s) => s.id === id);

  if (!solution) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <MDTypography variant="h4" sx={{ color: "#344767 !important" }}>
          {t('common:common.serviceNotFound')}
        </MDTypography>
      </Container>
    );
  }

  const key = solution.translationKey;
  const features = t(`solutions:${key}.features.items`, { returnObjects: true });
  const steps = t(`solutions:${key}.howItWorks.steps`, { returnObjects: true });
  const tiers = t(`solutions:${key}.pricing.tiers`, { returnObjects: true });
  const integrations = t(`solutions:${key}.integrations.items`, { returnObjects: true });

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": t(`solutions:${key}.name`),
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": solution.externalUrl,
    "description": t(`solutions:${key}.meta.description`),
    "offers": Array.isArray(tiers) ? tiers.map((tier) => ({
      "@type": "Offer",
      "name": tier.name,
      "price": String(tier.monthlyPrice),
      "priceCurrency": t(`solutions:${key}.pricing.currency`),
    })) : [],
    "provider": {
      "@type": "Organization",
      "name": "Geny Systems",
      "url": "https://geny.ai"
    }
  };

  return (
    <MDBox component="main">
      <SEOHead
        title={t(`solutions:${key}.meta.title`)}
        description={t(`solutions:${key}.meta.description`)}
        canonicalPath={`/solutions/${id}`}
        jsonLd={jsonLd}
      />

      {/* Section 1: Hero */}
      <MDBox
        sx={{
          py: { xs: 8, md: 12 },
          px: 2,
          background: solution.accentGradient,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <MDTypography
            variant="h1"
            sx={{ mb: 2, fontWeight: 800, color: "#ffffff !important", letterSpacing: "-0.02em" }}
          >
            {t(`solutions:${key}.name`)}
          </MDTypography>
          <MDTypography
            variant="h4"
            sx={{ mb: 2, opacity: 0.95, color: "#ffffff !important", fontWeight: 400 }}
          >
            {t(`solutions:${key}.hero.tagline`)}
          </MDTypography>
          <MDTypography
            variant="body1"
            sx={{
              mb: 5,
              opacity: 0.9,
              color: "#ffffff !important",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.7
            }}
          >
            {t(`solutions:${key}.hero.subtitle`)}
          </MDTypography>
          <MDBox sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
            <Button
              href={solution.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                borderRadius: "10px",
                backgroundColor: "#ffffff !important",
                color: `${solution.accentColor} !important`,
                boxShadow: "0 4px 14px rgba(0,0,0,0.15) !important",
                "&:hover": {
                  backgroundColor: "#f5f5f5 !important",
                  color: `${solution.accentColor} !important`,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2) !important",
                  transform: "translateY(-1px)"
                }
              }}
            >
              {t(`solutions:${key}.hero.ctaPrimary`)}
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                borderRadius: "10px",
                borderColor: "rgba(255,255,255,0.7) !important",
                borderWidth: "2px !important",
                color: "#ffffff !important",
                backgroundColor: "transparent !important",
                "&:hover": {
                  borderColor: "#ffffff !important",
                  backgroundColor: "rgba(255,255,255,0.1) !important",
                  color: "#ffffff !important"
                }
              }}
            >
              {t(`solutions:${key}.hero.ctaSecondary`)}
            </Button>
          </MDBox>
        </Container>
      </MDBox>

      {/* Section 2: Features Grid */}
      <MDBox sx={{ py: 8, px: 2, backgroundColor: "#f8f9fa !important" }}>
        <Container maxWidth="lg">
          <MDTypography
            variant="h3"
            sx={{ mb: 1, fontWeight: "bold", textAlign: "center", color: "#344767 !important" }}
          >
            {t(`solutions:${key}.features.sectionTitle`)}
          </MDTypography>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {Array.isArray(features) && features.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard
                  title={item.title}
                  description={item.description}
                  iconName={item.icon}
                  accentColor={solution.accentColor}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </MDBox>

      {/* Section 3: How It Works */}
      <MDBox sx={{ py: 8, px: 2, backgroundColor: "#ffffff !important" }}>
        <Container maxWidth="lg">
          <MDTypography
            variant="h3"
            sx={{ mb: 6, fontWeight: "bold", textAlign: "center", color: "#344767 !important" }}
          >
            {t(`solutions:${key}.howItWorks.sectionTitle`)}
          </MDTypography>
          {Array.isArray(steps) && (
            <MDBox
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: isMobile ? 4 : 2,
                position: "relative",
              }}
            >
              {/* Connecting line for desktop */}
              {!isMobile && steps.length > 1 && (
                <MDBox
                  sx={{
                    position: "absolute",
                    top: 24,
                    left: "10%",
                    right: "10%",
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${solution.accentColor}30, ${solution.accentColor}30, transparent)`,
                    zIndex: 0,
                  }}
                />
              )}
              {steps.map((step, index) => (
                <MDBox
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "row" : "column",
                    alignItems: isMobile ? "flex-start" : "center",
                    flex: isMobile ? "none" : 1,
                    textAlign: isMobile ? "left" : "center",
                    gap: isMobile ? 2 : 0,
                    position: "relative",
                  }}
                >
                  <MDBox
                    sx={{
                      width: 48,
                      height: 48,
                      minWidth: 48,
                      borderRadius: "50%",
                      backgroundColor: `${solution.accentColor} !important`,
                      color: "#ffffff !important",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      mb: isMobile ? 0 : 2,
                      boxShadow: `0 4px 14px ${solution.accentColor}40`,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {step.step || index + 1}
                  </MDBox>
                  <MDBox>
                    <MDTypography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 0.5, color: "#344767 !important" }}
                    >
                      {step.title}
                    </MDTypography>
                    <MDTypography
                      variant="body2"
                      sx={{ color: "#7b809a !important", maxWidth: isMobile ? "none" : 180, lineHeight: 1.6 }}
                    >
                      {step.description}
                    </MDTypography>
                  </MDBox>
                </MDBox>
              ))}
            </MDBox>
          )}
        </Container>
      </MDBox>

      {/* Section 4: Pricing */}
      <MDBox sx={{ py: 8, px: 2, backgroundColor: "#f8f9fa !important" }}>
        <Container maxWidth="lg">
          <MDTypography
            variant="h3"
            sx={{ mb: 1, fontWeight: "bold", textAlign: "center", color: "#344767 !important" }}
          >
            {t(`solutions:${key}.pricing.sectionTitle`)}
          </MDTypography>
          <MDTypography
            variant="body1"
            sx={{ mb: 4, textAlign: "center", color: "#7b809a !important" }}
          >
            {t(`solutions:${key}.pricing.sectionSubtitle`)}
          </MDTypography>
          {Array.isArray(tiers) && (
            <PricingTable
              tiers={tiers}
              currency={t(`solutions:${key}.pricing.currency`)}
              perMonth={t(`solutions:${key}.pricing.perMonth`)}
              externalUrl={solution.externalUrl}
              accentColor={solution.accentColor}
              mostPopularLabel={t(`solutions:${key}.pricing.mostPopular`)}
            />
          )}
        </Container>
      </MDBox>

      {/* Section 5: Integrations */}
      <MDBox sx={{ py: 8, px: 2, backgroundColor: "#ffffff !important" }}>
        <Container maxWidth="lg">
          <MDTypography
            variant="h3"
            sx={{ mb: 1, fontWeight: "bold", textAlign: "center", color: "#344767 !important" }}
          >
            {t(`solutions:${key}.integrations.sectionTitle`)}
          </MDTypography>
          <MDTypography
            variant="body1"
            sx={{ mb: 4, textAlign: "center", color: "#7b809a !important" }}
          >
            {t(`solutions:${key}.integrations.sectionSubtitle`)}
          </MDTypography>
          <MDBox sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
            {Array.isArray(integrations) && integrations.map((integration, index) => (
              <Card
                key={index}
                sx={{
                  p: 3,
                  textAlign: "center",
                  minWidth: 160,
                  flex: "0 1 auto",
                  backgroundColor: "#ffffff !important",
                  backgroundImage: "none !important",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04) !important",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: `${solution.accentColor} !important`,
                    boxShadow: `0 4px 16px rgba(25, 118, 210, 0.12) !important`,
                    transform: "translateY(-2px)"
                  }
                }}
              >
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  <MDTypography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 0.5, color: "#344767 !important" }}
                  >
                    {integration.name}
                  </MDTypography>
                  <MDTypography
                    variant="body2"
                    sx={{ color: "#7b809a !important" }}
                  >
                    {integration.description}
                  </MDTypography>
                </CardContent>
              </Card>
            ))}
          </MDBox>
        </Container>
      </MDBox>

      {/* Section 6: Final CTA */}
      <MDBox
        sx={{
          py: 8,
          px: 2,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(ellipse at 70% 80%, rgba(255,255,255,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <MDTypography
            variant="h3"
            sx={{ mb: 2, fontWeight: "bold", color: "#ffffff !important" }}
          >
            {t(`solutions:${key}.cta.sectionTitle`)}
          </MDTypography>
          <MDTypography
            variant="body1"
            sx={{ mb: 4, opacity: 0.9, color: "#ffffff !important" }}
          >
            {t(`solutions:${key}.cta.sectionSubtitle`)}
          </MDTypography>
          <MDBox sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
            <Button
              href={solution.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                borderRadius: "10px",
                backgroundColor: "#ffffff !important",
                color: `${solution.accentColor} !important`,
                boxShadow: "0 4px 14px rgba(0,0,0,0.15) !important",
                "&:hover": {
                  backgroundColor: "#f5f5f5 !important",
                  color: `${solution.accentColor} !important`,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2) !important",
                  transform: "translateY(-1px)"
                }
              }}
            >
              {t(`solutions:${key}.cta.ctaPrimary`)}
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                borderRadius: "10px",
                borderColor: "rgba(255,255,255,0.7) !important",
                borderWidth: "2px !important",
                color: "#ffffff !important",
                backgroundColor: "transparent !important",
                "&:hover": {
                  borderColor: "#ffffff !important",
                  backgroundColor: "rgba(255,255,255,0.1) !important",
                  color: "#ffffff !important"
                }
              }}
            >
              {t(`solutions:${key}.cta.ctaSecondary`)}
            </Button>
          </MDBox>
        </Container>
      </MDBox>
    </MDBox>
  );
};

export default SolutionDetail;
