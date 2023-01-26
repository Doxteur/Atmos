import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import meteoReducer from '../features/meteo/meteoSlice'
import citiesReducer from '../features/cities/citiesSlice'


export default configureStore({ 
    reducer:{
        counter:counterReducer, 
        meteo:meteoReducer,
        cities:citiesReducer
    }
});
