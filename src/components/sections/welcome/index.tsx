import * as React from "react";
import Hidden from "@material-ui/core/Hidden";
import WelcomeDesktop from "./WelcomeDesktop";
import WelcomeMobile from "./WelcomeMobile";

export interface WelcomeProps {
  heading?: string;
  subheading?: string;
  logo?: any;
  image?: any;
  quotes?: Array<{quote: string, author: string}>;
  gradient?: string;
}

const Welcome: React.SFC<WelcomeProps> = (props) => (
  <>
    <Hidden smUp>
      <WelcomeMobile {...props}/>
    </Hidden>

    <Hidden xsDown>
      <WelcomeDesktop {...props}/>
    </Hidden>
  </>
);

export default Welcome;
