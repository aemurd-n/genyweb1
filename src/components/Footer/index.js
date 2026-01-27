import React from "react";
import { Container, Grid, Box } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <MDBox component="footer" sx={{ py: 6, px: 2, backgroundColor: "grey.100" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MDTypography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Geny Systems
            </MDTypography>
            <MDTypography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Enterprise AI Solutions Built For You. Delivering intelligent automation through cutting-edge LLM chatbots, RAG systems, and AI agents.
            </MDTypography>
          </Grid>

          <Grid item xs={12} md={4}>
            <MDTypography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Quick Links
            </MDTypography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MDTypography
                component={RouterLink}
                to="/"
                variant="body2"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Home
              </MDTypography>
              <MDTypography
                component={RouterLink}
                to="/services"
                variant="body2"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Services
              </MDTypography>
              <MDTypography
                component={RouterLink}
                to="/blog"
                variant="body2"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Blog
              </MDTypography>
              <MDTypography
                component={RouterLink}
                to="/faq"
                variant="body2"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                FAQ
              </MDTypography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <MDTypography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Contact
            </MDTypography>
            <MDTypography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Email: info@geny.ai
              <br />
              Ready to transform your business with AI?
            </MDTypography>
          </Grid>
        </Grid>

        <MDBox sx={{ mt: 4, pt: 3, borderTop: "1px solid", borderColor: "grey.300", textAlign: "center" }}>
          <MDTypography variant="body2" sx={{ color: "text.secondary" }}>
            &copy; {new Date().getFullYear()} Geny Systems. All rights reserved.
          </MDTypography>
        </MDBox>
      </Container>
    </MDBox>
  );
}

export default Footer;
