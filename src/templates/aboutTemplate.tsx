import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import { Timeline } from "../components/Timeline";
import { Flex } from "primithemes";
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { Container } from "../components/Container";
import { Content } from "../styles/Content";

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
interface AboutContent {
  title: string;
  image: any;
  markdown: any;
  referencesSection: {
    title: string;
    subtitle: string;
  };
}

interface AboutTemplateProps {
  data: {
    content: AboutContent;
    services: {
      edges: ServiceNode[];
    };
    references: {
      edges: ReferenceNode[];
    };
  };
}

const AboutTemplate: React.SFC<AboutTemplateProps> = ({ data }) => {
  const { content, services, references } = data;
  return (
    <Layout>
      <Banner image={content.image} title={content.title} />
      <Section>
        <Container>
          <Content
            p={3}
            w={[1, 3 / 4]}
            mx="auto"
            flexDirection="column"
            alignItems="center"
            dangerouslySetInnerHTML={{ __html: content.markdown }}
          />
        </Container>
        <Flex mb={3} p={3} justifyContent="center" flexWrap="wrap">
          {services.edges.map(({ node }, i) => (
            <Flex key={i} p={1}>
              <Link to={node.fields.slug}>
                <Button contained variant="primary">
                  {node.frontmatter.title}
                </Button>
              </Link>
            </Flex>
          ))}
        </Flex>
        <Timeline
          title={content.referencesSection.title}
          subtitle={content.referencesSection.subtitle}
          items={references.edges}
        />
      </Section>
    </Layout>
  );
};

export default withIntl(AboutTemplate);

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
      referencesSection {
        title
        subtitle
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