import React, { useEffect, useState } from "react";
// import image hamburger from asset folder then image
import { useDispatch, useSelector } from "react-redux";
import { todayDate } from "../utils/functions";
import telescopeIcon from "../assets/Images/TelescopeIcon.png";
import AsyncSelect from "react-select/async";

import {
  addFavorite,
  fetchCities,
  removeFavorite,
  loadFavoriteCities
} from "../features/cities/citiesSlice";
import { extractCoordinates } from "../utils/functions";
import { fetchDataByCity } from "../features/meteo/meteoSlice";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

/**
 * Header component that shows the current city weather and a search bar to search for a new city.
 */
function Header() {
  const meteo = useSelector((state) => state.meteo);
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  const [searchBar, setSearchBar] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {

    // Check if the current city is a favorite city
    const isFavorite = cities.favoriteCities.some(
      (city) => city.name === meteo.city.name
    );
    setIsFavorite(isFavorite);

  }, [cities, meteo.city.name]);

  
  useEffect(() => {
    dispatch(loadFavoriteCities());
  }, [dispatch]);

  /**
   * Handles the change of city from the search bar.
   * @param {Object} e - The selected city object from the search bar.
   */

  const handleChangeCity = (e) => {
    const { lat, long } = extractCoordinates(e.value);
    const city = e.label;
    dispatch(fetchDataByCity(lat, long, city));
    setSearchBar(false);
  };

  /**
   * Loads options for the search bar.
   * @param {String} inputValue - The search input value.
   * @param {Function} callback - A callback function to pass the options to the search bar.
   */
  const loadOptions = (inputValue, callback) => {
    if (!inputValue) return callback([]);
    if (inputValue.length < 2) return callback([]);

    dispatch(fetchCities(inputValue));

    const options = cities.favoriteCities.map((city) => ({
      value: city.latitude + "," + city.longitude,
      label: city.name,
    }));

    if (cities.value.length > 0) {
      // add options
      const optionsWithFavorite = options.concat(cities.value);
      return callback(optionsWithFavorite);
    }
  };

  /**
   * Toggles the search bar visibility.
   */
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
              theme={(theme) => ({
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
            <div className="flex">
              <h1 className=" font-russo-one font-bold text-xl">
                {meteo.city.name}
              </h1>
              {cities && isFavorite ? (
                <AiFillStar
                  className="text-yellow-400 text-3xl mx-2"
                  onClick={(e) => dispatch(removeFavorite(meteo.city.name))}
                />
              ) : (
                <AiOutlineStar
                  className="text-gray-400 text-3xl mx-2"
                  onClick={(e) => dispatch(addFavorite(meteo.city))}
                />
              )}
            </div>
            <h1 className="text-gray-400">{todayDate()}</h1>
          </div>
        )}

        <div className="m-6" onClick={(e) => showSearchBar()}>
          <img
            src={telescopeIcon}
            alt="hamburger"
            className="w-9 h-9 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
