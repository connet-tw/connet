import * as React from "react";
import { HeaderBar, NavItem } from "./HeaderBar";

export { NavItem };

export interface HeaderProps {
  logo: string;
  navItems: NavItem[];
}

interface State {
  menu: boolean;
}

export class Header extends React.Component<HeaderProps, State> {
  state: State = {
    menu: false,
  };

  toggleMenu = () => {
    this.setState({menu: !this.state.menu});
  }

  handleClose = () => {
    this.setState({menu: false});
  }

  render() {
    const { logo, navItems } = this.props;

    return (
      <HeaderBar
        logo={logo}
        navItems={navItems}
        toggleMenu={this.toggleMenu}
        handleClose={this.handleClose}
        open={this.state.menu}
      />
    );
  }
};
