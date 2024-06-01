import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/portfolio";
// import About from "./components/about";
// import Work from "./components/work";
// import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Portfolio/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
