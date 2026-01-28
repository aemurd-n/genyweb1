import React, { useState } from "react";
import { Container, Grid, TextField, Button, Card, CardContent, Box } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:info@geny.ai?subject=${subject}&body=${body}`;

    // Open user's email client
    window.location.href = mailtoLink;

    // Show success message
    setStatus({
      type: "success",
      message: t('form.successMessage')
    });

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setStatus({ type: "", message: "" });
    }, 3000);
  };

  return (
    <MDBox sx={{ py: 8, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <MDBox sx={{ mb: 6, textAlign: "center" }}>
          <MDTypography variant="h2" sx={{ mb: 2, fontWeight: "bold", color: "text.primary" }}>
            {t('pageTitle')}
          </MDTypography>
          <MDTypography variant="h6" sx={{ color: "text.secondary" }}>
            {t('pageSubtitle')}
          </MDTypography>
        </MDBox>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                {status.message && (
                  <Box
                    sx={{
                      mb: 3,
                      p: 2,
                      borderRadius: 1,
                      backgroundColor: status.type === "success" ? "success.light" : "error.light",
                      color: status.type === "success" ? "success.dark" : "error.dark"
                    }}
                  >
                    <MDTypography variant="body2">{status.message}</MDTypography>
                  </Box>
                )}
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        label={t('form.fullName')}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        type="email"
                        label={t('form.email')}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={t('form.company')}
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={6}
                        label={t('form.message')}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('form.messagePlaceholder')}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        sx={{
                          py: 1.5,
                          color: "white !important"
                        }}
                      >
                        {t('form.submitButton')}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <MDBox sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <EmailIcon sx={{ fontSize: 30, color: "primary.main", mr: 2 }} />
                    <Box>
                      <MDTypography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
                        {t('cards.emailUs.title')}
                      </MDTypography>
                      <MDTypography variant="body2" sx={{ color: "text.secondary" }}>
                        {t('cards.emailUs.subtitle')}
                      </MDTypography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <PhoneIcon sx={{ fontSize: 30, color: "primary.main", mr: 2 }} />
                    <Box>
                      <MDTypography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
                        {t('cards.callUs.title')}
                      </MDTypography>
                      <MDTypography variant="body2" sx={{ color: "text.secondary" }}>
                        {t('cards.callUs.subtitle')}
                      </MDTypography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                <CardContent sx={{ p: 3 }}>
                  <MDTypography variant="h6" sx={{ color: "white", fontWeight: "bold", mb: 1 }}>
                    {t('cards.enterprise.title')}
                  </MDTypography>
                  <MDTypography variant="body2" sx={{ color: "white", opacity: 0.9 }}>
                    {t('cards.enterprise.subtitle')}
                  </MDTypography>
                </CardContent>
              </Card>
            </MDBox>
          </Grid>
        </Grid>
      </Container>
    </MDBox>
  );
};

export default Contact;
