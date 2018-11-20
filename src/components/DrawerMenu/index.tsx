import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { Drawer } from "../Drawer";
import { Hamburger } from "./Hamburger";
import { Flex, Text } from "src/theme/primitives";
import { styled } from "src/theme";

const DrawerContent = styled(Flex)`
  height: 100vh;
`

const DrawerMenu: React.SFC<{}> = ({ children }) => {
  return (
    <MakeMenu>
      {x =>
        <>
          <Hamburger onClick={x.toggleMenu}/>

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
              px={3} pt={4} pb={3}
            >
              <Text as="h3"
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
