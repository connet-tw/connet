import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import { Timeline } from "../components/Timeline";
import { styled, Flex } from "primithemes";
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { Container } from "../components/Container";

const Content = styled(Flex)`
  font-family: ${props => props.theme.fonts.sans};
  color: ${props => props.theme.colors.text.dark};
  & * {
    margin: 0;
    padding: 0;
  }
  & h1 {
    font-weight: ${props => props.theme.fontWeights[2]};
    margin: ${props => props.theme.sizes[3]} 0;
  }
  & h2 {
    color: ${props => props.theme.colors.primary.main};
    font-weight: ${props => props.theme.fontWeights[3]};
    font-size: ${props => props.theme.fontSizes[3]};
    margin: ${props => props.theme.sizes[3]} 0;
  }
  & p {
    font-weight: ${props => props.theme.fontWeights[3]};
    font-size: ${props => props.theme.fontSizes[2]};
    text-align: center;
    margin: ${props => props.theme.sizes[3]} 0;
    line-height: ${props => props.theme.lineHeights[2]};
  }
`;

interface ServiceNode {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

interface ReferenceNode {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      customer: string;
      date: string;
      location: string;
    };
  };
}

interface AboutTemplateProps {
  data: {
    content: {
      title: string;
      fields: {
        image: any;
        markdown: any;
      };
    };
    headerImg: any;
    services: {
      edges: ServiceNode[];
    };
    references: {
      edges: ReferenceNode[];
    };
  };
}

const AboutTemplate: React.SFC<AboutTemplateProps> = ({ data }) => {
  return (
    <Layout>
      <Banner image={data.content.fields.image} title={data.content.title} />
      <Section>
        <Container>
          <Content
            p={3}
            w={[1, 3 / 4]}
            mx="auto"
            flexDirection="column"
            alignItems="center"
            dangerouslySetInnerHTML={{ __html: data.content.fields.markdown }}
          />
        </Container>
        <Flex mb={3} p={3} justifyContent="center" flexWrap="wrap">
          {data.services.edges.map(({ node }, i) => (
            <Flex key={i} p={1}>
              <Link to={node.fields.slug}>
                <Button contained variant="primary">
                  {node.frontmatter.title}
                </Button>
              </Link>
            </Flex>
          ))}
        </Flex>
        <Timeline title="Project References" items={data.references.edges} />
      </Section>
    </Layout>
  );
};

export default withIntl(AboutTemplate);

export const query = graphql`
  query($slug: String!, $locale: String!) {
    content: contentYaml(
      fields: { slug: { eq: $slug } }
      lang: { eq: $locale }
    ) {
      title
      fields {
        markdown
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    headerImg: file(relativePath: { eq: "header/microgrids.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    services: allMarkdownRemark(
      filter: {
        frontmatter: { lang: { eq: $locale } }
        fields: { type: { eq: "services" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    references: allMarkdownRemark(
      filter: {
        frontmatter: { lang: { eq: $locale } }
        fields: { type: { eq: "references" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            customer
            location
          }
        }
      }
    }
  }
`;
