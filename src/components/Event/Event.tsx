import * as React from "react";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";
import rehypeReact from "rehype-react";
import Img from 'gatsby-image';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import EventIcon from "@material-ui/icons/Event";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LanguageIcon from "@material-ui/icons/Language";
import { FormattedTime, FormattedDate } from "react-intl";
import { isSameDay } from "../../utils/helpers";

const P: React.SFC<{}> = ({children}) => (
  <Typography variant="body2">
    {children}
  </Typography>
);

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: P,
  },
}).Compiler;

const styles = ({breakpoints, palette, spacing}: Theme) => createStyles({
  root: {
    background: palette.common.white,
  },
  image: {
    width: "100%",
    maxHeight: 400,
  },
  content: {
    paddingLeft: spacing.unit * 3,
    paddingRight: spacing.unit * 3,
  },
  header: {
    textAlign: "center",
    borderBottom: `1px solid ${palette.grey[400]}`,
  },
  heading: {
    color: palette.secondary.main,
    margin: "2rem 0",
  },
  details: {
    borderBottom: `1px solid ${palette.grey[400]}`,
    textAlign: "center",
    [breakpoints.up("md")]: {
      borderBottom: "none",
    }
  },
  html: {
    padding: "1rem 0",
  },
});

interface EventProps {
  fields: {
    lang: string,
    slug: string,
  }
  frontmatter: {
    name: string,
    address: string,
    dateStart: string,
    dateEnd: string,
    image: any,
    www?: string,
  },
  htmlAst?: any,
  html?: any,
}

interface EventNode {
  node: EventProps;
}

type Props = WithStyles<typeof styles> & EventProps;

const Date = (props: {value: string}) =>
  <FormattedDate
    value={props.value}
    month="short"
    year="numeric"
    day="2-digit"
  />;

const Component: React.SFC<Props> = ({ classes, fields, frontmatter, htmlAst }) => {
  const sameDay = isSameDay(frontmatter.dateStart, frontmatter.dateEnd);
  const date = (
    <>
      <Date value={frontmatter.dateStart}/>
      {!sameDay && <><span> - </span><Date value={frontmatter.dateEnd}/></>}
    </>
  );

  return (
    <article className={classes.root}>
      <Img className={classes.image} fluid={frontmatter.image.childImageSharp.fluid}/>
      <Grid className={classes.content} container>
        <Grid item xs={12} className={classes.header}>
          <Typography
            variant="display1"
            color="inherit"
            className={classes.heading}
          >
            {frontmatter.name}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} className={classes.details}>
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon/>
              </ListItemIcon>
              <ListItemText primary={frontmatter.address}/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {sameDay ? <EventIcon/> : <DateRangeIcon/>}
              </ListItemIcon>
              <ListItemText primary={date}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccessTimeIcon/>
              </ListItemIcon>
              <ListItemText primary={
                <>
                  <FormattedTime value={frontmatter.dateStart}/>
                  <span> - </span>
                  <FormattedTime value={frontmatter.dateEnd}/>
                </>
                }
              />
            </ListItem>
            {!!frontmatter.www &&
              <ListItem>
                <ListItemIcon>
                  <LanguageIcon/>
                </ListItemIcon>
                <ListItemText primary={
                  <a href={"//" + frontmatter.www}>
                    {frontmatter.www}
                  </a>
                  }
                />
              </ListItem>
            }
          </List>
        </Grid>

        <Grid item xs={12} md={8}className={classes.html}>
          {renderAst(htmlAst)}
        </Grid>
      </Grid>
    </article>
  );
}

const Event = withStyles(styles)(Component);

export {
  Event,
  EventProps,
  EventNode,
};
