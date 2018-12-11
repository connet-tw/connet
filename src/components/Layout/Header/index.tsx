import * as React from 'react'
import { DrawerMenu } from '../../DrawerMenu'
import { styled } from 'src/theme'
import { Link } from '../../../i18n'
import { Card, Flex, Text } from 'src/theme/primitives'
import { Button } from '../../Button'

const Trigger = styled.div`
  display: block;
  ${props => props.theme.devices[2]} {
    display: none;
  }
`

const Nav = styled(Flex)`
  display: none;
  ${props => props.theme.devices[2]} {
    display: flex;
  }
`

export const Wrapper = styled(Card)`
  z-index: ${props => props.theme.zIndexes[5]};
`

export const Brand = styled(Flex)`
  cursor: pointer;
`

export const LogoWrapper = styled(Flex)`
  width: ${props => props.theme.dimensions[2]};
`

export const Logo = styled.img`
  width: 100%;
`
export const BrandName = styled(Text)`
  display: none;
  ${props => props.theme.devices[1]} {
    display: block;
  }
`

interface HeaderProps {
  logo?: any
  title: React.ReactNode
  navItems: { to: string; label: React.ReactNode }[]
}

export const Header: React.SFC<HeaderProps> = ({ logo, title, navItems }) => (
  <Wrapper
    bg="white.light"
    p={3}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    shadow={1}
  >
    <Link to="/">
      <Brand alignItems="center">
        {logo && (
          <LogoWrapper alignItems="center">
            <Logo src={logo.childImageSharp.fixed.src} />
          </LogoWrapper>
        )}
        <BrandName color="primary.main" fontSize={3} ml={3}>
          {title}
        </BrandName>
      </Brand>
    </Link>
    <Flex>
      <Nav>
        {navItems.map(x => (
          <Button ml={1} to={x.to} key={x.to}>
            {x.label}
          </Button>
        ))}
      </Nav>
      <Trigger>
        <DrawerMenu title={title} navItems={navItems} logo={logo} />
      </Trigger>
    </Flex>
  </Wrapper>
)
