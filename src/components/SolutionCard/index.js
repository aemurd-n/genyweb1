import React from "react";
import { Card, CardContent, Button } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SolutionCard = ({ solution }) => {
  const { t } = useTranslation('solutions');
  const Icon = solution.icon;
  const isExternal = Boolean(solution.external && solution.externalUrl);
  const linkProps = isExternal
    ? { component: "a", href: solution.externalUrl, target: "_blank", rel: "noopener noreferrer" }
    : { component: RouterLink, to: `/solutions/${solution.id}` };

  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: "#ffffff !important",
        backgroundImage: "none !important",
        borderTop: `4px solid ${solution.accentColor}`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06) !important",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: "0 6px 20px rgba(0,0,0,0.12) !important",
          transform: "translateY(-2px)"
        }
      }}
    >
      <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
        <MDBox sx={{ mb: 2 }}>
          <Icon
            className="solution-icon"
            sx={{
              fontSize: 56,
              color: `${solution.accentColor} !important`,
              transition: "all 0.3s ease"
            }}
          />
        </MDBox>
        <MDTypography
          variant="h5"
          sx={{ mb: 1.5, fontWeight: "bold", color: "#344767 !important" }}
        >
          {t(`${solution.translationKey}.name`)}
        </MDTypography>
        <MDTypography
          variant="body2"
          sx={{ mb: 3, color: "#7b809a !important", lineHeight: 1.6 }}
        >
          {t(`${solution.translationKey}.description`)}
        </MDTypography>
        <Button
          {...linkProps}
          variant="contained"
          size="small"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            px: 3,
            color: "#ffffff !important",
            backgroundColor: `${solution.accentColor} !important`,
            "&:hover": {
              backgroundColor: `${solution.accentColor} !important`,
              filter: "brightness(0.85)",
              color: "#ffffff !important"
            }
          }}
        >
          {t('common:cta.learnMore')} →
        </Button>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
