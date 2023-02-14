import logo from "./logo.svg";
import "./App.css";
import MeteoComponents from "./components/MeteoComponents";
import FormComponents from "./components/FormComponents";
import BottomNavigationComponent from "./components/BottomNavigationComponent";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoriesComponent from "./components/FavoriesComponent";

function App() {
  return (
    <div className="h-screen bg-[#1B1D1F]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MeteoComponents />}/>
          <Route path="/favoris" element={<FavoriesComponent />}/>
        </Routes>
        <BottomNavigationComponent />
      </BrowserRouter>

      {/* <Meteo  /> */}
    </div>
  );
}

export default App;
