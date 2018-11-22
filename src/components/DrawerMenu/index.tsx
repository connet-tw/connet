import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { Drawer } from "../Drawer";
import { MenuButton } from "./MenuButton";
import { CloseButton } from "./CloseButton";
import { Flex, Text } from "src/theme/primitives";
import { Button } from "../Button";
import { Image } from "../Image";
import { styled } from "src/theme";
import { Link } from "../../i18n";

const Logo = styled(Image)`
  margin: 0 auto;
`;

const DrawerContent = styled(Flex)`
  height: 100vh;
  position: relative;
  overflow-y: auto;
`

interface DrawerMenuProps {
  logo?: any;
  title?: React.ReactNode;
  navItems: {to: string, label: React.ReactNode}[];
}

const DrawerMenu: React.SFC<DrawerMenuProps> = ({ logo, navItems }) => {
  return (
    <MakeMenu>
      {injected =>
        <>
          <MenuButton onClick={injected.toggleMenu}/>

          <Drawer
            open={injected.open}
            anchor={"right"}
            handleClose={injected.handleClose}
            toggleMenu={injected.toggleMenu}
            width={300}
          >
            <DrawerContent
              flexDirection="column"
              bg="background.paper"
              spacing={3}
            >
              <Flex justifyContent="flex-end">
                <CloseButton onClick={injected.handleClose}/>
              </Flex>
              <Flex>
                <Logo fixed={logo}/>
              </Flex>
              <Text as="h3"
                fontSize={3}
                textAlign="center"
              >
                Controlnet International
              </Text>
              <Flex justifyContent="center" flexDirection="column" spacing={2}>
                {navItems.map((x) => 
                  <Flex key={x.to}>
                    <Button onClick={injected.handleClose} width={1} to={x.to} as={Link}>
                      {x.label}
                    </Button>
                  </Flex>
                )}
              </Flex>
            </DrawerContent>
          </Drawer>
        </>
      }
    </MakeMenu>
  );
}

export {
  DrawerMenu
};
