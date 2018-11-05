import * as React from "react";
import { FormattedMessage } from "react-intl";
import { messages } from "./Nav.messages";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/nav-styles";
import { Link } from "../../i18n";
import CloseIcon from "@material-ui/icons/Close";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

interface NavItem {
  to: string;
  label: React.ReactNode;
}

interface NavProps  {
  handleClose: any;
  open: any;
  logo: any;
  navItems: NavItem[];
}

const UnstyledNav: React.SFC<NavProps & WithStyles<typeof styles>> = ({
  open, handleClose, classes, logo, navItems
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
        <FormattedMessage {...messages.title}/>
      </Typography>
      <List className={classes.list}>
        {
          navItems.map((x: any) => {
            return (
              x.links ?
              <ListItem key={x.to} className={classes.listItem}>
                <List className={classes.list}>
                  <ListItem button className={classes.listItem}>
                    <Link to={x.to} className={classes.link}>
                      <ListItemText primary={x.label}>
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
                  <ListItemText primary={x.label}/>
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
            <FormattedMessage {...messages.phoneNumber}/>
          </Typography>
        </div>
        <div className={classes.details}>
          <EmailIcon className={classes.icon}/>
          <Typography color="inherit">
            <FormattedMessage {...messages.emailAddress}/>
          </Typography>
        </div>
      </div>
    </div>
  </Drawer>
);

const Nav = withStyles(styles)(UnstyledNav);

export {
  Nav, NavItem, NavProps
};
