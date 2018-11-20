import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { Drawer } from "../Drawer";
import { MenuButton } from "./MenuButton";
import { CloseButton } from "./CloseButton";
import { Flex, Text } from "src/theme/primitives";
import { styled } from "src/theme";

const DrawerContent = styled(Flex)`
  height: 100vh;
  position: relative;
`

const DrawerMenu: React.SFC<{}> = ({ children }) => {
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
              bg="white.light"
            >
              <Flex py={2} px={3} justifyContent="flex-end">
                <CloseButton onClick={x.handleClose}/>
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
