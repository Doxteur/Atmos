import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MeteoComponents from './components/MeteoComponents';
import Header from './components/Header';
import FormComponents from './components/FormComponents';
import Meteo from './components/Meteo';

function App() {

  

  return (
    <div className="h-screen bg-[#1B1D1F]">
      {/* <FormComponents weather={weather} setWeather={setWeather} /> */}
      {/* <Header weather={weather} setWeather={setWeather} /> */}
      <Meteo />
    </div>
  );
}

export default App;
