import * as React from "react";
import { Card } from "src/theme/primitives";

export const Section: React.SFC<{}> = ({ children }) => (
  <Card
    py={4}
    width={1}
    alignItems="center" flexDirection="column"
  >
    {children}
  </Card>
);
