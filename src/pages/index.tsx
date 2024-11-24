import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const title = "Home Page";

const IndexPage = () => {
  return (
    <Layout pageTitle={title}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.jpeg"
      />
    </Layout>
  );
};

export const Head = () => <Seo title={title} />;

export default IndexPage;
