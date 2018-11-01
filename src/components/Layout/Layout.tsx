import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import withRoot from "../../utils/withRoot";

import { App, NavItem } from "./App";

interface Data {
  logo: any;
  logoWhite: any;
}

const navItems: NavItem[] = [
  {to: "/services", id: "nav.services"},
  {to: "/about", id: "nav.about"},
  {to: "/contact", id: "nav.contact"},
];

export const Layout: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        logo: file(relativePath: {eq: "logos\/logo.png"}) {
          childImageSharp {
            fixed(width: 220) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoWhite: file(relativePath: {eq: "logos\/logo.png"}) {
          childImageSharp {
            fixed(width: 220) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }`
    }
    render={(data: Data) => {
      return (
        <App
          navItems={navItems}
          logo={data.logo}
          logoWhite={data.logoWhite}
        >
          {children}
        </App>
      ); }
    }
  />
);

export const RootLayout = withRoot(Layout);
