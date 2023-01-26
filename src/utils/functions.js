

// Date Function
export const convertDate = (date) => {

    const dateArray = date.split("T");
    const dateArray2 = dateArray[0].split("-");
    const dateArray3 = dateArray[1].split(":");
    
    const newDate = new Date(dateArray2[0], dateArray2[1], dateArray2[2], dateArray3[0], dateArray3[1]);
    
    return newDate.getTime();
}

export const getHour = (date) => {
    const dateArray = date.split("T");
    const dateArray2 = dateArray[1].split(":");
    const hour = dateArray2[0];
    return hour;
}

export const getDay = (date) => {
    const dateArray = date.split("T");
    const dateArray2 = dateArray[0].split("-");
    const day = dateArray2[2];
    return day;
}

// Extract Coordinates of select

export const extractCoordinates = (city) => {
    const coordinates = city.split(",");
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    return { lat: latitude, long: longitude };
}
