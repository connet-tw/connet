import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import * as m from "../messages/index.messages";
import { FormattedMessage } from "react-intl";
import { Banner } from "../components/Banner";
import { AboutSummary } from "../components/About";
import { Categories } from "../components/Categories";
import { Box } from "primithemes";

interface ServiceNode {
  node: {
    frontmatter: {
      title: string;
      subtitle: string;
      image: any;
    };
    fields: {
      lang: string;
      slug: string;
    };
  };
}

interface IndexProps {
  data: {
    content: {
      title: string;
      subtitle: string;
      image: any;
      welcomeSection: {
        markdown: any;
      };
      servicesSection: {
        markdown: any;
      };
      facts: { title: string; value: string }[];
    };
    services: {
      edges: ServiceNode[];
    };
  };
}

const Index: React.SFC<IndexProps> = ({ data: { content, services } }) => {
  return (
    <Layout>
      <Banner title={content.title} image={content.image} />
      <Box bg="background.light">
        <AboutSummary
          markdown={content.welcomeSection.markdown}
          highlights={content.facts.map(f => ({
            title: f.value,
            subtitle: f.title,
          }))}
        />
      </Box>
      <Box>
        <Categories
          markdown={content.servicesSection.markdown}
          categoryLinks={services.edges.map(({ node }) => ({
            label: node.frontmatter.title,
            text: node.frontmatter.subtitle,
            image: node.frontmatter.image,
            to: node.fields.slug,
            buttonText: <FormattedMessage {...m.services.learnMore} />,
          }))}
        />
      </Box>
    </Layout>
  );
};

export default withIntl(Index);

export const query = graphql`
  query($slug: String!, $locale: String!) {
    content(fields: { slug: { eq: $slug } }, lang: { eq: $locale }) {
      title
      subtitle
      image {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      welcomeSection {
        markdown
      }
      servicesSection {
        markdown
      }
      facts {
        title
        value
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
                fluid(maxWidth: 800) {
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
