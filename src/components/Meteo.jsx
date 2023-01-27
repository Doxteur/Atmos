import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, fetchDataByCity,setCity } from "../features/meteo/meteoSlice";
import { fetchCities } from "../features/cities/citiesSlice";
import { getHour,extractCoordinates } from "../utils/functions";
import AsyncSelect from "react-select/async";

function Meteo({meteo,cities,dispatch}) {

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCities());
  }, [dispatch]);

  const handleChangeCity = (e) => {
    const { lat, long } = extractCoordinates(e.value);
    const city = e.label;
    dispatch(fetchDataByCity(lat, long,city));
  };
  
  const loadOptions = (inputValue, callback) => {

      dispatch(fetchCities(inputValue));
      if (cities.value.length > 0) {
        return callback(cities.value);
      }
  };

  return (
    <div>
      <AsyncSelect loadOptions={loadOptions} defaultOptions={cities.value} onChange={handleChangeCity} />

      <h1>Météo</h1>

      {meteo.loading && <p>Loading...</p>}
      
      {!meteo.loading && (
        <div>
          <h1>
            La température à {getHour(meteo.currentWeather.time)} h est de :{" "}
            {meteo.currentWeather.temperature} ° dans la ville de :{" "}
            {meteo.city}
          </h1>
        </div>
      )}
    </div>
  );
}

export default Meteo;
