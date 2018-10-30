import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import HorizontalSplit from "./HorizontalSplit";
import Typography from "@material-ui/core/Typography";
import Img from "gatsby-image";

const styles = (theme: Theme) => createStyles({
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    background: theme.palette.background.paper,
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 6,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing.unit * 6,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  before: {
    width: "100%",
  },
  after: {
    width: "100%",
    marginTop: "1em",
  },
  body: {},
  heading: {
    marginBottom: "0.4em",
  },
  subheading: {
    marginBottom: "1em",
  },
  paragraph: {
    marginBottom: "1em",
    ["&:last-child"]: {
      marginBottom: 0,
    },
  },
});

export interface SectionImageProps {
  reverse?: boolean;
  image?: any;
  heading?: string;
  subheading?: string;
  body?: string[];
  before?: any;
  after?: any;
}

type Props = SectionImageProps & WithStyles<typeof styles>;

const SectionImage: React.SFC<Props> = ({
  classes, before, after, reverse, heading, subheading, body, image}) => (
  <HorizontalSplit
    reverse={reverse}
    left={image && <Img className={classes.image} fluid={image.childImageSharp.fluid}/>}
    right={
      <div className={classes.content}>
        {before && <div className={classes.before}>{before}</div>}
        { heading &&
          <Typography
            variant="display1"
            className={classes.heading}
          >
            {heading}
          </Typography>
        }
        { subheading &&
          <Typography
            variant="headline"
            className={classes.subheading}
          >
            {subheading}
          </Typography>
        }
        { body &&
          <div className={classes.body}>
            {body.map((t, i) =>
            <Typography
              key={i}
              variant="body2"
              className={classes.paragraph}
            >
                {t}
              </Typography>,
            )}
          </div>
        }
        {after && <div className={classes.after}>{after}</div>}
      </div>
    }
  />
);

export default withStyles(styles)(SectionImage);
