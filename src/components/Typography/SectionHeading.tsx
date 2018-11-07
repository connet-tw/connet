import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";

const styles = ({breakpoints, palette, spacing}: Theme) => createStyles({
  root: {
  }
});

export const SectionHeadingBase: React.SFC<WithStyles<typeof styles>> = ({ children, classes }) => (
  <Typography
    variant="h2"
    component="h1"
    color="default"
    className={classes.root}
  >
    {children}
  </Typography>
);

export const SectionHeading = withStyles(styles)(SectionHeadingBase);
