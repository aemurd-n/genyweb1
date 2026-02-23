import React from "react";
import { Card, CardContent, Grid, Button, Chip } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import CheckIcon from "@mui/icons-material/Check";
import { Link as RouterLink } from "react-router-dom";

const PricingTable = ({ tiers, currency, perMonth, externalUrl, accentColor, mostPopularLabel }) => {
  return (
    <Grid container spacing={3} alignItems="stretch">
      {tiers.map((tier, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "#ffffff !important",
              backgroundImage: "none !important",
              boxShadow: tier.highlighted
                ? `0 8px 32px rgba(25, 118, 210, 0.18) !important`
                : "0 2px 12px rgba(0,0,0,0.06) !important",
              border: tier.highlighted ? `2px solid ${accentColor}` : "1px solid #e0e0e0",
              transform: tier.highlighted ? "scale(1.03)" : "none",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: `0 12px 32px rgba(25, 118, 210, 0.2) !important`,
                transform: tier.highlighted ? "scale(1.05)" : "translateY(-4px)"
              }
            }}
          >
            {tier.highlighted && (
              <MDBox sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                <Chip
                  label={mostPopularLabel}
                  sx={{
                    backgroundColor: `${accentColor} !important`,
                    color: "#ffffff !important",
                    fontWeight: 600,
                    fontSize: "0.75rem"
                  }}
                />
              </MDBox>
            )}
            <CardContent
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                "&:last-child": { pb: 3 }
              }}
            >
              <MDTypography
                variant="h5"
                sx={{ mb: 1, fontWeight: "bold", color: "#344767 !important", textAlign: "center" }}
              >
                {tier.name}
              </MDTypography>

              <MDBox sx={{ textAlign: "center", mb: 2 }}>
                <MDBox sx={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
                  <MDTypography
                    variant="h3"
                    sx={{ fontWeight: "bold", color: `${accentColor} !important` }}
                  >
                    {tier.monthlyPrice === 0 ? "0" : tier.monthlyPrice}
                  </MDTypography>
                  <MDTypography
                    variant="body2"
                    sx={{ ml: 0.5, color: "#7b809a !important" }}
                  >
                    {currency}{perMonth}
                  </MDTypography>
                </MDBox>
              </MDBox>

              <MDTypography
                variant="body2"
                sx={{ mb: 3, color: "#7b809a !important", lineHeight: 1.6, textAlign: "center" }}
              >
                {tier.description}
              </MDTypography>

              <MDBox sx={{ mb: 3, flexGrow: 1 }}>
                {tier.features && tier.features.map((feature, fIndex) => (
                  <MDBox key={fIndex} sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                    <CheckIcon sx={{ fontSize: 20, color: `${accentColor} !important`, mr: 1, flexShrink: 0 }} />
                    <MDTypography variant="body2" sx={{ color: "#7b809a !important" }}>
                      {feature}
                    </MDTypography>
                  </MDBox>
                ))}
              </MDBox>

              <MDBox sx={{ mt: "auto" }}>
                {tier.cta && tier.cta.toLowerCase().includes("contact") ? (
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant={tier.highlighted ? "contained" : "outlined"}
                    fullWidth
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      py: 1.2,
                      ...(tier.highlighted
                        ? {
                            backgroundColor: `${accentColor} !important`,
                            color: "#ffffff !important",
                            "&:hover": {
                              backgroundColor: `${accentColor} !important`,
                              filter: "brightness(0.85)",
                              color: "#ffffff !important"
                            }
                          }
                        : {
                            borderColor: `${accentColor} !important`,
                            color: `${accentColor} !important`,
                            backgroundColor: "transparent !important",
                            "&:hover": {
                              borderColor: `${accentColor} !important`,
                              backgroundColor: `${accentColor}10 !important`,
                              color: `${accentColor} !important`
                            }
                          })
                    }}
                  >
                    {tier.cta}
                  </Button>
                ) : (
                  <Button
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={tier.highlighted ? "contained" : "outlined"}
                    fullWidth
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      py: 1.2,
                      ...(tier.highlighted
                        ? {
                            backgroundColor: `${accentColor} !important`,
                            color: "#ffffff !important",
                            "&:hover": {
                              backgroundColor: `${accentColor} !important`,
                              filter: "brightness(0.85)",
                              color: "#ffffff !important"
                            }
                          }
                        : {
                            borderColor: `${accentColor} !important`,
                            color: `${accentColor} !important`,
                            backgroundColor: "transparent !important",
                            "&:hover": {
                              borderColor: `${accentColor} !important`,
                              backgroundColor: `${accentColor}10 !important`,
                              color: `${accentColor} !important`
                            }
                          })
                    }}
                  >
                    {tier.cta}
                  </Button>
                )}
              </MDBox>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PricingTable;
