import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import withRoot from "../../utils/withRoot";
import { defineMessages, FormattedMessage } from "react-intl";

import { App, NavItem } from "./App";

interface Data {
  logo: any;
  logoWhite: any;
}

const m = defineMessages({
  services: {
    id: "nav.services",
    defaultMessage: "Services",
  },
  contact: {
    id: "nav.contact",
    defaultMessage: "Contact",
  },
  about: {
    id: "nav.about",
    defaultMessage: "About",
  },
});

const navItems: NavItem[] = [
  {to: "/services", label: <FormattedMessage {...m.services}/>},
  {to: "/about", label: <FormattedMessage {...m.about}/>},
  {to: "/contact", label: <FormattedMessage {...m.contact}/>},
];

export const Layout: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        logo: file(relativePath: {eq: "logos/logo.png"}) {
          childImageSharp {
            fixed(width: 220) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        logoWhite: file(relativePath: {eq: "logos/logo.png"}) {
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
