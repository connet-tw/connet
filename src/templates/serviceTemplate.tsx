import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";

interface EventTemplateProps {
  data: {
    markdownRemark: any,
  };
}

const EventTemplate: React.SFC<EventTemplateProps> = (({ data }) => {
  const { markdownRemark } = data;
  return (
    <Layout>
      <div>
        {markdownRemark.frontmatter.heading}
      </div>
    </Layout>
  );
});

export default withIntl(EventTemplate);

export const query = graphql`
  query($slug: String!, $locale: String!) {
    markdownRemark(fields: { slug: { eq: $slug }, lang: { eq: $locale } }) {
      fields {
        slug
        lang
      }
      htmlAst
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`
;
