import React from "react";
// import image hamburger from asset folder then image
import hamburger from "../assets/Images/hamburger.png";
import { useDispatch, useSelector } from "react-redux";
import { todayDate } from "../utils/functions";
import telescopeIcon from "../assets/Images/TelescopeIcon.png";
import AsyncSelect from "react-select/async";

import { fetchCities } from "../features/cities/citiesSlice";
import { getHour, extractCoordinates } from "../utils/functions";
import { fetchData, fetchDataByCity } from "../features/meteo/meteoSlice";

function Header() {
  const meteo = useSelector((state) => state.meteo);
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  const [searchBar, setSearchBar] = React.useState(false);

  const handleChangeCity = (e) => {
    const { lat, long } = extractCoordinates(e.value);
    const city = e.label;
    dispatch(fetchDataByCity(lat, long, city));
  };

  const loadOptions = (inputValue, callback) => {
    if(!inputValue) return callback([]);
    if (inputValue.length < 2) return callback([]);
    dispatch(fetchCities(inputValue));
    if (cities.value.length > 0) {
      return callback(cities.value);
    }
  };

  const showSearchBar = () => {
    setSearchBar(!searchBar);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between">
        {searchBar ? (
          <div className="w-4/5 p-6">
            <AsyncSelect
              cacheOptions
              loadOptions={loadOptions}
              onChange={handleChangeCity}
              placeholder="Search city"
              theme={theme => ({
                ...theme,
                borderRadius: 10,
                colors: {
                  ...theme.colors,
                  // Background color of dropdown
                  primary25: "#23252D",
                  // Active Border
                  primary: "white",
                  // background
                  neutral0: "#1B1D1F",
                  // Border normal color
                  neutral20: "#A6ADBA",
                  // Text color
                  neutral80: "white",
                },

              })}
            />
          </div>
        ) : (
          <div className="flex flex-col text-left p-4">
            <h1 className=" font-russo-one font-bold text-xl">{meteo.city}</h1>
            <h1 className="text-gray-400">{todayDate()}</h1>
          </div>
        )}

        <div className="m-6" onClick={(e) => showSearchBar()}>
          <img src={telescopeIcon} alt="hamburger" className="w-9 h-9 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Header;
