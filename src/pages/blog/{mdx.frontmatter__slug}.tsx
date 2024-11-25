import * as React from "react";

import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

interface BlogPostProps {
  data: Queries.GetMdxQuery;
  children: React.ReactNode;
}

const BlogPost = ({ data, children }: BlogPostProps) => {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title}>
      <p>{data.mdx?.frontmatter?.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query GetMdx($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title} />
);

export default BlogPost;
