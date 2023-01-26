import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MeteoComponents from './components/MeteoComponents';
import Header from './components/Header';
import FormComponents from './components/FormComponents';

function App() {

  // fetch open meteo
  const [weather, setWeather] = useState(null);
  const [ville, setVille] = useState({
    name: "Paris",
    lat: 48.8534,
    lon: 2.3488,
  });

  return (
    <div className="h-screen bg-[#1B1D1F]">
      <FormComponents weather={weather} setWeather={setWeather} />
      <Header weather={weather} setWeather={setWeather} />
      <MeteoComponents weather={weather} setWeather={setWeather} ville={ville} setVille={setVille} />
    </div>
  );
}

export default App;
