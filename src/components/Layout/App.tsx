import * as React from "react";
import Head from "./Head";
import { Header, NavItem } from "./Header";
import Footer from "./Footer";
import Policy from "../Policy";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/layout-styles";

export { NavItem };

export interface AppProps {
  logo: any;
  logoWhite: any;
  navItems: NavItem[];
}

const StyledApp: React.SFC<AppProps & WithStyles<typeof styles>> = ({
  logo, navItems, logoWhite, classes, children,
}) => (
  <div className={classes.layout}>
    <CssBaseline/>
    <Policy />

    <Head/>

    <Header navItems={navItems} logo={logo}/>

    <main className={classes.main}>
      {children}
    </main>

    <Footer logo={logoWhite}/>
  </div>
);

export const App = withStyles(styles)(StyledApp);
