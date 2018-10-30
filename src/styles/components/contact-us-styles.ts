import { createStyles, Theme } from "@material-ui/core/styles";

const moreStyles = (theme: Theme) => createStyles({
  section: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2em",
    background: theme.palette.grey[200],
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "2em",
  },
  heading: {
    color: theme.palette.grey[700],
    textAlign: "center",
  },
  logo: {
    width: "80%",
    maxWidth: 250,
  },
  details: {
    width: "100%",
  },
  detailPane: {
    height: "100%",
    display: "flex",
    padding: "2em 1em",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
  },
  textContent: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    marginLeft: "1em",
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
      alignItems: "center",
    },
  },
  address: {
    display: "flex",
    flexDirection: "column",
  },
  detailText: {
    lineSpacing: "2em",
  },
  icon: {
    color: theme.palette.grey[400],
    fontSize: "3em",
    [theme.breakpoints.up("md")]: {
      marginBottom: "0.6em",
    },
  },
});

export default moreStyles;
