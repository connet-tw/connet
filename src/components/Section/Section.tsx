import * as React from "react";
import { Card } from "primithemes";

export const Section: React.SFC<{}> = ({ children }) => (
  <Card py={4} width={1} alignItems="center" flexDirection="column">
    {children}
  </Card>
);
