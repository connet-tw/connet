import * as React from "react";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";
import Img from 'gatsby-image';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import EventIcon from "@material-ui/icons/Event";
// import DateRangeIcon from "@material-ui/icons/DateRange";
import { FormattedMessage } from "react-intl";
// import { isSameDay } from "../../utils/helpers";
import { EventNode } from "./Event";
import { EventCard } from "./index";
import * as m from "./Event.messages";

const styles = ({breakpoints, palette, spacing}: Theme) => createStyles({
  root: {
    background: palette.common.white,
    paddingBottom: spacing.unit * 3,
  },
  image: {
    width: "100%",
    maxHeight: 400,
  },
  content: {
    paddingLeft: spacing.unit * 3,
    paddingRight: spacing.unit * 3,
    [breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  header: {
    margin: "2rem 0",
  },
  heading: {
    color: palette.secondary.main,
    margin: "2rem 0",
  },
  events: {
    paddingLeft: 0,
    paddingRight: 0,
    [breakpoints.up("sm")]: {
      paddingLeft: spacing.unit * 3,
      paddingRight: spacing.unit * 3,
    },
  }
});

interface EventsListProps {
  events: EventNode[];
  image: any;
}

type Props = WithStyles<typeof styles> & EventsListProps;

const Component: React.SFC<Props> = ({ classes, image, events }) => {
  return (
    <article className={classes.root}>
      <Img className={classes.image} fluid={image.childImageSharp.fluid}/>
      <Grid container className={classes.content}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.header}>
            <Typography variant="h3" align="center">
              <FormattedMessage {...m.events.heading}/>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={24} className={classes.events}>
            { events.map(({node}, i) =>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <EventCard
                  image={node.frontmatter.image}
                  name={node.frontmatter.name}
                  address={node.frontmatter.address}
                  dateStart={node.frontmatter.dateStart}
                  dateEnd={node.frontmatter.dateEnd}
                  slug={node.fields.slug}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </article>
  );
}

const EventsList = withStyles(styles)(Component);

export {
  EventsList,
  EventsListProps,
};
