import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import * as m from "../messages/services.messages";
import { FormattedMessage } from "react-intl";
import { Image } from "../components/Image";
import { Flex, Text } from "primithemes";
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { Section } from "../components/Section";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";

interface ServiceNode {
  node: {
    fields: {
      lang: string;
      slug: string;
    };
    frontmatter: {
      title: string;
      subtitle: string;
      image: any;
    };
  };
}

interface ServicesProps {
  data: {
    content: {
      title: string;
      subtitle?: string;
      image: any;
    };
    services: {
      edges: ServiceNode[];
    };
  };
}

const ServicesPage: React.SFC<ServicesProps> = ({
  data: { content, services },
}) => {
  return (
    <Layout>
      <Banner title={content.title} image={content.image} />
      <Section>
        <Container>
          {services.edges.map(({ node }, i) => (
            <Flex
              key={i}
              w={1}
              flexWrap="wrap"
              flexDirection={i % 2 === 0 ? "row" : "row-reverse"}
              bg="background.light"
            >
              <Flex w={[1, 1 / 2]}>
                <Image
                  style={{ width: "100%" }}
                  fluid={node.frontmatter.image}
                />
              </Flex>
              <Flex
                p={4}
                w={[1, 1 / 2]}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  mb={2}
                  is="h2"
                  fontSize={[4, 5]}
                  color="primary.main"
                  fontWeight={2}
                >
                  {node.frontmatter.title}
                </Text>
                <Text
                  mb={3}
                  fontSize={2}
                  is="h5"
                  fontWeight={3}
                  color="text.primary"
                >
                  {node.frontmatter.subtitle}
                </Text>
                <Link to={node.fields.slug}>
                  <Button mt={2} outlined>
                    <FormattedMessage {...m.services.learnMore} />
                  </Button>
                </Link>
              </Flex>
            </Flex>
          ))}
        </Container>
      </Section>
    </Layout>
  );
};

export default withIntl(ServicesPage);

export const query = graphql`
  query($slug: String!, $locale: String!) {
    content(fields: { slug: { eq: $slug } }, lang: { eq: $locale }) {
      title
      markdown
      image {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    services: allMarkdownRemark(
      filter: {
        frontmatter: { lang: { eq: $locale } }
        fields: { type: { eq: "services" } }
      }
      sort: { fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            image {
              childImageSharp {
                fluid(maxWidth: 960, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
