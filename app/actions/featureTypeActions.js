import * as types from './types';

export function createFeatureType(featureType) {
    return {
        type: types.ADD_FEATURE_TYPE,
        featureType
    }
}

export function deleteFeatureType(featureType) {
    return { 
        type: types.DEL_FEATURE_TYPE,
        featureType
    }
}

export function editFeatureType(oldFeatureType, featureTypeEdit){
    return {
        type: types.EDIT_FEATURE_TYPE,  
        oldFeatureType, 
        featureTypeEdit
    }
}
