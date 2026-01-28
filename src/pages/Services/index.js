import React from "react";
import { Container, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ServiceCard from "components/ServiceCard";
import { services } from "data/services";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation('services');

  return (
    <MDBox component="main">
      {/* Page Header */}
      <MDBox
        sx={{
          py: 6,
          px: 2,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          textAlign: "center"
        }}
      >
        <Container maxWidth="md">
          <MDTypography variant="h2" sx={{ mb: 2, fontWeight: "bold", color: "white !important" }}>
            {t('pageTitle')}
          </MDTypography>
          <MDTypography variant="h6" sx={{ opacity: 0.95, color: "white !important" }}>
            {t('pageSubtitle')}
          </MDTypography>
        </Container>
      </MDBox>

      {/* Services Grid */}
      <MDBox sx={{ py: 8, px: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </MDBox>
    </MDBox>
  );
};

export default Services;
