import * as React from "react";
import rehypeReact from "rehype-react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Box, Flex, Text } from "primithemes";
import { Banner } from "../components/Banner";
import { Section, SectionHeader } from "../components/Section";

interface EventTemplateProps {
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

const EventTemplate: React.SFC<EventTemplateProps> = ({ data }) => {
  const { markdownRemark: mk } = data;
  return (
    <Layout>
      <Banner heading={mk.frontmatter.heading} image={mk.frontmatter.image} />
      <Section>
        <SectionHeader heading={mk.frontmatter.subheading} />
        <Flex p={3} w={1}>
          {renderAst(mk.htmlAst)}
        </Flex>
      </Section>
    </Layout>
  );
};

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
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
