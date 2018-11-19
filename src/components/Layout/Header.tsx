import * as React from "react";
import { DrawerMenu } from "../DrawerMenu";
import { FormattedMessage } from "react-intl";
import { app } from "./Layout.messages";
import { styled, theme } from "../../theme";
import { Flex, Text } from "src/theme/primitives";

export const Wrapper = styled(Flex)`
  z-index: ${theme.zIndex(5)};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoWrapper = styled(Flex)`
  width: ${theme.dimension(2)};
`;

export const Logo = styled.img`
  width: 100%;
`
export const BrandName = styled(Text)`
  display: none;
  ${theme.devices[3]} {
    display: block;
  }
`;

interface HeaderProps {
  logo: any;
}

export const Header: React.SFC<HeaderProps> = ({ logo }) => (
  <Wrapper
    bg="white.light"
    px={3} py={2}
    alignItems="center" justifyContent="space-between">
    <Brand>
      <LogoWrapper alignItems="center">
        <Logo src={logo.childImageSharp.fixed.src}/>
      </LogoWrapper>
      <BrandName fontSize={[3]} ml={3}>
        <FormattedMessage {...app.title}/>
      </BrandName>
    </Brand>
    <DrawerMenu/>
  </Wrapper>
);
