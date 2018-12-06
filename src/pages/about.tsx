import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import * as m from "../messages/about.messages";
import { FormattedMessage } from "react-intl";
import { Banner } from "../components/Banner";
import { Section, SectionHeader } from "../components/Section";
import { Image } from "../components/Image";
import { Flex } from "src/theme/primitives";
import { Button } from "../components/Button";
import { Link } from "../i18n";

interface ServiceNode {
  node: {
    fields: {
      slug: string;
    }
    frontmatter: {
      heading: string;
    }
  }
}

interface AboutPageProps {
  data: {
    headerImg: any;
    services: {
      edges: ServiceNode[];
    };
  }
}

const AboutPage: React.SFC<AboutPageProps> = (({data}) => {
  return (
    <Layout>
      <Banner
        image={data.headerImg}
        heading={<FormattedMessage {...m.banner.heading}/>}
      />
      <Section>
        <SectionHeader
          heading={<FormattedMessage {...m.s1.heading}/>}
          subheading={<FormattedMessage {...m.s1.subheading}/>}
          body={[
            <FormattedMessage {...m.body.one}/>,
          ]}
        />
        <Flex px={3} justifyContent="center" flexWrap="wrap">
          {data.services.edges.map(({node}, i) =>
            <Flex key={i} p={1}>
              <Button as={Link} to={"/" + node.fields.slug} contained variant="primary">
                {node.frontmatter.heading}
              </Button>
            </Flex>
          )} 
        </Flex>
        <Flex width={1} p={3}>
          <Image style={{width: "100%"}} fluid={data.headerImg}/>
        </Flex>
      </Section>
    </Layout>
  );
});

export default withIntl(AboutPage);

export const query = graphql`
  query($locale: String!) {
    headerImg: file(relativePath: {eq: "header/microgrids.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
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
          }
          frontmatter {
            heading
          }
        }
      }
    }
  }
`;
