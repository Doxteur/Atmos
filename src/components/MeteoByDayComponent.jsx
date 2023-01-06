import React from "react";
import CardMeteoComponent from "./CardMeteoComponent";

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
      <div className="flex">
        <CardMeteoComponent hour={10}/>
        <CardMeteoComponent hour={12}/>
        <CardMeteoComponent hour={14}/>
        <CardMeteoComponent hour={16}/>
      </div>
    </div>
  );
}

export default MeteoByDayComponent;
