import React from "react";
import nuageSoleil from "../assets/Images/nuageSoleil.png";

function MeteoList() {
  return (
    <div>
      <div className="flex text-white justify-around ">
        <h1 className="w-10 mr-4">Aujourd'hui</h1>
        <h1 >13 °</h1>
        <h1 >22 °</h1>
        <img src={nuageSoleil} className="w-12" alt="#"/>
      </div>
       <div className="flex text-white justify-around ">
        <h1 className="w-10 mr-4">Samedi</h1>
        <h1 >13 °</h1>
        <h1 >22 °</h1>
        <img src={nuageSoleil} className="w-12" alt="#"/>
      </div>

      <div className="flex text-white justify-around ">
        <h1 className="w-10 mr-4">Dimanche</h1>
        <h1 >13 °</h1>
        <h1 >22 °</h1>
        <img src={nuageSoleil} className="w-12" alt="#"/>
      </div>

      <div className="flex text-white justify-around ">
        <h1 className="w-10 mr-4">Lundi</h1>
        <h1 >13 °</h1>
        <h1 >22 °</h1>
        <img src={nuageSoleil} className="w-12" alt="#"/>
      </div>

      <div className="flex text-white justify-around ">
        <h1 className="w-10 mr-4">Mardi</h1>
        <h1 >13 °</h1>
        <h1 >22 °</h1>
        <img src={nuageSoleil} className="w-12" alt="#"/>
      </div>

      <div className="flex text-white justify-around ">
        <h1 className="w-10 mr-4">Mercredi</h1>
        <h1 >13 °</h1>
        <h1 >22 °</h1>
        <img src={nuageSoleil} className="w-12" alt="#"/>
      </div>

      <div className="flex text-white justify-around ">
        <h1 className="w-10 mr-4">Jeudi</h1>
        <h1 >13 °</h1>
        <h1 >22 °</h1>
        <img src={nuageSoleil} className="w-12" alt="#"/>
      </div>

    </div>
  );
}

export default MeteoList;
