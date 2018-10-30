import { createStyles, Theme } from "@material-ui/core/styles";

const aboutStyles = (theme: Theme) => createStyles({
  section: {
    background: theme.palette.common.white,
  },
  heading: {
    width: "100%",
    marginBottom: "1.2em",
    textAlign: "center",
  },
  pane: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 6,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    margin: "0 auto",
    maxWidth: 1000,
  },
  text: {
  },
  paragraph: {
    marginBottom: "1em",
    textAlign: "center",
  },
  point: {
    borderRadius: 4,
    border: `1px solid ${theme.palette.grey.A200}`,
    padding: "1.2em",
    margin: "0.4em",
  },
  pointText: {
    color: theme.palette.primary.main,
    textAlign: "center",
  },
});

export default aboutStyles;
