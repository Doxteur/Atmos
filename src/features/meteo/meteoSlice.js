import {createSlice} from '@reduxjs/toolkit';

export const meteoSlice = createSlice({
    name:'meteo',
    initialState:{
        value:0
    },
    reducers:{
        setMeteo:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {setMeteo} = meteoSlice.actions;
export default meteoSlice.reducer
        
