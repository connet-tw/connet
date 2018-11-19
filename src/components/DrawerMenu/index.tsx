import * as React from "react";
import { MakeMenu } from "../utils/MakeMenu";
import { Drawer } from "../Drawer";
import { Hamburger } from "./Hamburger";
import { styled } from "src/theme";
import { Box } from "src/theme/primitives";

const Content = styled(Box)`
  height: 100vh;
  width: 100%;
`

const DrawerMenu: React.SFC<{}> = () => {
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
            {y =>
              <Content
                bg="grey.100"
              >
                <button onClick={y.handleClose}>
                  Close
                </button>
              </Content>
            }
          </Drawer>
        </>
      }
    </MakeMenu>
  );
}

export {
  DrawerMenu
};
