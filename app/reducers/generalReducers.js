import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

// Listen for the transformation of GET_USER_LOCATION and modify state accordingly
export const userLocation = createReducer([-122.481540, 48.755681], {
    [types.GET_USER_LOCATION](state, action){
       return action.location;
    }
});
