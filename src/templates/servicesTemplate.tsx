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
      <Banner
        title={mk.fields.frontmatter.title}
        image={mk.fields.frontmatter.image}
      />
      <Section>
        <SectionHeader title={mk.fields.frontmatter.subtitle} />
        <Flex p={3} w={1}>
          {renderAst(mk.fields.htmlAst)}
        </Flex>
      </Section>
    </Layout>
  );
};

export default withIntl(EventTemplate);

export const query = graphql`
  query($slug: String!, $locale: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { lang: { eq: $locale } }
    ) {
      fields {
        slug
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
      }
    }
  }
`;
