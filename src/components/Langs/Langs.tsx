import * as React from "react";
import { languages, withLangs, WithLangsProps } from "../../i18n";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = ({palette, spacing, breakpoints}: Theme) => createStyles({
  list: {
    color: palette.common.white,
    display: "flex",
    justifyContent: "center",
  },
  item: {
  },
  text: {
    padding: 0,
  }
});

type Props = WithLangsProps & WithStyles<typeof styles>;

export const Langs: React.SFC<Props> = ({ classes, handleClick, locale }) => {
  return (
    <List
      dense
      disablePadding
      className={classes.list}
      component={"nav"}
    >
      {languages.map((x) =>
        <ListItem
          className={classes.item}
          key={x.code}
          button={true}
          onClick={() => handleClick(x.code)}
          selected={x.code === locale}
        >
          <ListItemText
            primary={x.name}
            className={classes.text}
            primaryTypographyProps={
              {color: "inherit"}
            }
          />
        </ListItem>
      )}
    </List>
  );
};

export const StyledLangs = withLangs(withStyles(styles)(Langs));
