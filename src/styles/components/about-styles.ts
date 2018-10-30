import { createStyles, Theme } from "@material-ui/core/styles";

const aboutStyles = (theme: Theme) => createStyles({
  section: {
    background: theme.palette.common.white,
  },
  head: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    height: 300,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    overflow: "hidden",
  },
  body: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: "3em",
    paddingBottom: "3em",
    margin: "0 auto",
    maxWidth: 1000,
    borderBottom: "1px solid grey",
  },
  logoPane: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    maxWidth: 300,
    margin: "0 auto",
    marginBottom: "1rem",
  },
  text: {
  },
  paragraph: {
    marginBottom: "1em",
    textAlign: "center",
  },
});

export default aboutStyles;
