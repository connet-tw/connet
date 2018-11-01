import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import Img from "gatsby-image";
import { HeroProps } from "./index";

const styles = (theme: Theme) => createStyles({
  section: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  fullHeight: {
    minHeight: "calc(100vh - 64px)",
  },
  container: {
    margin: "3rem 0",
    textAlign: "center",
    position: "relative",
    width: "100%",
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 6,
    paddingLeft: theme.spacing.unit * 6,
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
  text: {},
  header: {
    marginBottom: "1em",
  },
  heading: {
  },
  subheading: {
    marginTop: "1rem",
  },
  paragraph: {},
});

type Props = WithStyles<typeof styles> & HeroProps;

const HeroDesktop: React.SFC<Props> = ({
  classes, before, after, gradient, heading, subheading, text, image, fullHeight,
}) => (
  <section
    className={classnames(classes.section, (fullHeight && classes.fullHeight))}
  >
    <div className={classes.image}>
      {image && <Img className={classes.img} fluid={image.childImageSharp.fluid}/>}
    </div>
    <div className={classes.container}>
      <div className={classes.overlay}/>
      {before && before}
      <div className={classes.header}>
        { heading &&
          <Typography variant="h3" className={classes.heading}>
            {heading}
          </Typography>
        }
        { subheading &&
          <Typography variant="h5" className={classes.subheading}>
            {subheading}
          </Typography>
        }
      </div>
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

export default withStyles(styles)(HeroDesktop);
