import React, { useEffect, useState } from "react";
import TemperatureComponent from "./TemperatureComponent";
import InfoMeteoComponent from "./InfoMeteoComponent";
import MeteoByDayComponent from "./MeteoByDayComponent";

import {
  fetchData,
  fetchDataByCity,
  setCity,
} from "../features/meteo/meteoSlice";
import { fetchCities } from "../features/cities/citiesSlice";
import { getHour, extractCoordinates } from "../utils/functions";
import AsyncSelect from "react-select/async";
import { useSelector, useDispatch } from "react-redux";

function MeteoComponents() {
  const meteo = useSelector((state) => state.meteo);
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCities());
  }, [dispatch]);

  const handleChangeCity = (e) => {
    const { lat, long } = extractCoordinates(e.value);
    const city = e.label;
    dispatch(fetchDataByCity(lat, long, city));
  };

  const loadOptions = (inputValue, callback) => {
    dispatch(fetchCities(inputValue));
    if (cities.value.length > 0) {
      return callback(cities.value);
    }
  };

  return (
    <div>
      <TemperatureComponent meteo={meteo} cities={cities} />
      <InfoMeteoComponent />
      <MeteoByDayComponent />
      {/* {weatherInfo} */}
    </div>
  );
}

export default MeteoComponents;
