import React from "react";
import Head from "next/head";

const Meta = ({ title, description, canonical, ogimage, ...props }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="author" content="Rafael Gomes" />
      <meta name="copyright" content="Rafael Gomes" />
      <meta name="theme-color" content="#fff9e9" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{title}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogimage} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogimage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="keywords" content="ReciMe, Recipes, Cooking, Cooking Tips" />
    </Head>
  );
};

export default Meta;
