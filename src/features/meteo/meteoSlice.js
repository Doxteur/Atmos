import { createSlice } from "@reduxjs/toolkit";

export const meteoSlice = createSlice({
  name: "meteo",
  initialState: {
    value: {},
    currentWeather: {} ,
    city: "Rennes",
    loading: true,
    error: null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setMeteo: (state, action) => {
      state.value = action.payload;
      state.currentWeather = action.payload.current_weather;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    }
  },
});

export const { setMeteo, setLoading, setError,setCity } = meteoSlice.actions;

export const fetchData = (coord) => async (dispatch) => {
  dispatch(setLoading());
  if(!coord) coord = {latitude: 48.117266, longitude: -1.6777926};
  try {
    await fetch( `https://api.open-meteo.com/v1/forecast?latitude=${coord.latitude}&longitude=${coord.longitude}&current_weather=true&hourly=temperature_2m&timezone=Europe%2FBerlin`)
      .then((response) => response.json())
      .then((data) => dispatch(setMeteo(data)))
      .catch((error) => dispatch(setError(error.message)));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const fetchDataByCity = (lat,long,city) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m&timezone=Europe%2FBerlin`)
      .then((response) => response.json())
      .then((data) => dispatch(setMeteo(data)))
      .then(() => dispatch(setCity(city)))
      .catch((error) => dispatch(setError(error.message)));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
      

export default meteoSlice.reducer;
