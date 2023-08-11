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
      fontSize: "1em",
    },
    h5: {
      fontFamily: ["Arial", "Lato"],
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Arial", "Lato"],
      fontSize: 14,
      fontWeight: 1000,
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
