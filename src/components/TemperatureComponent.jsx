import React, { useEffect,useState } from "react";
import p_nuage from "../assets/Images/p_nuage.png";

import { WeatherCode } from "../data/WeatherCode";

function TemperatureComponent({ meteo, cities }) {

  const [weatherCodeImage, setWeatherCodeImage] = useState(null);

  useEffect(() => {
    getWeatherIcon(meteo.currentWeather.weathercode);
  }, [meteo]);

  const getWeatherIcon = (code) => {
    console.log(code);
    if(WeatherCode[code] != null) {
      setWeatherCodeImage(WeatherCode[code])
    }
  };

  return (
    <div>
      <div className="flex justify-around align-middle items-center font-russo-one ">
        <div>
          <h1 className="text-6xl mx-4 mb-2">
            {meteo.currentWeather.temperature}°
          </h1>
          <h1 className="mx-4 text-[#767a87]">Nuageux</h1>
        </div>
        {/* Name of image is weatherCode */}
        {weatherCodeImage &&
        <img src={require(`../assets/Images/${weatherCodeImage}.png`)}  alt="nuageLune" className="w-32" />
        }
      </div>
    </div>
  );
}

export default TemperatureComponent;
