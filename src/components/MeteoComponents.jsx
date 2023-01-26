import React, { useEffect, useState } from "react";
import TemperatureComponent from "./TemperatureComponent";
import InfoMeteoComponent from "./InfoMeteoComponent";
import MeteoByDayComponent from "./MeteoByDayComponent";
import map from "../assets/Images/map.png";

function MeteoComponents({ weather, setWeather, ville, setVille }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    //fetch https://api.open-meteo.com/ with lat and lon
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${ville.lat}&longitude=${ville.lon}&hourly=temperature_2m`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setWeather(data);
        console.log(data);
        setLoading(false);

      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [setWeather, ville.lat, ville.lon]);

  
  const weatherInfo = loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Something went wrong</p>
  ) : (
    <div>
      <p>Weather: {weather.latitude}</p>
    </div>
  );

  return (
    <div>
      <TemperatureComponent />
      <InfoMeteoComponent />
      <MeteoByDayComponent />
      {/* {weatherInfo} */}
    </div>
  );
}

export default MeteoComponents;
