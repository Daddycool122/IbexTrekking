import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const GlobalCanonical = () => {
  const location = useLocation();
  
  // Construct the clean canonical URL without any query parameters (like ?fbclid=...)
  // We use the pathname and ensure it has no trailing slash (unless it's the root '/')
  const pathname = location.pathname.endsWith('/') && location.pathname.length > 1 
    ? location.pathname.slice(0, -1) 
    : location.pathname;

  const canonicalUrl = `https://ibexiceaxe.com${pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default GlobalCanonical;
