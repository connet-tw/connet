import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./categories-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Link } from "../../../i18n";
import Img from "gatsby-image";

interface CategoryLink {
  label: React.ReactNode;
  text?: React.ReactNode;
  buttonText: React.ReactNode;
  image: any;
  to: string;
}

type Props = WithStyles<typeof styles> & {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  categoryLinks: CategoryLink[];
  image?: any;
  gradient?: string;
};

const Component: React.SFC<Props> = ({ classes, image, gradient, heading, subheading, categoryLinks }) => (
  <section className={classes.root}>
    <div className={classes.header}>
      <Typography variant="h5" className={classes.heading}>
        {heading}
      </Typography>
      <Typography variant="body2" className={classes.subheading}>
        {subheading}
      </Typography>
    </div>
    <Grid container spacing={24} className={classes.cards}>
      {categoryLinks.map((x) =>
        <Grid key={x.to}item xs={12} sm={6} md={3} xl={2}>
          <Link to={x.to}>
            <Card className={classes.card}>
              <Img className={classes.image} fluid={x.image.childImageSharp.fluid}/>
              <CardContent className={classes.content}>
                <Typography
                  color="inherit"
                  className={classes.label}
                  variant="h6"
                >
                  {x.label}
                </Typography>
                {x.text &&
                  <Typography
                    color="inherit"
                    className={classes.text}
                    variant="subtitle1"
                  >
                    {x.text}
                  </Typography>
                }
              </CardContent>
              <CardActions className={classes.actions}>
                <Button variant="outlined">
                  {x.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>,
      )}
    </Grid>
  </section>
);

export const Categories = withStyles(styles)(Component);
