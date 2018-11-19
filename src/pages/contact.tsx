import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
// import * as m from "../messages/services.messages";
// import { FormattedMessage } from "react-intl";
import * as m from "../messages/contact.messages";
import { FormattedMessage } from "react-intl";
import { Banner } from "../components/Banner";

interface ContactPageProps {
  data: {
    headerImg: any;
  }
}

const ContactPage: React.SFC<ContactPageProps> = (({data}) => {
  return (
    <Layout>
      <Banner
        image={data.headerImg}
        heading={<FormattedMessage {...m.contact.heading}/>}
      />
    </Layout>
  );
});

export default withIntl(ContactPage);

export const query = graphql`
  query {
    headerImg: file(relativePath: {eq: "header/solar-panels.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
