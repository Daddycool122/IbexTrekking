import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, path, schemaData, ogImage }) => {
  const url = `https://ibexiceaxe.com${path || ""}`;
  const defaultDescription = "Discover the best Himalayan treks, river rafting in Rishikesh, and curated adventure tours with Ibex Ice Axe. Expert guides, premium safety, and unforgettable experiences.";
  const defaultKeywords = "Himalayan Treks, River Rafting Rishikesh, Kedarkantha Trek, Valley of Flowers, Adventure Tours India";

  return (
    <Helmet>
      <title>{title ? `${title} | Ibex Ice Axe` : "Ibex Ice Axe | Premium Himalayan Treks & Rafting Adventures"}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph Tags for Social Media */}
      <meta property="og:title" content={title ? `${title} | Ibex Ice Axe` : "Ibex Ice Axe | Premium Himalayan Treks & Rafting Adventures"} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* JSON-LD Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
