import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import * as m from "../messages/about.messages";
import { FormattedMessage } from "react-intl";
import { Banner } from "../components/Banner";
import { Section } from "../components/sections/Section";
import { Text, Flex } from "src/theme/primitives";

interface AboutPageProps {
  data: {
    headerImg: any;
  }
}

const AboutPage: React.SFC<AboutPageProps> = (({data}) => {
  return (
    <Layout>
      <Banner
        image={data.headerImg}
        heading={<FormattedMessage {...m.banner.heading}/>}
        subheading={<FormattedMessage {...m.banner.subheading}/>}
      />
      <Section>
        <Flex width={1} p={2} flexWrap="wrap">
          <Text p={2} as="p" width={1}>
            <FormattedMessage {...m.body.one}/>
          </Text>
          <Text p={2} as="p" width={1}>
            <FormattedMessage {...m.body.two}/>
          </Text>
        </Flex>
      </Section>
    </Layout>
  );
});

export default withIntl(AboutPage);

export const query = graphql`
  query {
    headerImg: file(relativePath: {eq: "header/microgrids.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
