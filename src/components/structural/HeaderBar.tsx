import * as React from "react";
import { injectIntl, InjectedIntlProps } from "react-intl";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Nav from "./Nav";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Link from "gatsby-link";

const styles = (theme: Theme) => createStyles({
  bar: {
    backgroundColor: theme.palette.common.white,
    height: 64,
  },
  grow: {
    flex: 1,
  },
  brand: {
  },
  logo: {
    width: 70,
    marginBottom: 5,
  },
  link: {
    color: theme.palette.primary.main,
  },
  title: {
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
          <Link to={"/"}>
            <div>
              <img className={classes.logo} src={logo.childImageSharp.fixed.src}/>
            </div>
          </Link>
          <div className={classes.grow}/>
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
