import { createTheme } from "@mui/material/styles";

// mui theme settings
export const themeSettings = createTheme({
  typography: {
    h1: {
      fontFamily: ["Arial", "Lato"],
      fontSize: "5em",

      fontWeight: 700,
      letterSpacing: 2,
    },
    h2: {
      fontFamily: ["Arial", "Lato"],
      fontSize: "3em",
      fontWeight: 700,
    },
    h3: {
      fontFamily: ["Arial", "Lato"],
      fontSize: "2.5em",
      fontWeight: 700,
    },
    h4: {
      fontFamily: ["Arial", "Lato"],
      fontSize: "2em",
      fontWeight: 700,
    },
    h5: {
      fontFamily: ["Arial", "Lato"],
      fontSize: "1.5em",
      fontWeight: 700,
    },
    h6: {
      fontFamily: ["Arial", "Lato"],
      fontSize: ".8em",
      fontWeight: 700,
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@media (min-width: 768px)": {
          // Increase font size for h1 to a minimum of 24px on larger screens
          h1: {
            fontSize: "24px",
          },
        },
      },
    },
  },
});

/*
sx={{
  flexGrow: 1,
  fontWeight: "bolder",
  fontFmaily: "Lato",
  margin: "2rem",
}}
*/
