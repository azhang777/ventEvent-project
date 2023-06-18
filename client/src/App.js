import { BrowserRouter } from "react-router-dom";
import HomePage from "./scenes/landingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
