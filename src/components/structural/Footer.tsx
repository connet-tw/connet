import * as React from "react";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Langs } from "../Langs";

import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = ({palette, spacing, breakpoints}: Theme) => createStyles({
  footer: {
    marginTop: spacing.unit * 3,
  },
  main: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: palette.secondary.dark,
    backgroundImage: `
      linear-gradient(to top, rgba(0,0,0,0.4), transparent)
    `,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: palette.secondary.dark,
    backgroundImage: `
      url(${require("../../images/patterns/cairo-pentagon-32.png")})
    `,
    backgroundRepeat: "repeat",
    opacity: 0.06,
  },
  mainInner: {
    paddingTop: "1.4rem",
    paddingLeft: spacing.unit * 3,
    paddingRight: spacing.unit * 3,
    paddingBottom: "0.4rem",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    display: "flex",
  },
  logoPane: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRight: `1px solid rgba(255,255,255,0.4)`,
  },
  logo: {
    width: 150,
    marginRight: "2rem",
  },
  contact: {
    marginLeft: "2rem",
    color: palette.common.white,
  },
  footerCopy: {
    padding: "0.8rem",
    backgroundColor: palette.primary.dark,
    textAlign: "center",
  },
  titleSpan: {
    color: palette.common.white,
  },
});

type Props = WithStyles<typeof styles> & {
  logo?: any;
};

const Footer: React.SFC<Props> = ({ classes, logo }) => (
  <footer className={classes.footer}>
    <div className={classes.main}>
      <div className={classes.mainOverlay}/>
      <div className={classes.mainInner}>
        <Grid container alignItems="center" justify="center" direction="column">
          <div className={classes.contact}>
            <Typography variant="title" color="inherit" gutterBottom>
              <FormattedMessage id="app.title"/>
            </Typography>
            <Typography variant="caption" color="inherit">
              <FormattedMessage id="contact.phone"/>
            </Typography>
            <Typography variant="caption" color="inherit">
              <FormattedMessage id="contact.email"/>
            </Typography>
          </div>
          <Divider/>
          <Langs/>
        </Grid>
      </div>
    </div>
    <div className={classes.footerCopy}>
      <Typography variant="caption" color="secondary">
        © 2018 Copyright: <span className={classes.titleSpan}><FormattedMessage id="app.title"/></span>
      </Typography>
    </div>
  </footer>
);

export default withStyles(styles)(Footer);
