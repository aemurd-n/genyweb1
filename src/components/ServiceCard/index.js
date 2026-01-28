import React from "react";
import { Card, CardContent, Box, Button } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ service }) => {
  const { t } = useTranslation('services');
  const Icon = service.icon;

  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "0 4px 6px rgba(0,0,0,0.07)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          boxShadow: "0 12px 24px rgba(103, 58, 183, 0.2)",
          transform: "translateY(-8px)",
          "& .service-icon": {
            transform: "scale(1.1) rotate(5deg)",
            color: "secondary.main"
          }
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <MDBox sx={{ mb: 2 }}>
          <Icon
            className="service-icon"
            sx={{
              fontSize: 56,
              color: "primary.main",
              transition: "all 0.3s ease"
            }}
          />
        </MDBox>
        <MDTypography variant="h5" sx={{ mb: 1.5, fontWeight: "bold", color: "text.primary" }}>
          {t(`${service.translationKey}.name`)}
        </MDTypography>
        <MDTypography variant="body2" sx={{ mb: 3, color: "text.secondary", lineHeight: 1.6 }}>
          {t(`${service.translationKey}.description`)}
        </MDTypography>
        <Button
          component={RouterLink}
          to={`/services/${service.id}`}
          variant="contained"
          color="primary"
          size="small"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            px: 3,
            color: "white !important",
            backgroundColor: "primary.main",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "primary.dark",
              color: "white !important"
            }
          }}
        >
          {t('common:cta.learnMore')} →
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
