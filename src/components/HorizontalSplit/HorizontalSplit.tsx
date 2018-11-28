import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";

const styles = ({palette, spacing}: Theme) => createStyles({});

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface HorizontalSplitProps {
  id?: string;
  left: React.ReactNode;
  right: React.ReactNode;
  leftSize?: Size;
  rightSize?: Size;
  reverse?: boolean
}

type Props = WithStyles<typeof styles> & HorizontalSplitProps;

export const HorizontalSplit: React.SFC<Props> = ({
  classes, left, right, leftSize, rightSize, reverse, id
}) => {
  return (
    <section id={id}>
      <Grid container direction={(reverse ? "row-reverse" : "row")}>
        <Grid item xs={12} md={leftSize}>
          { left }
        </Grid>
        <Grid item xs={12} md={rightSize}>
          { right }
        </Grid>
      </Grid>
    </section>
  );
}

HorizontalSplit.defaultProps = {
  leftSize: 6,
  rightSize: 6,
  reverse: false,
};

export const StyledHorizontalSplit = withStyles(styles)(HorizontalSplit);
