import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../../styles/components/contact-details-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";

type Props = WithStyles<typeof styles> & {
  email: React.ReactNode;
  phone: React.ReactNode;
  address: React.ReactNode[];
};

const ContactDetailsBase: React.SFC<Props> = ({ email, phone, address, classes }) => (
  <section className={classes.section}>
    <div className={classes.details}>
      <Grid container spacing={32}>
        <Grid item md={4} xs={12}>
          <Paper className={classes.detailPane}>
            <PhoneIcon className={classes.icon}/>
            <div className={classes.textContent}>
              <Typography className={classes.detailText} variant="title">
                {phone}
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item md={4} xs={12}>
          <Paper className={classes.detailPane}>
            <EmailIcon className={classes.icon}/>
            <div className={classes.textContent}>
              <Typography className={classes.detailText} variant="title">
                {email}
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item md={4} xs={12}>
          <Paper className={classes.detailPane}>
            <HomeIcon className={classes.icon}/>
            <div className={classes.textContent}>
              <div className={classes.address}>
                {address.map((y, i) =>
                  <Typography key={i} className={classes.detailText} variant="title">
                    {y}
                  </Typography>,
                )}
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </section>
);

export const ContactDetails = withStyles(styles)(ContactDetailsBase);
