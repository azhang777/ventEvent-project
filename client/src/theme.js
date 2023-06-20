import { createTheme } from "@mui/material/styles";

// mui theme settings
export const themeSettings = createTheme({
  typography: {
    h1: {
      fontFamily: ["Arial", "Lato"],
      fontSize: 85,
      fontWeight: 700,
      letterSpacing: 2,
    },
    h2: {
      fontFamily: ["Arial", "Lato"],
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontFamily: ["Arial", "Lato"],
      fontSize: 30,
      fontWeight: 400,
    },
    h4: {
      fontFamily: ["Arial", "Lato"],
      fontSize: 20,
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
