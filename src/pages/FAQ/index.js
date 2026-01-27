import React, { useState } from "react";
import { Container, Accordion, AccordionSummary, AccordionDetails, Button, Box } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as RouterLink } from "react-router-dom";
import { faqItems } from "data/faq";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <MDBox component="main" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <MDTypography variant="h3" sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}>
          Frequently Asked Questions
        </MDTypography>
        <MDTypography variant="body1" sx={{ mb: 6, textAlign: "center", color: "text.secondary" }}>
          Find answers to common questions about our services and solutions
        </MDTypography>

        <MDBox sx={{ mb: 6 }}>
          {faqItems.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === `panel${item.id}`}
              onChange={handleChange(`panel${item.id}`)}
              sx={{ mb: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${item.id}-content`}
                id={`panel${item.id}-header`}
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
            Still have questions?
          </MDTypography>
          <MDTypography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            Our team is ready to help. Get in touch with us for a consultation.
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
            Contact Sales
          </Button>
        </MDBox>
      </Container>
    </MDBox>
  );
};

export default FAQ;
