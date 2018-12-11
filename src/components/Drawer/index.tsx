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

const DrawerWrapper = styled.div<{ width: number; open: boolean }>`
  z-index: 1400;
  position: absolute;
  width: ${props => props.width}px;
  top: 0;
  right: 0;
  display: block;
`

const DrawerOverlay = styled.div<{ open: boolean; onClick(): void }>`
  z-index: 1400;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`

const DrawerContent = styled.div<{ open: boolean }>`
  z-index: 1400;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`

const Drawer: React.SFC<DrawerProps> = ({
  width,
  open,
  toggleMenu,
  handleClose,
  children,
}) => {
  return (
    <>
      <Motion
        defaultStyle={{ x: 300, opacity: 1 }}
        style={{ x: spring(open ? 0 : 300), opacity: spring(open ? 1 : 0) }}
      >
        {style => (
          <>
            <DrawerOverlay
              style={{
                display: open ? 'block' : 'none',
                opacity: style.opacity,
              }}
              open={open}
              onClick={handleClose}
            />
            <DrawerWrapper
              style={{
                transform: `translateX(${style.x}px)`,
              }}
              open={open}
              width={width}
            >
              <DrawerContent open={open}>{children}</DrawerContent>
            </DrawerWrapper>
          </>
        )}
      </Motion>
    </>
  )
}

export { Drawer }
