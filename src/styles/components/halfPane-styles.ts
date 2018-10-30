import { createStyles, Theme } from "@material-ui/core/styles";

const halfPaneStyles = (theme:Theme) => createStyles({
  section: {
  },
  grid: {
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  text: {
    height: '100%',
    width: '100%',
  },
  imageSm: {
    width: '100%',
    height: 'auto',
  }
});

export default halfPaneStyles;
