import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-rubik";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Rubik",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Rubik"],
      },
    },
  },
});
