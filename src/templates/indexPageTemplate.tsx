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
    headerImg: any;
    services: {
      edges: ServiceNode[];
    };
  };
}

const Index: React.SFC<IndexProps> = ({ data }) => {
  return (
    <Layout>
      <Banner
        title={<FormattedMessage {...m.hero.title} />}
        image={data.headerImg}
      />
      <Box bg="background.light">
        <AboutSummary
          title={<FormattedMessage {...m.about.title} />}
          body={[<FormattedMessage {...m.about.subtitle} />]}
          highlights={[1, 2, 3, 4].map(n => ({
            title: <FormattedMessage {...m.highlights["title" + n]} />,
            subtitle: <FormattedMessage {...m.highlights["subtitle" + n]} />,
          }))}
        />
      </Box>
      <Box>
        <Categories
          title={<FormattedMessage {...m.services.title} />}
          body={[<FormattedMessage {...m.services.subtitle} />]}
          categoryLinks={data.services.edges.map(({ node }) => ({
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
      markdown
      image {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    headerImg: file(relativePath: { eq: "header/solar-panels.jpg" }) {
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
