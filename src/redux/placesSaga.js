import {call, put, takeEvery} from 'redux-saga/effects';
import { getPlacesSuccess } from './placesState';

function* placesSaga(){
    yield takeEvery('places/getPlacesFetch', workGetPlacesFetch);
}
function* workGetPlacesFetch(action){
    console.log("action", action)
    const places = yield call(()=> fetch(`https://restcountries.com/v3.1/name/${action.payload}`));
    const formatetedPlaces = yield places.json();
    const formatetedPlacesShortend = formatetedPlaces.map(place => place.name.official);
    yield put(getPlacesSuccess(formatetedPlacesShortend))
} 

export default placesSaga