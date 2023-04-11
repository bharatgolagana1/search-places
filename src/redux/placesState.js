import { createSlice } from "@reduxjs/toolkit";

export const placesSlice = createSlice({
    name:'places',
    initialState:{
        places:[],
        searchPlaceTxt:'',
        isloading:false,

    },
    reducers:{
        getPlacesFetch: (state,action) => {
            // console.log(action, 'action')
            state.isloading = true;
            
        },
        getPlacesSuccess: (state, action) => {
            state.places = action.payload;
            state.isloading = false;
        },
        getPlacesFailure:(state) => {
            state.isloading = false
        }
    },

});

export const {getPlacesFetch, getPlacesSuccess, getPlacesFailure} = placesSlice.actions

export default placesSlice.reducer;