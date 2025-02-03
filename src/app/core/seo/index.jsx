import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  description,
  keywords,
  author,
  canonicalUrl,
}) {
  return (
    <Helmet titleTemplate="Luna Roja" defaultTitle="Luna Roja">
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
