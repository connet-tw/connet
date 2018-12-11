import * as React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

interface DrawerProps {
  anchor: 'left' | 'right' | 'top' | 'bottom'
  width: number
  open: boolean
  handleClose(): void
  toggleMenu(): void
}

const DrawerWrapper = styled.div<{ width: number }>`
  z-index: 1400;
  position: absolute;
  width: ${props => props.width}px;
  top: 0;
  right: 0;
  display: block;
`

const DrawerOverlay = styled.div<{ onClick(): void }>`
  z-index: 1400;
  opacity: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`

const DrawerContent = styled.div`
  z-index: 1400;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`

interface State {
  animating: boolean
}

class Drawer extends React.Component<DrawerProps, State> {
  state: State = { animating: false }

  componentDidUpdate(pp: DrawerProps, ps: State) {
    if (!pp.open && this.props.open) this.setState({ animating: true })
  }

  render() {
    const { width, open, handleClose, children } = this.props
    return (
      <>
        <Motion
          defaultStyle={{ x: 300, opacity: 1 }}
          style={{ x: spring(open ? 0 : 300), opacity: spring(open ? 1 : 0) }}
          onRest={() => this.setState({ animating: false })}
        >
          {style => (
            <>
              {(this.props.open || this.state.animating) && (
                <DrawerOverlay
                  style={{
                    opacity: style.opacity,
                  }}
                  onClick={handleClose}
                />
              )}
              <DrawerWrapper
                style={{
                  transform: `translateX(${style.x}px)`,
                }}
                width={width}
              >
                <DrawerContent>{children}</DrawerContent>
              </DrawerWrapper>
            </>
          )}
        </Motion>
      </>
    )
  }
}

export { Drawer }
