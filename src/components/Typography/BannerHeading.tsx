import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";

const styles = ({breakpoints, palette, spacing}: Theme) => createStyles({
  root: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: "2.2rem",
    [breakpoints.up("md")]: {
      fontSize: "3rem",
    }
  },
});

export const BannerHeadingBase: React.SFC<WithStyles<typeof styles>> = ({ children, classes }) => (
  <Typography
    variant="h2"
    component="h1"
    color="primary"
    className={classes.root}
  >
    {children}
  </Typography>
);

export const BannerHeading = withStyles(styles)(BannerHeadingBase);
