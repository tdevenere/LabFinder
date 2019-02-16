import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const projects = createReducer([], {
    [types.ADD_PROJECT](state, action){
        console.log('State: ',state);
        return [action.project, ...state];
    },
    [types.DEL_PROJECT](state, action){
        let newProjects = state.filter(project => project !== action.project);
        return newProjects;
    },
    [types.EDIT_PROJECT](state, action){
        let newProjects = state.filter(project => project !== action.oldProject && project != null);
        return [action.projectEdit, ...newProjects];
    }, 
    [types.ADD_FEATURES_TO_PROJECT](state, action){
        let newProjects = state.filter(project => project !== action.project && project != null);
        action.project.features = action.features;
        return[action.project, ...newProjects];
    }
});
