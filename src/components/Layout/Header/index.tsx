import * as React from "react";
import { DrawerMenu } from "../../DrawerMenu";
import { styled } from "src/theme";
import { Link } from "../../../i18n";
import { Card, Flex, Text } from "src/theme/primitives";

export const Wrapper = styled(Card)`
  z-index: ${props => props.theme.zIndexes[5]};
`;

export const Brand = styled(Flex)`
  cursor: pointer;
`;

export const LogoWrapper = styled(Flex)`
  width: ${props => props.theme.dimensions[2]};
`;

export const Logo = styled.img`
  width: 100%;
`
export const BrandName = styled(Text)`
  display: none;
  ${props => props.theme.devices[1]} {
    display: block;
  }
`;

interface HeaderProps {
  logo?: any;
  title: React.ReactNode;
  navItems: {to: string, label: React.ReactNode}[];
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
    <Brand as={Link} to="/" alignItems="center">
      {logo &&
        <LogoWrapper alignItems="center">
          <Logo src={logo.childImageSharp.fixed.src}/>
        </LogoWrapper>
      }
      <BrandName fontSize={3} ml={3}>
        {title}
      </BrandName>
    </Brand>
    <DrawerMenu title={title} navItems={navItems} logo={logo}/>
  </Wrapper>
);
