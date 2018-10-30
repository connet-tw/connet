import * as React from "react";
import Head from "../structural/Head";
import Header from "../structural/Header";
import Footer from "../structural/Footer";
import Policy from "../Policy";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/layout-styles";

export interface AppProps {
  logo: any;
  logoWhite: any;
}

const StyledApp: React.SFC<AppProps & WithStyles<typeof styles>> = ({
  logo, logoWhite, classes, children,
}) => (
  <div className={classes.layout}>
    <CssBaseline/>
    <Policy />

    <Head/>

    <Header logo={logo}/>

    <main className={classes.main}>
      {children}
    </main>

    <Footer logo={logoWhite}/>
  </div>
);

export const App = withStyles(styles)(StyledApp);
