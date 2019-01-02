import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import * as m from "../messages/about.messages";
import { FormattedMessage } from "react-intl";
import { Banner } from "../components/Banner";
import { Section, SectionHeader } from "../components/Section";
import { Timeline } from "../components/Timeline";
import { Flex } from "primithemes";
import { Button } from "../components/Button";
import { Link } from "../components/Link";

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

interface AboutPageProps {
  data: {
    headerImg: any;
    services: {
      edges: ServiceNode[];
    };
    references: {
      edges: ReferenceNode[];
    };
  };
}

const AboutPage: React.SFC<AboutPageProps> = ({ data }) => {
  return (
    <Layout>
      <Banner
        image={data.headerImg}
        title={<FormattedMessage {...m.banner.title} />}
      />
      <Section>
        <SectionHeader
          title={<FormattedMessage {...m.s1.title} />}
          subtitle={<FormattedMessage {...m.s1.subtitle} />}
          body={[<FormattedMessage {...m.body.one} />]}
        />
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

export default withIntl(AboutPage);

export const query = graphql`
  query($locale: String!) {
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
