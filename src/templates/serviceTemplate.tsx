import * as React from "react";
import rehypeReact from "rehype-react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Text } from "src/theme/primitives";

interface EventTemplateProps {
  data: {
    markdownRemark: any,
  };
}

const P = (props: any) => (
  <Text
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
      <div>
        {renderAst(mk.htmlAst)}
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
