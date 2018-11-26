import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import * as m from "../messages/contact.messages";
import { FormattedMessage } from "react-intl";
import { Banner } from "../components/Banner";
import { Section } from "../components/sections/Section";
import { Box, Flex, Card, Text } from "src/theme/primitives";
import { Email } from "styled-icons/material/Email";
import { Phone } from "styled-icons/material/Phone";
import { Home } from "styled-icons/material/Home";

interface ContactPageProps {
  data: {
    headerImg: any;
  }
}


const ContactCard: React.SFC<{icon: React.ReactType, text: React.ReactNode}> = ({icon, text}) => {
  const I = icon;
  return (<Box p={2} width={[1, 1/3]}>
    <Card width={1}
      p={3}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      radius={2} shadow={1} style={{height: "100%"}}
    >
      <Text textAlign="center" color="text.main">
        <I size={24}/>
      </Text>
      <Text ml={4} textAlign="right" color="text.dark">
        {text}
      </Text>
    </Card>
  </Box>
  );
};

const ContactPage: React.SFC<ContactPageProps> = (({data}) => {
  return (
    <Layout>
      <Banner
        image={data.headerImg}
        heading={<FormattedMessage {...m.contact.heading}/>}
      />
      <Section>
        <Flex p={2} width={1} flexWrap="wrap">
          <ContactCard icon={Email} text={"info"}/>
          <ContactCard icon={Phone} text={"telephone number"}/>
          <ContactCard icon={Home} text={"telephone number, very long text, really really long"}/>
        </Flex>
      </Section>
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
