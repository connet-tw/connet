import { createStyles, Theme } from "@material-ui/core/styles";

const valuesStyles = (theme:Theme) => createStyles({
  text: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 600,
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 6,
    margin: '0 auto',
  },
  value: {
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  items: {
    margin: theme.spacing.unit,
  },
  paragraphs: {
    margin: theme.spacing.unit,
  }
});

export default valuesStyles;
