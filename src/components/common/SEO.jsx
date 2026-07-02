import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Spice Garden | Premium Multi-Cuisine Restaurant",
  description = "Experience fine dining with authentic Pakistani, Chinese, Italian, BBQ and Fast Food prepared by expert chefs in a luxurious family-friendly environment.",
  keywords = "restaurant, fine dining, Pakistani food, Chinese cuisine, Italian pasta, BBQ, fast food, spice garden",
  image = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
  url = "https://spicegarden.com",
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
