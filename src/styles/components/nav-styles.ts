import { createStyles, Theme } from "@material-ui/core/styles";

const navStyles = (theme: Theme) => createStyles({
 nav: {
    height: "100%",
    width: 300,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "1.5em",
    alignItems: "center",
    paddingTop: "1em",
  },
  close: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 4,
    right: 4,
  },
  logo: {
    width: 130,
    marginBottom: 20,
  },
  title: {
    color: theme.palette.primary.main,
    margin: "0.4em 0",
  },
  list: {
    flexGrow: 1,
    width: "100%",
  },
  listItem: {
    padding: 0,
    width: "100%",
    textAlign: "center",
  },
  link: {
    width: "100%",
    padding: "0.6em",
  },
  linkNested: {
    width: "100%",
    padding: "0.6em",
  },
  linkText: {
    color: theme.palette.grey[700],
    fontWeight: 700,
  },
  linkNestedText: {
    color: theme.palette.grey[700],
  },
  contact: {
    flexShrink: 0,
    padding: theme.spacing.unit * 3,
    width: "100%",
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  details: {
    "width": "80%",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "&:last-child": {
      marginTop: "0.4em",
    },
  },
  icon: {
    marginRight: "0.4em",
  },
  nestedItem: {
    flexDirection: "column",
  },
});

export default navStyles;
