import React, { useEffect } from "react";
import TemperatureComponent from "./TemperatureComponent";
import InfoMeteoComponent from "./InfoMeteoComponent";
import MeteoByDayComponent from "./MeteoByDayComponent";
import Header from "./Header";

import {
  fetchData,
} from "../features/meteo/meteoSlice";
import { fetchCities } from "../features/cities/citiesSlice";
import { useSelector, useDispatch } from "react-redux";

function MeteoComponents() {
  const meteo = useSelector((state) => state.meteo);
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <TemperatureComponent meteo={meteo} cities={cities} />
      <InfoMeteoComponent />
      <MeteoByDayComponent />
    </div>
  );
}

export default MeteoComponents;
