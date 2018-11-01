import { createStyles, Theme } from "@material-ui/core/styles";

const styles = ({spacing, palette, breakpoints}: Theme) => createStyles({
  root: {
    paddingTop: "2em",
    paddingBottom: "2em",
    paddingLeft: spacing.unit * 3,
    paddingRight: spacing.unit * 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    margin: "1rem 0",
    textAlign: "center",
  },
  heading: {
  },
  subheading: {},
  cards: {
    padding: "1em 0",
  },
  card: {
    height: "100%",
    paddingBottom: "0.6rem",
    display: "flex",
    flexDirection: "column",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
  },
  label: {
    color: palette.secondary.main,
    width: "100%",
    textAlign: "center",
  },
});

export {
  styles
};
