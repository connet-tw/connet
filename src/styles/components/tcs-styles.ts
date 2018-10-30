import { createStyles, Theme } from "@material-ui/core/styles";

const tcsStyles = (theme:Theme) => createStyles({
  page: {
    marginTop: theme.spacing.unit * 3,
    margin: '0 auto',
    maxWidth: 800,
  },
  divider: {
    marginBottom: theme.spacing.unit * 3,
  },
  header: {
    backgroundColor: theme.palette.primary.light,
    color: '#fff',
  },
  title: {
    color: theme.palette.common.white,
  },
  content: {
  },
  image: {
    width: '100%'
  }
});

export default tcsStyles;
