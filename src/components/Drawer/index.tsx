import * as React from "react";
import styled from "styled-components";
import { Transition } from "react-spring";

interface DrawerProps {
  anchor: "left" | "right" | "top" | "bottom";
  width: number;
  open: boolean;
  handleClose(): void;
  toggleMenu(): void;
}

const DrawerWrapper = styled.div<{ width: number }>`
  z-index: 1400;
  position: absolute;
  width: ${props => props.width}px;
  top: 0;
  right: 0;
  display: block;
`;

const DrawerOverlay = styled.div<{ onClick(): void }>`
  z-index: 1400;
  opacity: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const DrawerContent = styled.div`
  z-index: 1400;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

interface State {
  animating: boolean;
}

class Drawer extends React.Component<DrawerProps, State> {
  state: State = { animating: false };

  componentDidUpdate(pp: DrawerProps, ps: State) {
    if (!pp.open && this.props.open) this.setState({ animating: true });
  }

  render() {
    const { width, open, handleClose, children } = this.props;
    return (
      <>
        <Transition
          items={open}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {open => props =>
            open && <DrawerOverlay style={props} onClick={handleClose} />}
        </Transition>
        <Transition
          items={open}
          from={{ transform: "translate3d(300px,0,0)" }}
          enter={{ transform: "translate3d(0,0,0)" }}
          leave={{ transform: "translate3d(300px,0,0)" }}
        >
          {open => props =>
            open && (
              <DrawerWrapper width={width} style={props}>
                <DrawerContent>{children}</DrawerContent>
              </DrawerWrapper>
            )}
        </Transition>
      </>
    );
  }
}

export { Drawer };
