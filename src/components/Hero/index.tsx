import * as React from "react";
import Hidden from "@material-ui/core/Hidden";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export interface HeroProps {
  image?: any;
  gradient?: string;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  text?: React.ReactNode[];
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

export {
  Hero
};
