import React from "react";
import { Container, Grid, Box } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation('common');
  return (
    <MDBox component="footer" sx={{ py: 6, px: 2, backgroundColor: "grey.100" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MDTypography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              {t('footer.companyName')}
            </MDTypography>
            <MDTypography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {t('footer.description')}
            </MDTypography>
          </Grid>

          <Grid item xs={12} md={4}>
            <MDTypography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              {t('footer.quickLinks')}
            </MDTypography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MDTypography
                component={RouterLink}
                to="/"
                variant="body2"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                {t('nav.home')}
              </MDTypography>
              <MDTypography
                component={RouterLink}
                to="/services"
                variant="body2"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                {t('nav.services')}
              </MDTypography>
              <MDTypography
                component={RouterLink}
                to="/blog"
                variant="body2"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                {t('nav.blog')}
              </MDTypography>
              <MDTypography
                component={RouterLink}
                to="/faq"
                variant="body2"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                {t('nav.faq')}
              </MDTypography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <MDTypography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              {t('footer.contactTitle')}
            </MDTypography>
            <MDTypography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {t('footer.email')}
              <br />
              {t('footer.readyToTransform')}
            </MDTypography>
          </Grid>
        </Grid>

        <MDBox sx={{ mt: 4, pt: 3, borderTop: "1px solid", borderColor: "grey.300", textAlign: "center" }}>
          <MDTypography variant="body2" sx={{ color: "text.secondary" }}>
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </MDTypography>
        </MDBox>
      </Container>
    </MDBox>
  );
}

export default Footer;
