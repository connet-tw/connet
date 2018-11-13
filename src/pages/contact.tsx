import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
// import * as m from "../messages/services.messages";
// import { FormattedMessage } from "react-intl";
import * as m from "../messages/contact.messages";
import { FormattedMessage } from "react-intl";
import { Banner } from "../components/sections/Banner";
import { ContactDetails } from "../components/sections/ContactDetails";

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
      <ContactDetails
        phone={<FormattedMessage {...m.contactDetails.phoneNumber}/>}
        email={<FormattedMessage {...m.contactDetails.emailAddress}/>}
        address={[
          <FormattedMessage {...m.contactDetails.street}/>,
          <FormattedMessage {...m.contactDetails.city}/>,
          <FormattedMessage {...m.contactDetails.country}/>,
        ]}
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
