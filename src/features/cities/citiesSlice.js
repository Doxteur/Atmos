import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    value: [],
    loading: true,
    error: null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setCities: (state, action) => {
      state.loading = false;
      state.value = [];
      action.payload.map((city) => {
        state.value.push({
          value: city.latitude + "," + city.longitude,
          label: city.name,
        });
        return state.value;
      });
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setCities, setLoading, setError } = citiesSlice.actions;

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
