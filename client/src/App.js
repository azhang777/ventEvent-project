import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LandingPage from "./scenes/landingPage";
import Home from "./scenes/homePage";
import { useSelector } from "react-redux";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<LandingPage />}
          />
          <Route
            path='/home'
            element={isAuth ? <Home /> : <Navigate to='/' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
