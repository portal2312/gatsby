import * as React from "react";

import useSiteMetaData from "../hooks/useSiteMetadata";

interface SeoProps {
  title: string;
}

const Seo: React.FC<SeoProps> = ({ title }) => {
  const data = useSiteMetaData();
  return (
    <title>
      {title} | {data?.title}
    </title>
  );
};

export default Seo;
