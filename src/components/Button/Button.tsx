import * as React from "react";
import { createStyles, Theme, WithStyles, withStyles }  from "@material-ui/core/styles";
import MuiButton, { ButtonProps } from "@material-ui/core/Button";

const styles = ({palette, spacing}: Theme) => createStyles({
  button: {
    boxShadow: "none",
    borderRadius: 0,
  },
  white: {
    borderColor: palette.common.white,
    color: palette.common.white,
  },
});

type Props = WithStyles<typeof styles> & ButtonProps & {
  white?: boolean;
};

export const Button: React.SFC<Props> = ({ classes, children, className, white,...props  }) => {
  return (
    <MuiButton {...props}
      className={(white ? `${className} ${classes.button} ${classes.white}` : `${className} ${classes.button}`)}
    >
      {children}
    </MuiButton>
  );
}

Button.defaultProps = {
  white: false,
};

export const StyledButton = withStyles(styles)(Button);
