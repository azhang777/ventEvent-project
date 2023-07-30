//import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import HomePage from "./scenes/landingPage";
import { themeSettings } from "./theme";

function App() {
  const theme = themeSettings;
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
