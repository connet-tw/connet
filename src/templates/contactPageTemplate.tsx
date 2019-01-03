import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { withIntl } from "../i18n";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import { Box, Card, Flex, Text } from "primithemes";
import { Email } from "styled-icons/material/Email";
import { Phone } from "styled-icons/material/Phone";
import { Home } from "styled-icons/material/Home";
import { Container } from "../components/Container";

interface Contact {
  title: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  district: string;
  postCode: string;
  country: string;
}
interface ContactPageProps {
  data: {
    content: {
      title: string;
      image: any;
      markdown: any;
      contacts: Contact[];
    };
  };
}

interface ContactCardProps {
  icon: React.ReactType;
  text: React.ReactNode[];
}

const ContactCard: React.SFC<ContactCardProps> = ({ icon, text }) => {
  const I = icon;
  return (
    <Box w={1}>
      <Card w={1} p={3} flexDirection="row" style={{ height: "100%" }}>
        <Text textAlign="center" color="text.main">
          <I size={24} />
        </Text>
        <Box>
          {text.map((x, i) => (
            <Text ml={4} lineHeight={2} textAlign="left" color="text.dark">
              {x}
            </Text>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

const ContactPage: React.SFC<ContactPageProps> = ({ data: { content } }) => {
  return (
    <Layout>
      <Banner image={content.image} title={content.title} />
      <Box bg="grey.100" p={[3, 3, 0]} style={{ flexGrow: 1 }}>
        <Section>
          <Container>
            <Flex my={[1, 1, 4]} justifyContent="center">
              {content.contacts.map(c => (
                <Card
                  shadow={1}
                  radius={2}
                  bg="background.light"
                  p={3}
                  w={[1, 1, 2 / 3, 1 / 3]}
                >
                  <Box w={1} p={3}>
                    <Text is="h3">{c.title}</Text>
                  </Box>
                  <ContactCard icon={Phone} text={[c.phone]} />
                  <ContactCard icon={Email} text={[c.email]} />
                  <ContactCard
                    icon={Home}
                    text={[
                      c.street,
                      [c.district, [c.city, c.postCode].join(" ")].join(", "),
                      c.country,
                    ]}
                  />
                </Card>
              ))}
            </Flex>
          </Container>
        </Section>
      </Box>
    </Layout>
  );
};

export default withIntl(ContactPage);

export const query = graphql`
  query($slug: String!, $locale: String!) {
    content(fields: { slug: { eq: $slug } }, lang: { eq: $locale }) {
      image {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      title
      markdown
      contacts {
        title
        phone
        email
        street
        district
        city
        postCode
        country
      }
    }
  }
`;
