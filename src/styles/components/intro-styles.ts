import { createStyles, Theme } from "@material-ui/core/styles";

const introStyles = (theme:Theme) => createStyles({
  section: {
    padding: '9em 3em',
    background: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    color: theme.palette.grey[700]
  },
  text: {
    margin: '2em 0',
  },
  paragraph: {
    lineSpacing: 1.6,
    fontSize: '1em',
  },
  button: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  }
});

export default introStyles;
