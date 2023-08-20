import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LandingPage from "./scenes/landingPage";
import Home from "./scenes/homePage";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { themeSettings } from "./theme";
function App() {
  const token = useSelector((state) => state.token);
  const isAuth = Boolean(token);
  console.log(token);
  console.log(isAuth);

  return (
    <div className='App'>
      <ThemeProvider theme={themeSettings}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/home'
              element={isAuth ? <Home /> : <Navigate to='/' />} //if possible user directly heads to home page, we can take them back to landing page if token does not exist
            />
            <Route
              path='/'
              element={<LandingPage />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
