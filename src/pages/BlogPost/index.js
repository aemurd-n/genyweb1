// src/pages/BlogPost.jsx

import React from "react";
import { Container, Box, Chip, Button, Divider } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useParams, Link as RouterLink } from "react-router-dom";
import blogPosts from "data/blog-posts";
import { useTranslation } from "react-i18next";

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation(['blog-posts', 'blog', 'common']);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <MDTypography variant="h4">{t('common:common.postNotFound')}</MDTypography>
        <Button component={RouterLink} to="/blog" variant="contained" sx={{ mt: 2 }}>
          {t('common:cta.backToBlog')}
        </Button>
      </Container>
    );
  }

  const translatedPost = {
    ...post,
    title: t(`blog-posts:${post.translationKey}.title`),
    author: t(`blog-posts:${post.translationKey}.author`),
    category: t(`blog-posts:${post.translationKey}.category`),
    excerpt: t(`blog-posts:${post.translationKey}.excerpt`),
    content: t(`blog-posts:${post.translationKey}.content`),
    tags: t(`blog-posts:${post.translationKey}.tags`, { returnObjects: true })
  };

  // Get translated related posts
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2)
    .map(p => ({
      ...p,
      title: t(`blog-posts:${p.translationKey}.title`),
      excerpt: t(`blog-posts:${p.translationKey}.excerpt`)
    }));

  return (
    <MDBox sx={{ py: 6, backgroundColor: "background.default" }}>
      <Container maxWidth="md">
        {/* Header */}
        <MDBox sx={{ mb: 4 }}>
          <Button component={RouterLink} to="/blog" color="primary" sx={{ mb: 2 }}>
            {t('common:cta.backToBlog')}
          </Button>

          <MDTypography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
            {translatedPost.title}
          </MDTypography>

          {/* Meta Information */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4, flexWrap: "wrap" }}>
            <MDTypography variant="body2" sx={{ color: "text.secondary" }}>
              {t('common:common.by')} {translatedPost.author}
            </MDTypography>
            <MDTypography variant="body2" sx={{ color: "text.secondary" }}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </MDTypography>
            <Chip label={translatedPost.category} size="small" variant="outlined" />
          </Box>

          {/* Featured Image */}
          <Box
            component="img"
            src={post.image}
            alt={translatedPost.title}
            sx={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 2, mb: 4 }}
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
            __html: translatedPost.content
              .replace(/<h1>/g, "<h1 style='font-size: 2rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;'>")
              .replace(/<h2>/g, "<h2 style='font-size: 1.5rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;'>")
              .replace(/<h3>/g, "<h3 style='font-size: 1.25rem; font-weight: bold; margin-top: 1.25rem; margin-bottom: 0.75rem;'>")
              .replace(/<p>/g, "<p style='margin-bottom: 1rem; line-height: 1.8;'>")
              .replace(/<ul>/g, "<ul style='margin-bottom: 1rem; padding-left: 2rem;'>")
              .replace(/<li>/g, "<li style='margin-bottom: 0.5rem;'>"),
          }}
        />

        <Divider sx={{ my: 6 }} />

        {/* Tags */}
        <MDBox sx={{ mb: 6 }}>
          <MDTypography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            {t('common:common.tags')}
          </MDTypography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {translatedPost.tags.map((tag) => (
              <Chip key={tag} label={tag} color="primary" variant="filled" />
            ))}
          </Box>
        </MDBox>

        {/* Related Posts */}
        <MDBox>
          <MDTypography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            {t('blog:moreArticles')}
          </MDTypography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            {relatedPosts.map((relatedPost) => (
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
