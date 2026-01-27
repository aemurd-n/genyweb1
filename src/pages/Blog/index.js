// src/pages/Blog.jsx

import React, { useState } from "react";
import { Container, Grid, Card, CardContent, CardActions, Button, Box, Chip, TextField, MenuItem } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Link as RouterLink } from "react-router-dom";
import blogPosts from "data/blog-posts";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MDBox sx={{ py: 6, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <MDBox sx={{ mb: 6, textAlign: "center" }}>
          <MDTypography variant="h2" sx={{ mb: 2, fontWeight: "bold", color: "text.primary" }}>
            Blog & Insights
          </MDTypography>
          <MDTypography variant="h6" sx={{ color: "text.secondary", mb: 4, maxWidth: 600, mx: "auto" }}>
            Latest thoughts on AI, automation, and enterprise solutions
          </MDTypography>

          {/* Search and Filter */}
          <Box sx={{ display: "flex", gap: 2, mb: 4, maxWidth: 800, mx: "auto", flexDirection: { xs: "column", md: "row" } }}>
            <TextField
              fullWidth
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="medium"
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "primary.main"
                  }
                }
              }}
            />
            <TextField
              select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              size="medium"
              label="Category"
              sx={{
                minWidth: { xs: "100%", md: 200 },
                backgroundColor: "white"
              }}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </MDBox>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <Grid container spacing={4}>
            {filteredPosts.map((post, index) => (
              <Grid item xs={12} md={4} key={post.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                      transform: "translateY(-8px)"
                    },
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    "@keyframes fadeInUp": {
                      from: {
                        opacity: 0,
                        transform: "translateY(30px)"
                      },
                      to: {
                        opacity: 1,
                        transform: "translateY(0)"
                      }
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={post.image}
                    alt={post.title}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)"
                      }
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          backgroundColor: "primary.main",
                          color: "white",
                          fontWeight: 600
                        }}
                      />
                      <MDTypography variant="caption" sx={{ color: "text.secondary", fontWeight: 500 }}>
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </MDTypography>
                    </Box>
                    <MDTypography variant="h5" sx={{ mb: 1.5, fontWeight: "bold", color: "text.primary" }}>
                      {post.title}
                    </MDTypography>
                    <MDTypography variant="body2" sx={{ color: "text.secondary", mb: 2, lineHeight: 1.6 }}>
                      {post.excerpt}
                    </MDTypography>
                    <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                      {post.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "primary.main",
                            color: "primary.main"
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      component={RouterLink}
                      to={`/blog/${post.slug}`}
                      variant="text"
                      color="primary"
                      sx={{
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "rgba(103, 58, 183, 0.08)"
                        }
                      }}
                    >
                      Read More →
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <MDBox sx={{ textAlign: "center", py: 6 }}>
            <MDTypography variant="h6" sx={{ color: "text.secondary" }}>
              No posts found. Try different search terms or filters.
            </MDTypography>
          </MDBox>
        )}
      </Container>
    </MDBox>
  );
};

export default Blog;
