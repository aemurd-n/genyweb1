import React, { useState } from "react";
import { Container, TextField, Button, Box } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useTranslation } from "react-i18next";

function NewsletterSignup() {
  const { t } = useTranslation('common');
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter signup API call
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <MDBox sx={{ py: 6, px: 2, backgroundColor: "primary.main", color: "white" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <MDTypography variant="h3" sx={{ mb: 2, fontWeight: "bold", color: "white !important" }}>
            {t('newsletter.title')}
          </MDTypography>
          <MDTypography variant="body1" sx={{ mb: 4, opacity: 0.9, color: "white !important" }}>
            {t('newsletter.subtitle')}
          </MDTypography>

          {submitted ? (
            <MDTypography variant="h6" sx={{ color: "white !important" }}>
              {t('newsletter.successMessage')}
            </MDTypography>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                gap: 2,
                maxWidth: "500px",
                margin: "0 auto",
                flexDirection: { xs: "column", sm: "row" }
              }}
            >
              <TextField
                fullWidth
                type="email"
                placeholder={t('newsletter.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  backgroundColor: "white !important",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white !important",
                    "& fieldset": {
                      border: "2px solid #667eea !important"
                    },
                    "&:hover fieldset": {
                      border: "2px solid #764ba2 !important"
                    },
                    "&.Mui-focused fieldset": {
                      border: "3px solid #667eea !important"
                    },
                    "& input": {
                      color: "#000000 !important",
                      fontSize: "1rem",
                      padding: "14px 16px",
                      backgroundColor: "white !important"
                    },
                    "& input::placeholder": {
                      color: "#333333 !important",
                      opacity: "1 !important"
                    }
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#333333 !important",
                    opacity: "1 !important"
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "white !important",
                  color: "#667eea !important",
                  px: 4,
                  whiteSpace: "nowrap",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.95) !important",
                    color: "#667eea !important"
                  }
                }}
              >
                {t('cta.subscribe')}
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </MDBox>
  );
}

export default NewsletterSignup;
