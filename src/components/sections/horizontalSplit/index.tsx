import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
  container: {
    width: "100%",
    background: theme.palette.common.white,
  },
  item: {
    width: "100%",
  },
});

export interface HorizontalSplitProps {
  left: any;
  right: any;
  classes: any;
  reverse?: boolean;
}

type Props = WithStyles<typeof styles> & HorizontalSplitProps;

class HorizontalSplit extends React.Component<Props, {}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { classes, reverse, left, right } = this.props;

    return (
      <Grid container className={classes.container} direction={(reverse ? "row-reverse" : "row")}>
        <Grid item xs={12} md={6} className={classes.item}>
          {left}
        </Grid>
        <Grid item xs={12} md={6} className={classes.item}>
          {right}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(HorizontalSplit);
