import { createStyles, Theme } from "@material-ui/core/styles";

const styles = ({spacing, palette, breakpoints}: Theme) => createStyles({
  root: {
    borderTop: `2px solid ${palette.primary.main}`,
    background: palette.common.white,
    marginBottom: spacing.unit * 3,
    padding: spacing.unit * 3,
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
  subheading: {
    marginTop: "1rem",
  },
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
  },
  image: {
    width: "100%",
    height: 120,
  },
  content: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  label: {
    color: palette.secondary.main,
    width: "100%",
  },
  text: {
  },
});

export {
  styles
};
