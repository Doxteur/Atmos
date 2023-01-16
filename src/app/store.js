import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import meteoReducer from '../features/meteo/meteoSlice'


export default configureStore({ 
    reducer:{
        counter:counterReducer, 
        meteo:meteoReducer
    }
});
