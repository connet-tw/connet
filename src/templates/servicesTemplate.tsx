import * as React from "react";
import rehypeReact from "rehype-react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Box, Flex, Text } from "primithemes";
import { Banner } from "../components/Banner";
import { Section, SectionHeader } from "../components/Section";

interface ServicesTemplateProps {
  data: {
    markdownRemark: any;
  };
}

const P: React.SFC<{}> = ({ children }) => (
  <Text mb={3} w={1}>
    {children}
  </Text>
);

const Div: React.SFC<{}> = ({ children }) => <Box w={1}>{children}</Box>;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: P,
    div: Div,
  },
}).Compiler;

const ServicesTemplate: React.SFC<ServicesTemplateProps> = ({ data }) => {
  const { markdownRemark: mk } = data;
  return (
    <Layout>
      <Banner title={mk.frontmatter.title} image={mk.frontmatter.image} />
      <Section>
        <SectionHeader title={mk.frontmatter.subtitle} />
        <Flex p={3} w={1}>
          {renderAst(mk.htmlAst)}
        </Flex>
      </Section>
    </Layout>
  );
};

export default withIntl(ServicesTemplate);

export const query = graphql`
  query($slug: String!, $locale: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { lang: { eq: $locale } }
    ) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      htmlAst
      fields {
        slug
      }
    }
  }
`;
