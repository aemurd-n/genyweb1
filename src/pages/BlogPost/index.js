// src/pages/BlogPost.jsx

import React from "react";
import { Container, Box, Chip, Button, Divider } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useParams, Link as RouterLink } from "react-router-dom";
import blogPosts from "data/blog-posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <MDTypography variant="h4">Post not found</MDTypography>
        <Button component={RouterLink} to="/blog" variant="contained" sx={{ mt: 2 }}>
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <MDBox sx={{ py: 6, backgroundColor: "background.default" }}>
      <Container maxWidth="md">
        {/* Header */}
        <MDBox sx={{ mb: 4 }}>
          <Button component={RouterLink} to="/blog" color="primary" sx={{ mb: 2 }}>
            ← Back to Blog
          </Button>

          <MDTypography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
            {post.title}
          </MDTypography>

          {/* Meta Information */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4, flexWrap: "wrap" }}>
            <MDTypography variant="body2" sx={{ color: "text.secondary" }}>
              By {post.author}
            </MDTypography>
            <MDTypography variant="body2" sx={{ color: "text.secondary" }}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </MDTypography>
            <Chip label={post.category} size="small" variant="outlined" />
          </Box>

          {/* Featured Image */}
          <Box
            component="img"
            src={post.image}
            alt={post.title}
            sx={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 2, mb: 4 }}
          />
        </MDBox>

        <Divider sx={{ mb: 4 }} />

        {/* Content */}
        <MDBox
          sx={{
            "& h1": { variant: "h3", fontWeight: "bold", mt: 4, mb: 2 },
            "& h2": { variant: "h4", fontWeight: "bold", mt: 3, mb: 2 },
            "& p": { mb: 2, lineHeight: 1.8 },
            "& ul": { mb: 2, pl: 2 },
            "& li": { mb: 1 },
            "& code": { backgroundColor: "rgba(0,0,0,0.05)", px: 1, py: 0.5, borderRadius: 1 },
            "& a": { color: "primary.main", textDecoration: "none", "&:hover": { textDecoration: "underline" } },
          }}
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/<h1>/g, "<h1 style='font-size: 2rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;'>")
              .replace(/<h2>/g, "<h2 style='font-size: 1.5rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;'>")
              .replace(/<p>/g, "<p style='margin-bottom: 1rem; line-height: 1.8;'>")
              .replace(/<ul>/g, "<ul style='margin-bottom: 1rem; padding-left: 2rem;'>")
              .replace(/<li>/g, "<li style='margin-bottom: 0.5rem;'>"),
          }}
        />

        <Divider sx={{ my: 6 }} />

        {/* Tags */}
        <MDBox sx={{ mb: 6 }}>
          <MDTypography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Tags
          </MDTypography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {post.tags.map((tag) => (
              <Chip key={tag} label={tag} color="primary" variant="filled" />
            ))}
          </Box>
        </MDBox>

        {/* Related Posts */}
        <MDBox>
          <MDTypography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            More Articles
          </MDTypography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Box
                  component={RouterLink}
                  to={`/blog/${relatedPost.slug}`}
                  key={relatedPost.id}
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.3s",
                    "&:hover": { boxShadow: 3, borderColor: "primary.main" },
                  }}
                >
                  <MDTypography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {relatedPost.title}
                  </MDTypography>
                  <MDTypography variant="body2" sx={{ color: "text.secondary" }}>
                    {relatedPost.excerpt}
                  </MDTypography>
                </Box>
              ))}
          </Box>
        </MDBox>
      </Container>
    </MDBox>
  );
};

export default BlogPost;
