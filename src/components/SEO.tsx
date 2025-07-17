import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  author?: string;
  twitterHandle?: string;
  siteName?: string;
}

export const SEO = ({ 
  title = "Jeanette Hassel - Vækst og Nærvær | Det Konservative Folkeparti",
  description = "Jeanette Hassel - Byrådskandidat for Det Konservative Folkeparti i Frederikssund Kommune. Din stemme på Vækst og Nærvær.",
  keywords = "Jeanette Hassel, Det Konservative Folkeparti, Frederikssund Kommune, byråd, valgkamp, Jægerspris, politik, vækst, nærvær",
  ogImage = "/Logo.png",
  canonical = "https://jeanette.dk/",
  author = "Jeanette Hassel",
  twitterHandle = "@JeanetteHassel",
  siteName = "Jeanette Hassel - Det Konservative Folkeparti"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://jeanette.dk${ogImage}`} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="da_DK" />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://jeanette.dk${ogImage}`} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
    </Helmet>
  );
}; 