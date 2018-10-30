import { createStyles, Theme } from "@material-ui/core/styles";

const layoutStyles = (theme: Theme) => createStyles({
  "@global": {
    a: {
      textDecoration: "none",
      color: "inherit",
    },
  },
  "layout": {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  "main": {
    overflowX: "hidden",
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: 1400,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
  },
});

export default layoutStyles;
