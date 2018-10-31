import * as React from "react";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Nav from "./Nav";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import { Link } from "../../i18n";

const navLinks = [
  {to: "/technology", id: "nav.technology"},
  {to: "/services", id: "nav.services"},
  {to: "/about", id: "nav.about"},
  {to: "/contact", id: "nav.contact"},
];

const styles = (theme: Theme) => createStyles({
  bar: {
    backgroundColor: theme.palette.common.white,
    height: 64,
  },
  grow: {
    flex: 1,
  },
  brand: {
    display: "flex",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginTop: 5,
    marginRight: "1rem",
    width: 70,
  },
  title: {
  },
  link: {
    color: theme.palette.primary.main,
  },
  items: {
    display: "flex",
    flexDirection: "row",
  },
  item: {
    padding: "0 0.2rem",
  },
  langs: {
    display: "flex",
  },
  lang: {
    color: theme.palette.primary.light,
    textTransform: "lowercase",
    opacity: 0.6,
  },
  activeLang: {
    color: theme.palette.primary.main,
    opacity: 1,
    fontWeight: 700,
  },
});

export interface HeaderBarProps {
  handleClose: any;
  toggleMenu: any;
  open: any;
  logo: any;
}

const HeaderBar: React.SFC<HeaderBarProps & InjectedIntlProps & WithStyles<typeof styles>> = ({
  classes, open, handleClose, toggleMenu, logo, intl,
}) => {
  const brand = (
    <Link to={"/"} className={classes.brand}>
      <img className={classes.logo} src={logo.childImageSharp.fixed.src}/>
      <Typography className={classes.title} variant="title">
        <FormattedMessage id="app.title"/>
      </Typography>
    </Link>
  );

  const links = (
    <List className={classes.items}>
      {navLinks.map((x) =>
      <ListItem button={true} className={classes.item}>
        <Link to={x.to}>
          <ListItemText primary={<FormattedMessage id={x.id}/>}/>
        </Link>
      </ListItem>
      ) }
    </List>
  );

  const hamburger = (
    <IconButton color="primary" onClick={toggleMenu}>
      <MenuIcon/>
    </IconButton>
  );

  return (
    <div>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          {brand}
          <div className={classes.grow}/>
          <Hidden smDown>{links}</Hidden>
          <Hidden mdUp>{hamburger}</Hidden>
        </Toolbar>
      </AppBar>
      <Nav
        logo={logo}
        navLinks={navLinks}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default injectIntl(withStyles(styles)(HeaderBar));
