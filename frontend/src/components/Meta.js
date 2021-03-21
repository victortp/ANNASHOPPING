import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
      <meta name="icon" href="/frontend/public/creative.jpg"/>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Anna Sweet Treats",
  keywords: "Treats, Small Buissness",
  description:
    "Get the best sweeet treats in town!",
};

export default Meta;