import * as React from "react";
import Typography from "@material-ui/core/Typography";

export const SectionSubheading: React.SFC<{}> = ({ children }) => (
  <Typography
    variant="h5"
    color="textSecondary"
  >
    {children}
  </Typography>
);
