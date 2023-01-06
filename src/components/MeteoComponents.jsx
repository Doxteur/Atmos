import React, { useEffect, useState } from "react";
import TemperatureComponent from "./TemperatureComponent";
import InfoMeteoComponent from "./InfoMeteoComponent";
import MeteoByDayComponent from "./MeteoByDayComponent";
import map from "../assets/Images/map.png";

function MeteoComponents({ weather, setWeather }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //fetch https://api.open-meteo.com/
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        console.log(data);
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

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
