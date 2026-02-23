import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SEOHead = ({ title, description, canonicalPath, ogImage, jsonLd, lang }) => {
  const { i18n } = useTranslation();
  const currentLang = lang || i18n.language || "en";
  const baseUrl = "https://geny.ai";
  const canonicalUrl = canonicalPath ? `${baseUrl}/#${canonicalPath}` : baseUrl;

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={currentLang === "ro" ? "ro_RO" : "en_US"} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* hreflang */}
      <link rel="alternate" hreflang="en" href={canonicalPath ? `${baseUrl}/#${canonicalPath}` : baseUrl} />
      <link rel="alternate" hreflang="ro" href={canonicalPath ? `${baseUrl}/#${canonicalPath}` : baseUrl} />
      <link rel="alternate" hreflang="x-default" href={canonicalPath ? `${baseUrl}/#${canonicalPath}` : baseUrl} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
