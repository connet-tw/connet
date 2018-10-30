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
  logo: {
    width: "100%",
    maxWidth: 250,
    margin: "1rem auto",
  },
  button: {
    margin: "1rem 0",
  },
});

export default moreStyles;
