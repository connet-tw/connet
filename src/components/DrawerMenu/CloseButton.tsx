import * as React from "react";
import { Close } from "styled-icons/material/Close";
import { Button } from "../Button";
import { styled } from "src/theme";

const Icon = styled(Close)`
`;

const CloseButton: React.SFC<{onClick(): void}> = ({onClick}) => (
  <Button round size="small" onClick={onClick}>
    <Icon size={24}/>
  </Button>
);

export { CloseButton };
