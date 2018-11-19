import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import * as m from "../messages/about.messages";
import { FormattedMessage } from "react-intl";
import { Banner } from "../components/Banner";

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
      <div>
        <p>
          <FormattedMessage {...m.body.one}/>
        </p>
        <p>
          <FormattedMessage {...m.body.two}/>
        </p>
      </div>
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
