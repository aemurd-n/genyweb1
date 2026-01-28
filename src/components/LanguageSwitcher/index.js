import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event, newLang) => {
    if (newLang) {
      i18n.changeLanguage(newLang);
    }
  };

  return (
    <ToggleButtonGroup
      value={i18n.language}
      exclusive
      onChange={handleLanguageChange}
      size="small"
      sx={{
        "& .MuiToggleButton-root": {
          textTransform: "none",
          fontSize: "0.875rem",
          fontWeight: 500,
          px: 2,
          py: 0.5,
          color: "text.primary",
          borderColor: "rgba(102, 126, 234, 0.3)",
          "&.Mui-selected": {
            backgroundColor: "primary.main",
            color: "white !important",
            "&:hover": {
              backgroundColor: "primary.dark",
            }
          },
          "&:hover": {
            backgroundColor: "rgba(102, 126, 234, 0.1)",
          }
        }
      }}
    >
      <ToggleButton value="en">EN</ToggleButton>
      <ToggleButton value="ro">RO</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default LanguageSwitcher;
