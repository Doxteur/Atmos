// Date Function
export const todayDate = (date) => {
  const today = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const newDate = today.toLocaleDateString("fr-FR", options);
  return newDate;
};

export const getHour = (date) => {
  const dateArray = date.split("T");
  const dateArray2 = dateArray[1].split(":");
  const hour = dateArray2[0];
  return hour;
};

export const getDay = (date) => {
  const dateArray = date.split("T");
  const dateArray2 = dateArray[0].split("-");
  const day = dateArray2[2];
  return day;
};

// Extract Coordinates of select

export const extractCoordinates = (city) => {
  const coordinates = city.split(",");
  const latitude = coordinates[0];
  const longitude = coordinates[1];
  return { lat: latitude, long: longitude };
};

export const findHumidity = (action,state) => {
  const index = action.payload.hourly.time.findIndex(
    (item) => item === action.payload.current_weather.time
  );
  const humidity = action.payload.hourly.relativehumidity_2m[index];
  return humidity;
}
