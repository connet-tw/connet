import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import * as m from "../messages/services.messages";
import { FormattedMessage } from "react-intl";
import { Image } from "../components/Image";
import { Flex, Text } from "primithemes";
import { Button } from "../components/Button";

interface ServiceNode {
  node: {
    fields: {
      lang: string;
      slug: string;
    };
    frontmatter: {
      heading: string;
      subheading: string;
      image: any;
    };
  };
}

interface ServicesProps {
  data: {
    services: {
      edges: ServiceNode[];
    };
  };
}

const ServicesPage: React.SFC<ServicesProps> = ({ data }) => {
  return (
    <Layout>
      {data.services.edges.map(({ node }, i) => (
        <Flex
          key={i}
          w={1}
          flexWrap="wrap"
          flexDirection={i % 2 === 0 ? "row" : "row-reverse"}
          bg="background.light"
        >
          <Flex w={[1, 1 / 2]}>
            <Image style={{ width: "100%" }} fluid={node.frontmatter.image} />
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
              as="h2"
              fontSize={[4, 5]}
              color="primary.main"
              fontWeight={2}
            >
              {node.frontmatter.heading}
            </Text>
            <Text
              mb={3}
              fontSize={2}
              as="h5"
              fontWeight={3}
              color="text.primary"
            >
              {node.frontmatter.subheading}
            </Text>
            <Button mt={2} outlined to={node.fields.slug}>
              <FormattedMessage {...m.services.learnMore} />
            </Button>
          </Flex>
        </Flex>
      ))}
    </Layout>
  );
};

export default withIntl(ServicesPage);

export const query = graphql`
  query($locale: String!) {
    services: allMarkdownRemark(
      filter: { fields: { type: { eq: "services" }, lang: { eq: $locale } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            lang
          }
          frontmatter {
            heading
            subheading
            image {
              childImageSharp {
                fluid(maxWidth: 960, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
