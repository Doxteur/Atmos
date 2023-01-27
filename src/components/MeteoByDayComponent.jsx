import React from "react";
import CardMeteoComponent from "./CardMeteoComponent";
import nuageSoleil from "../assets/Images/nuageSoleil.png";
import MeteoList from "./MeteoList";

function MeteoByDayComponent() {
  return (
    <div>
      <div className="flex justify-start w-full p-3 mt-4">
        <div className="mx-4 font-bold">
          <h1>Jour</h1>
          <h1 className="text-center">•</h1>
        </div>
        <div className="mx-4">
          <h1>Demain</h1>
        </div>
        <div className="mx-4">
          <h1>Semaine</h1>
        </div>
      </div>
      <div>
        <MeteoList />
       
      </div>
    </div>
  );
}

export default MeteoByDayComponent;
