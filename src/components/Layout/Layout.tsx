import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { styled, theme } from "src/theme";

import { Normalize } from "styled-normalize";
import { Head } from "./Head";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Root = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  min-height: 100vh;
`;

const Main = styled.div`
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
            <Head/>
            <Content>
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
