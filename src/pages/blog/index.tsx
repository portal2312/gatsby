import * as React from "react";

import { Link, PageProps, graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const title = "My Blog Posts";

const BlogPage = ({ data }: PageProps<Queries.allMdxQuery>) => {
  return (
    <Layout pageTitle={title}>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter?.slug}`}>
              {node.frontmatter?.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter?.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query allMdx {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title={title} />;

export default BlogPage;
