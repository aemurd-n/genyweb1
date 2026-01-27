import React from "react";
import { AppBar, Toolbar, Container, Button, Box } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link as RouterLink } from "react-router-dom";

function Navbar({ brand }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(248,249,255,1) 100%)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 2px 12px rgba(102, 126, 234, 0.08)",
        borderBottom: "none"
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 2.5 }}>
          <MDBox sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                "&:hover": {
                  opacity: 0.9
                },
                transition: "all 0.3s ease"
              }}
            >
              <Box
                component="img"
                src="/logo-geny_rect.png"
                alt="Geny Systems"
                sx={{
                  height: { xs: 55, sm: 65, md: 75 },
                  width: "auto",
                  maxWidth: { xs: "200px", sm: "280px", md: "350px" },
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(102, 126, 234, 0.15)",
                  transition: "all 0.3s ease"
                }}
              />
            </Box>
          </MDBox>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 500,
                color: "text.primary",
                "&:hover": { color: "primary.main" }
              }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/services"
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 500,
                color: "text.primary",
                "&:hover": { color: "primary.main" }
              }}
            >
              Services
            </Button>
            <Button
              component={RouterLink}
              to="/blog"
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 500,
                color: "text.primary",
                "&:hover": { color: "primary.main" }
              }}
            >
              Blog
            </Button>
            <Button
              component={RouterLink}
              to="/faq"
              color="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 500,
                color: "text.primary",
                "&:hover": { color: "primary.main" }
              }}
            >
              FAQ
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                px: 3,
                color: "white !important",
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  color: "white !important"
                }
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
