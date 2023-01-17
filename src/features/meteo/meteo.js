import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./meteoSlice";

function Meteo() {
  const meteo = useSelector((state) => state.meteo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    meteo.loading && console.log("loading");
  }, [dispatch]);

  const handleCountryChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>Météo</h1>
      <h1>
        La température d'aujourd'hui est de : {meteo.actualTemp} dans la ville
        de :{" "}
      </h1>
      {meteo.loading && <p>Loading...</p>}
      {/* Datalist input */}
      {meteo && (
        <div>
          <input
            type="text"
            list="data"
            onChange={(e) => handleCountryChange(e)}
          />
          
          <datalist id="data">
            {meteo.country.map((item, key) => (
              <option key={key} value={item.displayValue} />
            ))}
          </datalist>
        </div>
      )}
      {/* Show meteo using api.open-meteo*/}
      {/* {meteo.value && meteo.value.hourly.time && 
        meteo.value.hourly.time.map((hour, index) => (
          <div key={index}>
            <p>{new Date(hour).getHours()} J</p>
            <p>{meteo.value.hourly.temperature_2m[index]} °</p>
          </div>
        ))} */}
    </div>
  );
}

export default Meteo;
