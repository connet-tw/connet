import { createStyles, Theme } from "@material-ui/core/styles";

const productsStyles = (theme: Theme) => createStyles({
  section: {
    marginTop: "3em",
    marginBottom: "3em",
  },
  text: {
    margin: "1em 0",
  },
  paragraph: {},
  card: {
    height: "100%",
  },
  media: {
    width: "100%",
    heigh: "auto",
  },
  header: {
    margin: "2em 0",
    textAlign: "center",
  },
  heading: {
    color: theme.palette.grey[900],
    fontSize: "2em",
  },
  cardContent: {
    padding: theme.spacing.unit * 3,
  },
  spec: {
    marginTop: "2em",
  },
  table: {
    marginTop: "1em",
  },
  key: {
    fontWeight: 700,
    color: theme.palette.grey[700],
  },
});

export default productsStyles;
