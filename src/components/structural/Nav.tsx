import * as React from "react";
import { FormattedMessage } from "react-intl";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/nav-styles";
import Link from "gatsby-link";
import CloseIcon from "@material-ui/icons/Close";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const navLinks: any[] = [
  {to: "/", label: "Home"},
];

export interface NavLink {
  to: string;
  label: string;
  links: Array<{to: string, label: string}>;
}

export interface ContactGroup {
  name: string;
  phone: string;
  email: string;
}

export interface NavProps  {
  handleClose: any;
  open: any;
  logo: any;
}

const Nav: React.SFC<NavProps & WithStyles<typeof styles>> = ({
  open, handleClose, classes, logo,
}) => (
  <Drawer anchor="right" open={open} onClose={handleClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={handleClose}
      onKeyDown={handleClose}
      className={classes.nav}
    >
      <IconButton className={classes.close}>
        <CloseIcon color="secondary"/>
      </IconButton>
      <img className={classes.logo} src={logo.childImageSharp.fixed.src}/>
      <Typography variant="title" className={classes.title}>
        <FormattedMessage id="app.title"/>
      </Typography>
      <List className={classes.list}>
        {
          navLinks.map((x: any) => {
            return (
              x.links ?
              <ListItem key={x.to} className={classes.listItem}>
                <List className={classes.list}>
                  <ListItem button className={classes.listItem}>
                    <Link to={x.to} className={classes.link}>
                      <ListItemText primary={x.to}>
                      </ListItemText>
                    </Link>
                  </ListItem>
                  {x.links.map((y: any) =>
                    <ListItem button key={y.to} className={classes.listItem}>
                      <Link to={y.to} className={classes.linkNested}>
                        <Typography
                          variant="body1"
                          color="inherit"
                          className={classes.linkNestedText}
                        >
                          {y.label}
                        </Typography>
                      </Link>
                    </ListItem>,
                  )}
                </List>
              </ListItem>
              :
              <ListItem key={x.to} button className={classes.listItem}>
                <Link to={x.to} className={classes.link}>
                  <Typography
                    variant="body1"
                    color="inherit"
                    className={classes.linkText}
                  >
                    {x.label}
                  </Typography>
                </Link>
              </ListItem>
            );
          })
        }
      </List>
      <div className={classes.contact}>
        <div className={classes.details}>
          <PhoneIcon className={classes.icon}/>
          <Typography color="inherit" gutterBottom>
            <FormattedMessage id="contact.phone"/>
          </Typography>
        </div>
        <div className={classes.details}>
          <EmailIcon className={classes.icon}/>
          <Typography color="inherit">
            <FormattedMessage id="contact.email"/>
          </Typography>
        </div>
      </div>
    </div>
  </Drawer>
);

export default withStyles(styles)(Nav);
