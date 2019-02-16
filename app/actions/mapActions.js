import * as types from './types';


export function getUserLocation(){
    console.log("called");
    return(dispach, getState) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var location = position.coords;
                console.log(location)
                dispach(setUserLocation([location.longitude, location.latitude]));
            },
            (err) => {
                console.log(err.message)
            },
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 10000
            }
        );
    }
}

export function setUserLocation(location){
    return{
        type: types.GET_USER_LOCATION,
        location
    }
}


