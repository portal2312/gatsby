import * as React from "react";

import useSiteMetaData from "../hooks/useSiteMetadata";

interface SeoProps {
  title?: string | null;
}

const Seo: React.FC<SeoProps> = ({ title }) => {
  const data = useSiteMetaData();
  return (
    <title>
      {title} | {data?.site?.siteMetadata?.title}
    </title>
  );
};

export default Seo;
