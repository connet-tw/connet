import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Img from "gatsby-image";
import { HeroProps } from "./index";

const styles = (theme: Theme) => createStyles({
  section: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  fullHeight: {
    minHeight: "calc(100vh - 64px)",
  },
  header: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  headerContent: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  container: {
    position: "relative",
    width: "100%",
    padding: theme.spacing.unit * 3,
    borderTop: `1px solid ${theme.palette.common.white}`,
    borderBottom: `1px solid ${theme.palette.common.white}`,
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.8,
    background: "linear-gradient(60deg, #fff, #eee)",
    zIndex: -1,
  },
  heading: {
    color: theme.palette.primary.main,
  },
  subheading: {
    color: theme.palette.secondary.main,
    marginTop: "1rem",
  },
  content: {
    padding: theme.spacing.unit * 3,
  },
  text: {
    textAlign: "center",
  },
  paragraph: {},
});

type Props = WithStyles<typeof styles> & HeroProps;

const HeroMobile: React.SFC<Props> = ({
  classes, before, after, gradient, heading, subheading, text, image, fullHeight,
}) => (
  <section
    className={classes.section}
  >
    <div className={classes.header}>
      {image &&
        <div className={classes.image}>
          <Img
            className={classes.img}
            fluid={image.childImageSharp.fluid}
          />
        </div>
      }
      <div className={classes.headerContent}>
        <div className={classes.container}>
          <div className={classes.overlay}/>
          {before && before}
          <Typography
            className={classes.heading}
            variant="h4"
          >
            {heading}
          </Typography>
          <Typography variant="h6">
            {subheading}
          </Typography>
        </div>
      </div>
    </div>
    <div className={classes.content}>
      { text &&
        <div className={classes.text}>
          {text.map((t, i) =>
            <Typography key={i} variant="body2" color="inherit" className={classes.paragraph}>
              {t}
            </Typography>,
          )}
        </div>
      }
      {after && after}
    </div>
  </section>
);

export default withStyles(styles)(HeroMobile);
