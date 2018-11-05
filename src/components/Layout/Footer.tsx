import * as React from "react";
import { FormattedMessage } from "react-intl";
import { messages } from "./Footer.messages";
import Typography from "@material-ui/core/Typography";
import { FooterLangs } from "../Langs";

import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = ({palette, spacing, breakpoints}: Theme) => createStyles({
  footer: {
    marginTop: spacing.unit * 3,
  },
  main: {
    position: "relative",
    padding: 0,
    overflow: "hidden",
    backgroundColor: palette.primary.main,
    backgroundImage: `
      linear-gradient(to top, rgba(0,0,0,0.4), transparent)
    `,
  },
  mainOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: palette.grey[700],
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  contact: {
    color: palette.common.white,
  },
  langs: {
    marginTop: "1rem",
  },
  footerCopy: {
    padding: "0.8rem",
    backgroundColor: palette.grey[900],
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
        <div className={classes.contact}>
          <Typography variant="title" color="inherit" gutterBottom>
            <FormattedMessage id="app.title"/>
          </Typography>
          <Typography variant="caption" color="inherit">
            <FormattedMessage {...messages.phoneNumber}/>
          </Typography>
          <Typography variant="caption" color="inherit">
            <FormattedMessage {...messages.emailAddress}/>
          </Typography>
        </div>
        <div className={classes.langs}>
          <FooterLangs/>
        </div>
      </div>
    </div>
    <div className={classes.footerCopy}>
      <Typography variant="caption" color="secondary">
        © 2018 Copyright: <span className={classes.titleSpan}>
          <FormattedMessage {...messages.title}/>
        </span>
      </Typography>
    </div>
  </footer>
);

export default withStyles(styles)(Footer);
