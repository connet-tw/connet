import * as React from "react";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { FormattedMessage } from "react-intl";
import Img from 'gatsby-image';
import { EventDateCard } from "../EventDate";
import { Link } from "../../../i18n";
import { event } from "../Event.messages";

const styles = ({palette, spacing}: Theme) => createStyles({
  root: {
  },
  card: {
    height: "100%",
    position: "relative",
  },
  dates: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: spacing.unit * 3,
  },
  media: {
    height: 150,
  },
});

export interface EventCardProps {
  image?: any;
  name: string;
  address: string;
  dateStart: string;
  dateEnd: string;
  slug: string;
}

type Props = WithStyles<typeof styles> & EventCardProps;

export const EventCard: React.SFC<Props> = ({
  classes, image, name, dateStart, dateEnd, address, slug,
}) => {
  return (
    <Card className={classes.card}>
      <Img
        className={classes.media}
        fluid={image.childImageSharp.fluid}
      />
      <div className={classes.dates}>
        <EventDateCard dateStart={dateStart} dateEnd={dateEnd}/>
      </div>
      <CardContent>
        <Typography variant="title">
          {name}
        </Typography>
        <Typography variant="body2">
          {address}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"/events/" + slug}>
          <Button variant="outlined" color="primary">
            <FormattedMessage {...event.moreInfo}/>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export const StyledEventCard = withStyles(styles)(EventCard);
