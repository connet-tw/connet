import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Img from "gatsby-image";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme) => createStyles({
  section: {
    width: "100%",
    background: theme.palette.common.white,
  },
  pane: {
    width: "100%",
    height: "100%",
  },
  before: {
    width: "100%",
  },
  after: {
    width: "100%",
    marginTop: "1em",
  },
  content: {
    padding: theme.spacing.unit * 3,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing.unit * 6,
    },
  },
  text: {},
  link: {
    marginTop: 24,
  },
  heading: {
    marginBottom: "0.4em",
  },
  subheading: {},
  paragraph: {},
  image: {
    height: "100%",
    width: "100%",
  },
});

export interface SectionCenteredProps {
  reverse?: boolean;
  image?: any;
  gradient?: string;
  heading?: string;
  link?: {label: string, to: string};
  subheading?: string;
  body?: string[];
  before?: any;
  after?: any;
}

type Props = WithStyles<typeof styles> & SectionCenteredProps;

const SectionCentered: React.SFC<Props> = ({
  classes, before, after, gradient, heading, link, subheading, body, image, reverse}) => (
  <section className={classes.section}>
    <Grid container className={classes.pane} direction={reverse ? "column-reverse" : "column"}>
      <Grid item xs={12}>
        <div className={classes.content}>
          {before && <div className={classes.before}>{before}</div>}
          { heading &&
            <Typography variant="display1" className={classes.heading}>
              {heading}
            </Typography>
          }
          { subheading &&
            <Typography variant="subheading" className={classes.subheading}>
              {subheading}
            </Typography>
          }
          { body &&
            <div className={classes.text}>
              {body.map((t, i) =>
                <Typography key={i} variant="body2" className={classes.paragraph}>
                  {t}
                </Typography>,
              )}
            </div>
          }
          { link &&
          <div className={classes.link}>
            <Link to={link.to}>
              <Button variant="outlined">
                {link.label}
              </Button>
            </Link>
          </div>
          }
          {after && <div className={classes.after}>{after}</div>}
        </div>
      </Grid>
      { image &&
        <Grid item xs={12} className={classes.pane}>
          <div className={classes.image}>
            <Img fluid={image.childImageSharp.fluid}/>
          </div>
        </Grid>
      }
    </Grid>
  </section>
);

export default withStyles(styles)(SectionCentered);
