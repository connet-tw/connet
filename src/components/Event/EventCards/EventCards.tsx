import * as React from "react";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core/styles";
import {  StyledEventCard as EventCard } from "./EventCard";
import { EventProps } from "../Event";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "../../Button";
import { FormattedMessage } from "react-intl";
import { event } from "../Event.messages";

const styles = ({breakpoints, palette, spacing}: Theme) => createStyles({
  root: {
    borderTop: `2px solid ${palette.secondary.main}`,
    background: palette.common.white,
    paddingLeft: spacing.unit * 3,
    paddingRight: spacing.unit * 3,
    [breakpoints.up("md")]: {
      padding: 0,
      marginTop: "2rem",
    },
  },
  card: {
    height: "100%",
  },
  header: {
    margin: "2rem 0",
    textAlign: "center",
  },
  lastCard: {
    padding: spacing.unit * 3,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  content: {
  },
  actions: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "row",
  },
  button: {
    marginRight: "0.6rem",
  }
});

export interface EventCardsProps {
  events: {node: EventProps}[];
}

type Props = WithStyles<typeof styles> & EventCardsProps;

export const EventCards: React.SFC<Props> = ({
  classes, events,
}) => {
  return (
    <section className={classes.root}>
      <div className={classes.header}>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...event.comingEvents}/>
        </Typography>
      </div>
      { (events.length > 1) &&
        <Grid container spacing={16} justify="center">
          {events.slice(0,3).map(({node}, i) =>
            <Grid key={i} item xs={12} md={4} lg={3}>
              <EventCard
                name={node.frontmatter.name}
                address={node.frontmatter.address}
                dateStart={node.frontmatter.dateStart}
                dateEnd={node.frontmatter.dateEnd}
                image={node.frontmatter.image}
                slug={node.fields.slug}
              />
            </Grid>
          )}
        </Grid>
      }
      <div className={classes.lastCard}>
        <div className={classes.content}>
          { (events.length > 3) &&
            <Typography
              variant="title"
              color="secondary"
              gutterBottom
            >
              <FormattedMessage {...event.moreEventsHeading}/>
            </Typography>
          }
          <Typography variant="subheading">
            <FormattedMessage {...event.moreEventsSubheading}/>
          </Typography>
        </div>
        <div className={classes.actions}>
          <Button className={classes.button} variant="outlined" color="primary">
            <FormattedMessage {...event.allEvents}/>
          </Button>
          <Button variant="contained" color="primary">
            <FormattedMessage {...event.contact}/>
          </Button>
        </div>
      </div>
    </section>
  );
};

export const StyledEventCards = withStyles(styles)(EventCards);
