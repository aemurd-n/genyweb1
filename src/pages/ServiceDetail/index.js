import React from "react";
import { Container, Grid, Card, CardContent, Button, Box } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useParams } from "react-router-dom";
import { services, serviceDetails } from "data/services";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  const details = serviceDetails[id] || {};

  if (!service) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <MDTypography variant="h4">Service not found</MDTypography>
      </Container>
    );
  }

  const Icon = service.icon;

  return (
    <MDBox component="main" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <MDBox sx={{ mb: 6, textAlign: "center" }}>
          <Icon sx={{ fontSize: 80, color: "primary.main", mb: 2 }} />
          <MDTypography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
            {service.name}
          </MDTypography>
          <MDTypography variant="h6" sx={{ color: "text.secondary" }}>
            {details.description}
          </MDTypography>
        </MDBox>

        {/* Description */}
        <MDBox sx={{ mb: 6, textAlign: "justify" }}>
          <MDTypography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: "pre-wrap", mb: 4 }}>
            {service.fullDescription}
          </MDTypography>
        </MDBox>

        {/* Use Cases */}
        <MDBox sx={{ mb: 6 }}>
          <MDTypography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
            Use Cases
          </MDTypography>
          <Grid container spacing={3}>
            {details.useCases &&
              details.useCases.map((useCase, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <MDTypography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                        {useCase.title}
                      </MDTypography>
                      <MDTypography variant="body2" sx={{ color: "text.secondary" }}>
                        {useCase.desc}
                      </MDTypography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </MDBox>

        {/* Benefits */}
        <MDBox sx={{ mb: 6 }}>
          <MDTypography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
            Key Benefits
          </MDTypography>
          <Grid container spacing={2}>
            {service.benefits &&
              service.benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <MDBox sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ color: "primary.main", mt: 0.5 }}>✓</Box>
                    <MDTypography variant="body1">{benefit}</MDTypography>
                  </MDBox>
                </Grid>
              ))}
          </Grid>
        </MDBox>

        {/* CTA */}
        <MDBox sx={{ textAlign: "center", backgroundColor: "rgba(14, 165, 233, 0.1)", p: 4, borderRadius: 2 }}>
          <MDTypography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Ready to get started?
          </MDTypography>
          <Button variant="contained" color="primary" href="/contact">
            Contact Our Team
          </Button>
        </MDBox>
      </Container>
    </MDBox>
  );
};

export default ServiceDetail;
