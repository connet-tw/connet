import * as React from "react";
import { DrawerMenu } from "../DrawerMenu";
import { FormattedMessage } from "react-intl";
import { app } from "./Layout.messages";
import { styled } from "../../theme";
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
  logo: any;
  navItems: {to: string, label: React.ReactNode}[];
}

export const Header: React.SFC<HeaderProps> = ({ logo, navItems }) => (
  <Wrapper
    bg="white.light"
    p={3}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    shadow={1}
  >
    <Brand alignItems="center">
      <LogoWrapper alignItems="center">
        <Logo src={logo.childImageSharp.fixed.src}/>
      </LogoWrapper>
      <BrandName fontSize={3} ml={3}>
        <FormattedMessage {...app.title}/>
      </BrandName>
    </Brand>
    <DrawerMenu navItems={navItems} logo={logo}/>
  </Wrapper>
);
