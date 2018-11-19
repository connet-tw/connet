import * as React from "react";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "../../Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { FormattedMessage } from "react-intl";
import { Link } from "../../../i18n";
import Img from 'gatsby-image';
import { EventDateCard } from "../EventDate";
import { event } from "../Event.messages";

const styles = ({breakpoints, palette, spacing}: Theme) => createStyles({
  root: {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100%",
    [breakpoints.up("md")]: {
      overflow: "auto",
    },
  },
  image: {
    width: "100%",
    [breakpoints.up("md")]: {
      height: 400,
    }
  },
  dates: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: spacing.unit * 3,
    marginBottom: "1rem",
  },
  content: {
    zIndex: 1,
    position: "relative",
    marginTop: -60,
    minHeight: 60,
    [breakpoints.up("md")]: {
      minHeight: 150,
      marginTop: -150,
      flexDirection: "row",
      alignItems: "center",
    },
    padding: spacing.unit * 3,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    ["&::before"]: {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 60px)",
      [breakpoints.up("md")]: {
        background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 150px)",
      },
      zIndex: 0,
    },
  },
  description: {
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  details: {
    color: palette.common.white,
  },
  name: {
  },
  venue: {
    display: "flex",
    alignItems: "center",
  },
  address: {
  },
  actions: {
    marginTop: "1rem",
    display: "flex",
  },
  button: {
    marginRight: "0.6rem",
    flexShrink: 0,
  }
});

export interface EventBannerProps {
  name: string;
  dateStart: string;
  dateEnd: string;
  address: string;
  slug: string;
  image: any;
}

type Props = WithStyles<typeof styles> & EventBannerProps;

export const EventBanner: React.SFC<Props> = ({
  classes, image, name, dateStart, dateEnd, address, slug,
}) => {
  return (
    <section className={classes.root}>
      <Img className={classes.image} fluid={image.childImageSharp.fluid}/>
      <div className={classes.dates}>
        <EventDateCard dateStart={dateStart} dateEnd={dateEnd}/>
      </div>

      <div className={classes.content}>
        <div className={classes.description}>
          <div className={classes.details}>
            <Typography color="inherit" variant="caption">
              <FormattedMessage {...event.nextEvent}/>
            </Typography>
            <Typography
              color="inherit"
              variant="headline"
              gutterBottom
              className={classes.name}
            >
              {name}
            </Typography>
            <div className={classes.venue}>
              <LocationOnIcon color="secondary"/>
              <Typography color="inherit" variant="subheading" className={classes.address}>
                {address}
              </Typography>
            </div>
         </div>
        </div>

        <div className={classes.actions}>
          <Link to={"/events/" + slug} className={classes.button}>
            <Button size="large" variant="contained">
              <FormattedMessage {...event.moreInfo}/>
            </Button>
          </Link>
          <Link to={"/events/"} className={classes.button}>
            <Button size="large" variant="outlined" white>
              <FormattedMessage {...event.allEvents}/>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const StyledEventBanner = withStyles(styles)(EventBanner);
