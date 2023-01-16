import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMeteo } from "./meteoSlice";

function Meteo() {
  const meteo = useSelector((state) => state.meteo.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // set meteo
        dispatch({ type: "meteo/setMeteo", payload: data });

      });
  }, []);

  return <div>
        <h1>Météo</h1>
        {/* Show meteo using api.open-meteo*/}
        <p>{meteo.latitude}</p>
        <p>{meteo.longitude}</p>
        <p>{meteo.timezone}</p>
        



  </div>;
}

export default Meteo;
