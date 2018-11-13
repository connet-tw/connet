import * as React from "react";
import rehypeReact from "rehype-react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Banner } from "../components/sections/Banner";
import Typography from "@material-ui/core/Typography";

interface EventTemplateProps {
  data: {
    markdownRemark: any,
  };
}

const P = (props: any) => (
  <Typography
    variant="body1"
    align="center"
    {...props}
  />
);

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: P
  }
}).Compiler;

const EventTemplate: React.SFC<EventTemplateProps> = (({ data }) => {
  const { markdownRemark: mk } = data;
  return (
    <Layout>
      <Banner
        heading={mk.frontmatter.heading}
        subheading={mk.frontmatter.subheading}
        image={mk.frontmatter.image}
      />
      <div>
        {renderAst(data.markdownRemark.htmlAst)}
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
        subheading
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
