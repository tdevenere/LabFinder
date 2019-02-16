import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const featureTypes = createReducer([], {
    [types.ADD_FEATURE_TYPE](state, action){
        console.log('State: ',state);
        return [...state, action.featureType];
    },
    [types.DEL_FEATURE_TYPE](state, action){
        let newTypes = state.filter(feature => feature !== action.featureType);
        return newTypes;
    },
    [types.EDIT_FEATURE_TYPE](state, action){
        let newTypes = state.filter(feature => feature !== action.oldFeatureType);
        return [...newTypes, action.featureTypeEdit]
    }
});
