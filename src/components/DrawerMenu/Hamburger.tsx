import * as React from "react";
import { Menu } from "styled-icons/material/Menu";
import { Button } from "../Button";
import { styled } from "src/theme";

const Icon = styled(Menu)`
  color: ${props => props.theme.color("primary.main")};
`;

const Hamburger: React.SFC<{onClick(): void}> = ({onClick}) => (
  <Button onClick={onClick} contained>
    <Icon size={24}/>
  </Button>
);

export { Hamburger };
