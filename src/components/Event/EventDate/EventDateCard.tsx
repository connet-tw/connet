import * as React from "react";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";
import Moment from "moment";
import Typography from "@material-ui/core/Typography";

const styles = ({palette, spacing}: Theme) => createStyles({
  root: {
    display: "flex",
    background: palette.common.white,
    alignItems: "center",
  },
  date: {
    width: 60,
    height: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  day: {
    marginBottom: "0.2rem",
  },
  month: {
  },
  to: {
    width: spacing.unit * 1,
    height: 2,
    background: palette.primary.main,
    margin: "0 0.2rem",
  },
});

export interface EventDateCardProps {
  dateStart: string;
  dateEnd: string;
}

type Props = WithStyles<typeof styles> & EventDateCardProps;

export const EventDateCard: React.SFC<Props> = ({ classes, dateStart, dateEnd }) => {
  const CalendarCard = ({date}: {date: Moment.Moment}) => (
    <div className={classes.date}>
      <Typography variant="body2" color="secondary" className={classes.month}>
        {date.format("MMM")}
      </Typography>
      <Typography variant="title" className={classes.day}>
        {date.format("DD")}
      </Typography>
    </div>
  );

  const ds = Moment(dateStart);
  const de = Moment(dateEnd);

  return (
    <div className={classes.root}>
      <CalendarCard date={ds}/>
      { !ds.isSame(de, "day") &&
        <>
          <div className={classes.to}/>
          <CalendarCard date={de}/>
        </>
      }
    </div>
  );
}

export const StyledEventDateCard = withStyles(styles)(EventDateCard);
