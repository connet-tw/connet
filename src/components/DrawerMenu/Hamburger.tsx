import * as React from "react";
import { Menu } from "styled-icons/material/Menu";
//import { Button } from "../Button";
import { styled } from "src/theme";

const Icon = styled(Menu)`
`;

const Hamburger: React.SFC<{onClick(): void}> = ({onClick}) => (
  <button onClick={onClick}>
    <Icon size={24}/>
  </button>
);

export { Hamburger };
