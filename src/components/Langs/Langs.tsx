import * as React from "react";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { MakeLangs } from "./MakeLangs";
import Button from "@material-ui/core/Button";

const styles = ({palette, spacing, breakpoints}: Theme) => createStyles({
  root: {},
  button: {
  },
});


type Props = {
  color?: "inherit" | "primary" | "secondary" | "default";
} & WithStyles<typeof styles>;

export const LangsBase: React.SFC<Props> = ({ classes, color }) => {
  return (
    <MakeLangs>
      {injectedProps => (
      <nav>
        {injectedProps.languages.map((x) =>
          <Button
            key={x.code}
            onClick={() => injectedProps.handleClick(x.code)}
            variant={(x.code === injectedProps.locale ? "outlined" : "text")}
            size="small"
            color={color}
            className={classes.button}
          >
            {x.name}
          </Button>
        )}
      </nav>
      )}
    </MakeLangs>
  );
};

LangsBase.defaultProps = {
  color: "inherit",
};

export const Langs = withStyles(styles)(LangsBase);
