import * as React from "react";
import { withStyles, WithStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hero from "../../sections/Hero";
import Img from "gatsby-image";
import { WelcomeProps } from "./index";

const styles = (theme: Theme) => createStyles({
  section: {
    position: "relative",
    height: "100%",
    width: "100%",
    justifyConent: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    borderRadius: 4,
    border: `1px solid transparent`,
  },
  logo: {
    textAlign: "center",
    width: "50%",
  },
  textPane: {
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: "1rem",
    textAlign: "center",
  },
  heading: {
    fontFamily: "Cedarville Cursive, sans-serif",
    color: theme.palette.primary.main,
    marginBottom: "1.2em",
  },
  subheading: {
    color: theme.palette.secondary.main,
    fontWeight: 300,
  },
  quotes: {
  },
  blockquote: {
    margin: 0,
    marginBottom: "1rem",
    padding: 0,
    ["&:last-child"]: {
      marginBottom: 0,
    },
  },
  quote: {
    fontStyle: "italic",
    marginBottom: "0.4em",
    color: theme.palette.primary.main,
  },
  author: {
    color: theme.palette.secondary.main,
  },
});
type Props = WithStyles<typeof styles> & WelcomeProps;

const WelcomeMobile: React.SFC<Props> = ({ heading, subheading, logo, image, classes, quotes, gradient }) => (
  <Hero
    fullHeight
    image={image && image}
    before={logo &&
      <img className={classes.logo} src={logo.childImageSharp.fixed.src}/>
    }
    after={
        <div className={classes.text}>
          { heading &&
            <Typography
              className={classes.heading}
              variant="display1"
            >
              {heading}
            </Typography>

          }
          { subheading &&
            <Typography
              className={classes.subheading}
              variant="title"
            >
              {subheading}
            </Typography>
          }
          { quotes &&
            <div className={classes.quotes}>
              {quotes.map((q, i) =>
                <blockquote key={i} className={classes.blockquote}>
                  <Typography
                    variant="headline"
                    className={classes.quote}
                  >
                    {q.quote}
                  </Typography>
                  <Typography
                    className={classes.author}
                    variant="subheading"
                  >
                    {q.author}
                  </Typography>
                </blockquote>,
              )}
            </div>
          }
        </div>
    }
  />
);

export default withStyles(styles)(WelcomeMobile);
