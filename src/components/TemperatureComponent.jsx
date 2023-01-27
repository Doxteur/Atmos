import React, { useEffect, useState } from "react";

import nuageSoleil from "../assets/Images/nuageSoleil.png";
import nuageLune from "../assets/Images/nuageLune.png";

function TemperatureComponent({ meteo, cities }) {
  useEffect(() => {
    console.log("Meteo", meteo);
  }, [meteo]);

  return (
    <div>
      <div className="flex justify-around align-middle items-center font-russo-one ">
        <div>
          <h1 className="text-6xl mx-4 mb-2">
            {meteo.currentWeather.temperature}°
          </h1>
          <h1 className="mx-4 text-[#767a87]">Nuageux</h1>
        </div>
        <img src={nuageLune} alt="nuages" className="w-36" />
      </div>
    </div>
  );
}

export default TemperatureComponent;
