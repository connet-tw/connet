import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import * as m from "../messages/index.messages";
import { FormattedMessage } from "react-intl";
import { Banner } from "../components/Banner";
import { AboutSummary } from "../components/About";
import { Categories } from "../components/Categories";
import { Box } from "src/theme/primitives";

interface ServiceNode {
  node: {
    fields: {
      lang: string,
      slug: string,
    }
    frontmatter: {
      heading: string,
      subheading: string,
      image: any,
    }
  }
}

interface IndexProps {
  data: {
    headerImg: any,
    services: {
      edges: ServiceNode[],
    },
  }
}

const Index: React.SFC<IndexProps> = (({ data }) => {
  return (
    <Layout>
      <Banner
        heading={<FormattedMessage {...m.hero.heading}/>}
        image={data.headerImg}
      />
      <Box bg="background.paper">
        <AboutSummary
            heading={<FormattedMessage {...m.about.heading}/>}
            body={[<FormattedMessage {...m.about.subheading}/>]}
            highlights={[1,2,3,4].map((n) =>
              ({
                heading: <FormattedMessage {...m.highlights["heading" + n]}/>,
                subheading: <FormattedMessage {...m.highlights["subheading" + n]}/>,
              })
            )}
          />
      </Box>
      <Box>
        <Categories
          heading={<FormattedMessage {...m.services.heading}/>}
          body={[<FormattedMessage {...m.services.subheading}/>]}
          categoryLinks={data.services.edges.map(({node}) =>
            ({
              label: node.frontmatter.heading,
              text: node.frontmatter.subheading,
              image: node.frontmatter.image,
              to: node.fields.slug,
              buttonText: <FormattedMessage {...m.services.learnMore}/>
            })
          )}
        />
      </Box>
    </Layout>
  );
});

export default withIntl(Index);

export const query = graphql`
  query($locale: String!) {
    headerImg: file(relativePath: {eq: "header/solar-panels.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    services: allMarkdownRemark(
      filter: {fields: { type: { eq: "services" }, lang: { eq: $locale }}}
    ) {
      edges {
        node {
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
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }`
;
