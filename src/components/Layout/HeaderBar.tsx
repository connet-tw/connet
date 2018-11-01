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
import { Nav, NavItem } from "./Nav";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import { Link } from "../../i18n";
import { HeaderLangs } from "../Langs/HeaderLangs";

export { NavItem };
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
    marginLeft: "1rem",
  },
});

export interface HeaderBarProps {
  handleClose: any;
  toggleMenu: any;
  navItems: NavItem[];
  open: any;
  logo: any;
}

const UnstyledHeaderBar: React.SFC<HeaderBarProps & InjectedIntlProps & WithStyles<typeof styles>> = ({
  classes, open, handleClose, toggleMenu, logo, navItems, intl,
}) => {
  const brand = (
    <Link to={"/"} className={classes.brand}>
      <img className={classes.logo} src={logo.childImageSharp.fixed.src}/>
      <Hidden smDown>
        <Typography className={classes.title} variant="title">
          <FormattedMessage id="app.title"/>
        </Typography>
      </Hidden>
    </Link>
  );

  const links = (
    <List className={classes.items}>
      {navItems.map((x) =>
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
          <div className={classes.langs}>
            <HeaderLangs/>
          </div>
          <Hidden mdUp>{hamburger}</Hidden>
        </Toolbar>
      </AppBar>
      <Nav
        logo={logo}
        navItems={navItems}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export const HeaderBar = injectIntl(
  withStyles(styles)(UnstyledHeaderBar)
);
