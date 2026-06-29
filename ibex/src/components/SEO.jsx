import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, keywords, schemaData, ogImage }) => {
  const location = useLocation();
  const pathname = location.pathname.endsWith('/') && location.pathname.length > 1 
    ? location.pathname.slice(0, -1) 
    : location.pathname;
  const url = `https://ibexiceaxe.com${pathname}`;
  
  const defaultDescription = "Discover the best Himalayan treks, river rafting in Rishikesh, and curated adventure tours with Ibex Ice Axe. Expert guides, premium safety, and unforgettable experiences.";
  const defaultKeywords = "Himalayan Treks, River Rafting Rishikesh, Kedarkantha Trek, Valley of Flowers, Adventure Tours India";
  const defaultTitle = "Ibex Ice Axe | Premium Himalayan Treks & Rafting Adventures";
  const finalTitle = title ? `${title} | Ibex Ice Axe` : defaultTitle;
  const finalDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph Tags for Social Media */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

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
