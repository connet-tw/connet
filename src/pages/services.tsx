import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
// import * as m from "../messages/services.messages";
// import { FormattedMessage } from "react-intl";
import { ImageSplit } from "../components/sections/ImageSplit";
import { Link } from "../i18n";
import Button from "@material-ui/core/Button";
import * as m from "../messages/services.messages";
import { FormattedMessage } from "react-intl";

interface ServiceNode {
  node: {
    fields: {
      lang: string,
      slug: string,
    },
    frontmatter: {
      heading: string,
      subheading: string,
      image: any,
    },
  }
}

interface ServicesProps {
  data: {
    services: {
      edges: ServiceNode[],
    },
  }
}

const ServicesPage: React.SFC<ServicesProps> = (({ data }) => {
  return (
    <Layout>
      {data.services.edges.map(({node}, i) =>
        <ImageSplit
          id={node.fields.slug}
          key={i}
          reverse={i % 2 === 0}
          heading={node.frontmatter.heading}
          subheading={node.frontmatter.subheading}
          image={node.frontmatter.image}
          after={
            <Link to={node.fields.slug}>
              <Button variant="outlined">
                <FormattedMessage {...m.services.learnMore}/>
              </Button>
            </Link>
          }
        />
      )}
    </Layout>
  );
});

export default withIntl(ServicesPage);

export const query = graphql`
  query($locale: String!) {
    services: allMarkdownRemark(
      filter: {fields: { type: { eq: "services" }, lang: { eq: $locale }}}
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
