import React, { useState } from "react";
import { Container, Accordion, AccordionSummary, AccordionDetails, Button, Box } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation(['faq', 'common']);
  const [expanded, setExpanded] = useState(false);

  const faqItems = t('faq:items', { returnObjects: true });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <MDBox component="main" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <MDTypography variant="h3" sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}>
          {t('faq:pageTitle')}
        </MDTypography>
        <MDTypography variant="body1" sx={{ mb: 6, textAlign: "center", color: "text.secondary" }}>
          {t('faq:pageSubtitle')}
        </MDTypography>

        <MDBox sx={{ mb: 6 }}>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ mb: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <MDTypography variant="h6" sx={{ fontWeight: 600 }}>
                  {item.question}
                </MDTypography>
              </AccordionSummary>
              <AccordionDetails>
                <MDTypography variant="body2" sx={{ lineHeight: 1.8 }}>
                  {item.answer}
                </MDTypography>
              </AccordionDetails>
            </Accordion>
          ))}
        </MDBox>

        {/* CTA Section */}
        <MDBox sx={{ textAlign: "center", backgroundColor: "rgba(14, 165, 233, 0.1)", p: 4, borderRadius: 2 }}>
          <MDTypography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            {t('faq:cta.title')}
          </MDTypography>
          <MDTypography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            {t('faq:cta.subtitle')}
          </MDTypography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            sx={{
              color: "white !important",
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
                color: "white !important"
              }
            }}
          >
            {t('common:cta.contactSales')}
          </Button>
        </MDBox>
      </Container>
    </MDBox>
  );
};

export default FAQ;
