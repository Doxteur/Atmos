import { createSlice } from "@reduxjs/toolkit";

export const meteoSlice = createSlice({
  name: "meteo",
  initialState: {
    value: {},
    country : [
        {
            displayValue: "Paris",
            value: "Paris",
        },
        {
            displayValue: "Lyon",
            value: "Lyon",
        }
        ],
    actualTemp: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setMeteo: (state, action) => {
      console.log(action);
      state.value = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    getActualTemp: (state) => {
      const actualHour = new Date().getHours();
      const actualTemp = state.value.hourly.temperature_2m.find(
        (temp, index) =>
          new Date(state.value.hourly.time[index]).getHours() === actualHour
      );
      state.actualTemp = Math.floor(actualTemp);
    },
  },
});

export const { setMeteo, setLoading, setError, getActualTemp } =
  meteoSlice.actions;

export const fetchData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const data = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((data) => dispatch(setMeteo(data)))
      .then(() => dispatch(getActualTemp()))
      .catch((error) => dispatch(setError(error.message)));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default meteoSlice.reducer;
