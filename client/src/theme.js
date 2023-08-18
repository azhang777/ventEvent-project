import { createTheme } from "@mui/material/styles";

// mui theme settings
export const themeSettings = createTheme({
  typography: {
    h1: {
      fontFamily: ["Arial", "Lato"],
      fontSize: "5vw",
      fontWeight: 700,
      letterSpacing: 2,
    },
    h2: {
      fontFamily: ["Arial", "Lato"],
      fontSize: "3vw",
      fontWeight: 700,
    },
    h3: {
      fontFamily: ["Arial", "Lato"],
      fontSize: "2.5vw",
      fontWeight: 700,
    },
    h4: {
      fontFamily: ["Arial", "Lato"],
      fontSize: "2vw",
      fontWeight: 700,
    },
    h5: {
      fontFamily: ["Arial", "Lato"],
      fontSize: "1.5vw",
      fontWeight: 700,
    },
    h6: {
      fontFamily: ["Arial", "Lato"],
      fontSize: ".8vw",
      fontWeight: 700,
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
