import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { styled, theme } from "src/theme";
import { Flex, Box } from "src/theme/primitives";
import { createGlobalStyle } from "styled-components";

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
`;

const Root = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Content = styled(Flex)`
  flex-direction: column;
  overflow-x: hidden;
  min-height: 100vh;
`;

const Main = styled(Box)`
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
`;

interface Data {
  logo: any;
  logoWhite: any;
}

export const Layout: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Layout2Query {
        logo: file(relativePath: {eq: "logos/logo.png"}) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoWhite: file(relativePath: {eq: "logos/logo-white.png"}) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }`
    }
    render={(data: Data) => {
      return (
        <ThemeProvider theme={theme}>
          <Root>
            <Normalize/>
            <GlobalStyle/>
            <Head/>
            <Content bg="background.default">
              <Header logo={data.logo}/>
              <Main>{children}</Main>
              <Footer logo={data.logoWhite}/>
            </Content>
          </Root>
        </ThemeProvider>
      ); }
    }
  />
);

export const RootLayout = Layout;
