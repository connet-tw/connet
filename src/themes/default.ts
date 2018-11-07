import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const colors = {
  bahamaBlue: "rgb(22,73,112)",
  deepSkyBlue: "rgb(36,140,204)",
  pictonBlue: "rgb(104,178,229)",
  apache: "rgb(203,160,83)",
  orange: "rgb(233,86,70)",
  osloGrey: "rgb(135,147,148)",
  bleachedCedar: "rgb(76,76,76)",
};

const primary = colors.deepSkyBlue;
const secondary = colors.apache;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    fontFamily: [
      "Muli",
      "sans-serif",
    ].join(","),
    h1: {
      [breakpoints.down("sm")]: {
        fontSize: "4.5rem",
      },
    },
    h2: {
      [breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
    },
    h3: {
      [breakpoints.down("sm")]: {
        fontSize: "2.3rem",
      },
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
