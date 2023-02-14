import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    value: [],
    favoriteCities: [],
    loading: true,
    error: null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    loadFavoriteCities: (state) => {
      const favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));
      if (favoriteCities) {
        state.favoriteCities = favoriteCities;
      };
    },
    setCities: (state, action) => {
      state.loading = false;
      state.value = [];
      action.payload.map((city) => {
        state.value.push({
          value: city.latitude + "," + city.longitude,
          label: city.name + ", " + city.country
        });
        return state.value;
      });
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addFavorite: (state, action) => {
      state.favoriteCities.push(action.payload);
      // store in local storage
      localStorage.setItem(
        "favoriteCities",
        JSON.stringify(state.favoriteCities)
      );
    },
    removeFavorite: (state, action) => {
      state.favoriteCities = state.favoriteCities.filter((city) => {
        return city.name !== action.payload;
      });

      // store in local storage
      localStorage.setItem(
        "favoriteCities",
        JSON.stringify(state.favoriteCities)
      );
      
    }
  },
});

export const { setCities, setLoading, setError,addFavorite,removeFavorite,loadFavoriteCities } = citiesSlice.actions;

export const fetchCities = (name) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${name}&language=fr`
    )
      .then((response) => response.json())
      .then((data) => dispatch(setCities(data.results)))
      .catch((error) => dispatch(setError(error.message)));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default citiesSlice.reducer;
