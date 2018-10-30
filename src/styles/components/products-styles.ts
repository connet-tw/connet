import { createStyles, Theme } from "@material-ui/core/styles";

const moreStyles = (theme: Theme) => createStyles({
  section: {
    height: "100%",
    width: "100%",
    padding: "4em 2em",
    background: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    color: theme.palette.grey[800],
    fontWeight: 300,
    textAlign: "center",
    margin: "0.5em 0",
  },
  button: {
  },
});

export default moreStyles;
