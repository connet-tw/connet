import * as React from "react";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
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

const navItems = ["services", "about", "contact", "technology"];

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
}) => (
    <div>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Link to={"/"} className={classes.brand}>
            <img className={classes.logo} src={logo.childImageSharp.fixed.src}/>
            <Typography className={classes.title} variant="title">
              <FormattedMessage id="app.title"/>
            </Typography>
          </Link>
          <div className={classes.grow}/>
          <List className={classes.items}>
            {navItems.map((x) =>
            <ListItem button={true} className={classes.item}>
              <Link to={"/" + x}>
                <ListItemText primary={<FormattedMessage id={`nav.${x}`}/>}/>
              </Link>
            </ListItem>
            ) }
          </List>
          <IconButton color="primary" onClick={toggleMenu}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Nav
        logo={logo}
        open={open}
        handleClose={handleClose}
      />
    </div>
);

export default injectIntl(withStyles(styles)(HeaderBar));
