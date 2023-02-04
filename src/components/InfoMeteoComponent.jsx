import React from "react";
import gouteeau from "../assets/Images/gouteeau.png";
import pluie from "../assets/Images/pluie.png";
import vent from "../assets/Images/vent.png";
import { useSelector } from "react-redux";

function InfoMeteoComponent() {
  const meteo = useSelector((state) => state.meteo);

  return (
    <div className="w-11/12 m-auto rounded-xl bg-[#22252d]">
      <div className="flex justify-around py-3 text-center">
        <div>
          <img src={vent} alt="gouteeau" className="w-4 h-5 m-auto" />
          <h1 className="text-sm font-semibold mt-1">
            {meteo.currentWeather.windspeed} Km/h
          </h1>
          <h1 className="text-gray-400">Vent</h1>
        </div>
        <div>
          <img src={gouteeau} alt="gouteeau" className="w-4 h-5 m-auto" />
          <h1 className="text-sm font-semibold mt-1">{meteo.currentWeather.humidity} % </h1>
          <h1 className="text-gray-400">Humidité</h1>
        </div>
        <div>
          <img src={pluie} alt="gouteeau" className="w-4 h-5 m-auto" />
          <h1 className="text-sm font-semibold mt-1"> 100%</h1>
          <h1 className="text-gray-400">Pluie</h1>
        </div>
      </div>
    </div>
  );
}

export default InfoMeteoComponent;
