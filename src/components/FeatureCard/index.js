import React from "react";
import { Card, CardContent } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import VerifiedIcon from "@mui/icons-material/Verified";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AssessmentIcon from "@mui/icons-material/Assessment";

const iconMap = {
  DocumentScanner: DocumentScannerIcon,
  AccountBalance: AccountBalanceIcon,
  AccountTree: AccountTreeIcon,
  Verified: VerifiedIcon,
  SmartToy: SmartToyIcon,
  Assessment: AssessmentIcon,
};

const FeatureCard = ({ title, description, iconName, accentColor }) => {
  const Icon = iconMap[iconName] || DocumentScannerIcon;

  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: "#ffffff !important",
        backgroundImage: "none !important",
        borderLeft: `4px solid ${accentColor}`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06) !important",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: `0 8px 24px rgba(25, 118, 210, 0.15) !important`,
          transform: "translateY(-4px)",
          "& .feature-icon-box": {
            background: `linear-gradient(135deg, ${accentColor}18, ${accentColor}30)`,
          }
        }
      }}
    >
      <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
        <MDBox sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
          <MDBox
            className="feature-icon-box"
            sx={{
              width: 52,
              height: 52,
              minWidth: 52,
              borderRadius: "12px",
              background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}20)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
          >
            <Icon
              sx={{
                fontSize: 28,
                color: `${accentColor} !important`,
              }}
            />
          </MDBox>
          <MDBox sx={{ flex: 1 }}>
            <MDTypography
              variant="h6"
              sx={{ mb: 0.5, fontWeight: "bold", color: "#344767 !important" }}
            >
              {title}
            </MDTypography>
            <MDTypography
              variant="body2"
              sx={{ color: "#7b809a !important", lineHeight: 1.6 }}
            >
              {description}
            </MDTypography>
          </MDBox>
        </MDBox>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
