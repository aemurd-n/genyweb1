import React from "react";
import { Container, Button, Box } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link as RouterLink } from "react-router-dom";

function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <MDBox
      sx={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        py: 6,
        px: 2
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <MDTypography
            variant="h1"
            sx={{
              mb: 2.5,
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "white !important"
            }}
          >
            {title}
          </MDTypography>
          <MDTypography
            variant="h5"
            sx={{
              mb: 3.5,
              lineHeight: 1.6,
              opacity: 0.95,
              color: "white !important",
              fontSize: { xs: "1.1rem", md: "1.25rem" }
            }}
          >
            {subtitle}
          </MDTypography>
          {ctaText && ctaLink && (
            <Button
              component={RouterLink}
              to={ctaLink}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "white !important",
                color: "#667eea !important",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.95) !important",
                  color: "#667eea !important",
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
                },
                transition: "all 0.3s ease"
              }}
            >
              {ctaText}
            </Button>
          )}
        </Box>
      </Container>
    </MDBox>
  );
}

export default HeroSection;
