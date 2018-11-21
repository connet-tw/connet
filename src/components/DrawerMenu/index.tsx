import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { Drawer } from "../Drawer";
import { MenuButton } from "./MenuButton";
import { CloseButton } from "./CloseButton";
import { Flex, Text } from "src/theme/primitives";
import { Image } from "../Image";
import { styled } from "src/theme";

const Logo = styled(Image)`
  margin: 0 auto;
`;

const DrawerContent = styled(Flex)`
  height: 100vh;
  position: relative;
`

interface DrawerMenuProps {
  logo?: any;
}

const DrawerMenu: React.SFC<DrawerMenuProps> = ({ logo }) => {
  return (
    <MakeMenu>
      {x =>
        <>
          <MenuButton onClick={x.toggleMenu}/>

          <Drawer
            open={x.open}
            anchor={"right"}
            handleClose={x.handleClose}
            toggleMenu={x.toggleMenu}
            width={300}
          >
            <DrawerContent
              flexDirection="column"
              bg="white.main"
            >
              <Flex py={2} px={3} justifyContent="flex-end">
                <CloseButton onClick={x.handleClose}/>
              </Flex>
              <Flex my={3}>
                <Logo fixed={logo}/>
              </Flex>
              <Text as="h3"
                fontSize={3}
                textAlign="center"
              >
                Controlnet International
              </Text>
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
