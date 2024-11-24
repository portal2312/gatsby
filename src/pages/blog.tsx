import * as React from "react";

import { PageProps, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const title = "My Blog Posts";

const BlogPage = ({ data }: PageProps<Queries.AllFileNamesQuery>) => {
  return (
    <Layout pageTitle={title}>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query AllFileNames {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title={title} />;

export default BlogPage;
