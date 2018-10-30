import * as React from "react";
import HeaderBar from "./HeaderBar";

export interface HeaderProps {
  logo: string;
}

interface State {
  menu: boolean;
}

class Header extends React.Component<HeaderProps, State> {
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
    const { logo } = this.props;

    return (
      <HeaderBar
        logo={logo}
        toggleMenu={this.toggleMenu}
        handleClose={this.handleClose}
        open={this.state.menu}
      />
    );
  }
}

export default Header;
