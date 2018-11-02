import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";

const styles = ({breakpoints, palette, spacing}: Theme) => createStyles({
  root: {
  },
  header: {
  },
  highlights: {},
  highlight: {},
});

interface Highlight {
  heading: React.ReactNode;
  subheading: React.ReactNode;
}

interface AboutSummaryProps {
  heading: React.ReactNode; 
  subheading?: React.ReactNode; 
  body?: React.ReactNode[];
  highlights: Highlight[];
}

type Props = WithStyles<typeof styles> & AboutSummaryProps;

const Component: React.SFC<Props> = ({
  classes, heading, subheading, body, highlights
}) => {
  return (
    <section className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h4">
          {heading}
        </Typography>
        {!!subheading &&
          <Typography variant="h6">
            {subheading}
          </Typography>
        }
        {!!body && body.map((x, i) =>
          <Typography variant="body1">
            {x}
          </Typography>
        )}
      </div>
      {!!highlights &&
        <div className={classes.highlights}>
          <Grid container spacing={16}>
            {highlights.map((h, i) =>
              <Grid direction="column" alignItems="center" className={classes.highlight}>
                <Typography variant="h4">
                  {h.heading}
                </Typography>
                <Typography variant="overline">
                  {h.subheading}
                </Typography>
              </Grid>
            )}
          </Grid>
        </div>
      }
    </section>
  );
}

const AboutSummary = withStyles(styles)(Component);

export {
  AboutSummary,
  AboutSummaryProps,
  Highlight,
};
