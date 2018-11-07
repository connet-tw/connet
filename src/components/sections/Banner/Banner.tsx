import * as React from "react";
import { BannerHeading, BannerSubheading } from "../../Typography";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";
import Img from "gatsby-image";

const styles = ({breakpoints, palette, spacing}: Theme) => createStyles({
  root: {
    position: "relative",
    minHeight: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    [breakpoints.up("md")]: {
      minHeight: 400,
    },
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    marginTop: "3rem",
    position: "relative",
    zIndex: 2,
    padding: `2rem ${spacing.unit *3}px`,
    textAlign: "center",
    ["&::before"]: {
      zIndex: -1,
      position: "absolute",
      content: "''",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderTop: `1px solid ${palette.common.white}`,
      background: "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,1))",
      opacity: 0.9,
    }
  },
});

interface BannerProps {
  heading: React.ReactNode;
  subheading: React.ReactNode;
  image: any;
}

type BaseProps = WithStyles<typeof styles> & BannerProps;

const BannerBase: React.SFC<BaseProps> = ({
  classes, heading, subheading, image
}) => {
  return (
    <section className={classes.root}>
      <div className={classes.imageContainer}>
        <Img className={classes.image} fluid={image.childImageSharp.fluid}/>
      </div>
      <div className={classes.content}>
        <BannerHeading>
          {heading}
        </BannerHeading>
        <BannerSubheading>
          {subheading}
        </BannerSubheading>
      </div>
    </section>
  );
}

const Banner = withStyles(styles)(BannerBase);

export {
  Banner,
  BannerProps,
};
