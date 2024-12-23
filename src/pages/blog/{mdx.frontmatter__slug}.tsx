import * as React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

interface BlogPostProps {
  data: Queries.GetMdxQuery;
  children: React.ReactNode;
}

const BlogPost = ({ data, children }: BlogPostProps) => {
  const image = getImage(
    data.mdx?.frontmatter?.hero_image?.childImageSharp?.gatsbyImageData ?? null,
  );
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title}>
      <p>{data.mdx?.frontmatter?.date}</p>
      {image && data.mdx?.frontmatter?.hero_image_alt && (
        <GatsbyImage
          image={image}
          alt={data.mdx?.frontmatter?.hero_image_alt}
        />
      )}
      <p>
        Photo Credit:{" "}
        {data.mdx?.frontmatter?.hero_image_credit_link && (
          <a href={data.mdx?.frontmatter?.hero_image_credit_link}>
            {data.mdx?.frontmatter?.hero_image_credit_text}
          </a>
        )}
      </p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query GetMdx($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title} />
);

export default BlogPost;
