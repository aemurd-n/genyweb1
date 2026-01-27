import React from "react";
import { Card, CardContent } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const BenefitCard = ({ benefit }) => {
  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
          transform: "translateY(-4px)",
          "& .benefit-icon": {
            transform: "scale(1.2)",
            color: "success.main"
          }
        }
      }}
    >
      <CardContent sx={{ textAlign: "center", p: 3 }}>
        <MDBox sx={{ mb: 2 }}>
          <CheckCircleIcon
            className="benefit-icon"
            sx={{
              fontSize: 56,
              color: "primary.main",
              transition: "all 0.3s ease"
            }}
          />
        </MDBox>
        <MDTypography variant="h6" sx={{ mb: 1.5, fontWeight: "bold", color: "text.primary" }}>
          {benefit.title}
        </MDTypography>
        <MDTypography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
          {benefit.description}
        </MDTypography>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
