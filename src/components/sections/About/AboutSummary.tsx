import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";

const styles = ({breakpoints, palette, spacing}: Theme) => createStyles({
  root: {
    borderTop: `2px solid ${palette.primary.main}`,
    marginBottom: spacing.unit * 3,
    background: palette.common.white,
    padding: spacing.unit * 3,
  },
  header: {
    margin: "1rem 0",
    textAlign: "center",
  },
  heading: {},
  subheading: {
    marginTop: "1rem",
  },
  highlights: {
    marginTop: "2rem",
  },
  highlight: {
    textAlign: "center",
  },
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
        <Typography className={classes.heading} variant="h4">
          {heading}
        </Typography>
        {!!subheading &&
          <Typography color="textSecondary" className={classes.subheading} variant="h6">
            {subheading}
          </Typography>
        }
        {!!body && body.map((x, i) =>
          <Typography key={i} variant="body1">
            {x}
          </Typography>
        )}
      </div>
      {!!highlights &&
        <div className={classes.highlights}>
          <Grid container spacing={16}>
            {highlights.map((h, i) =>
              <Grid item key={i} xs={12} sm={6} md={3} className={classes.highlight}>
                <Typography color="primary" variant="h4">
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
