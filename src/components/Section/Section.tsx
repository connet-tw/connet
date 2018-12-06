import * as React from "react";
import { Card } from "src/theme/primitives";

export const Section: React.SFC<{}> = ({ children }) => (
  <Card
    py={3}
    bg="background.paper"
    width={1}
    bt={2} btc="secondary.main"
    alignItems="center" flexDirection="column"
  >
    {children}
  </Card>
);
