import React from "react";
import { useSelector, useDispatch } from "react-redux";

function FavoriesComponent() {
  const meteo = useSelector((state) => state.meteo);
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  const favories = () => {
    return (
      <div>
        <h1>Vos Favoris</h1>
        {cities.favoriteCities.map((item, index) => {
          return (
            <div key={index} className="p-4 bg-gray-400 my-2 text-black">
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{favories()}</div>;
}

export default FavoriesComponent;
