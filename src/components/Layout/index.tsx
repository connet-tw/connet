import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { styled, Flex } from "primithemes";
import { createGlobalStyle } from "styled-components";
import { FormattedMessage } from "react-intl";
import * as m from "./Layout.messages";

import { Normalize } from "styled-normalize";
import { Head } from "./Head";
import { Header } from "./Header";
import { Footer } from "./Footer";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Root = styled.div`
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const Content = styled(Flex)`
  flex-direction: column;
  overflow-x: hidden;
  min-height: 100vh;
`;

const Main = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  flex-direction: column;
`;

interface SettingsNode {
  node: {
    fields: {
      lang: string;
    };
    title: string;
    phone: string;
    email: string;
  };
}
interface Data {
  logo: any;
  logoWhite: any;
  settings: {
    edges: SettingsNode[];
  };
}

const navItems = [
  { to: "/", label: <FormattedMessage {...m.nav.home} /> },
  { to: "/about", label: <FormattedMessage {...m.nav.about} /> },
  { to: "/services", label: <FormattedMessage {...m.nav.services} /> },
  { to: "/contact", label: <FormattedMessage {...m.nav.contact} /> },
];

export const Layout: React.SFC<{ lang?: string }> = props => (
  <StaticQuery
    query={graphql`
      query Layout2Query {
        settings: allSettingsYaml {
          edges {
            node {
              title
              phone
              email
              fields {
                lang
              }
            }
          }
        }
        logo: file(relativePath: { eq: "logos/logo.png" }) {
          childImageSharp {
            fixed(width: 100, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoWhite: file(relativePath: { eq: "logos/logo-white.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data: Data) => {
      const lang = props.lang || "en";
      const {
        node: { email, phone, title },
      } = data.settings.edges.find(({ node }) => node.fields.lang === lang) || {
        node: { email: "", phone: "", title: "Controlnet" },
      };
      return (
        <ThemeProvider theme={theme}>
          <Root>
            <Normalize />
            <GlobalStyle />
            <Head />
            <Content bg="background.main">
              <Header title={title} navItems={navItems} logo={data.logo} />
              <Main>{props.children}</Main>
              <Footer email={email} phone={phone} title={title} />
            </Content>
          </Root>
        </ThemeProvider>
      );
    }}
  />
);
