import {configureStore} from '@reduxjs/toolkit';
import meteoReducer from '../features/meteo/meteoSlice'
import citiesReducer from '../features/cities/citiesSlice'


export default configureStore({ 
    reducer:{
        meteo:meteoReducer,
        cities:citiesReducer
    }
});
