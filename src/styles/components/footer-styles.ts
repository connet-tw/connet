import { createStyles } from "@material-ui/core/styles";

const footerStyles = (theme: any) => createStyles({
  layout: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  footer: {
    marginTop: theme.spacing.unit * 3,
  },
  footerSocial: {
    backgroundColor: theme.palette.primary.light,
    textAlign: "center",
  },
  addressInner: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    display: "flex",
    marginBottom: "1em",
  },
  footerAddress: {
    paddingTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  footerDivisions: {
    width: "100%",
    textAlign: "center",
  },
  footerCopy: {
    backgroundColor: theme.palette.primary.dark,
    textAlign: "center",
  },
  white: {
    color: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    marginRight: "1em",
  },
  contact: {
    borderColor: theme.palette.secondary.light,
    color: "#ccc",
  },
});

export default footerStyles;
