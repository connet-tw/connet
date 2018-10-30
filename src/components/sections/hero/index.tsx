import * as React from "react";
import Hidden from "@material-ui/core/Hidden";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export interface HeroProps {
  image?: any;
  gradient?: string;
  heading?: string;
  subheading?: string;
  text?: string[];
  before?: any;
  after?: any;
  fullHeight?: boolean;
}

const Hero: React.SFC<HeroProps> = (props) => (
  <>
    <Hidden smUp>
      <HeroMobile {...props}/>
    </Hidden>

    <Hidden xsDown>
      <HeroDesktop {...props}/>
    </Hidden>
  </>
);

export default Hero;
