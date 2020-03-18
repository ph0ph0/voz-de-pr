import React from "react";
import { Helmet } from "react-helmet";

export const MetaTags = (title, description, url, image) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={url ? url : "https://www.vozdepuertorico.com"}
      />
      <link
        rel="shortcut icon"
        href="./assets/General/Logo.svg"
        type="image/svg"
      />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};
