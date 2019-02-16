import { combineReducers } from 'redux';
import { userLocation }  from './mapReducers';
import { featureTypes } from './featureTypeReducers';
import { projects } from './projectReducers';

export default combineReducers({
    userLocation: userLocation,
    featureTypes: featureTypes,
    projects: projects,
});
