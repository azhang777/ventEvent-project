import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LandingPage from "./scenes/landingPage";
import Home from "./scenes/homePage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const token = useSelector((state) => state.token);
  const isAuth = Boolean(token);
  console.log(token);
  console.log(isAuth);

  return (
    <div className='App'>
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
    </div>
  );
}

export default App;
