import * as types from './types';

export function createProject(project) {
    return {
        type: types.ADD_PROJECT,
        project
    }
}

export function deleteProject(project) {
    return { 
        type: types.DEL_PROJECT,
        project
    }
}

export function editProject(oldProject, projectEdit){
    return {
        type: types.EDIT_PROJECT,
        oldProject, 
        projectEdit
    }
}

export function addFeaturesToProject(project, features){
    return{
        type: types.ADD_FEATURES_TO_PROJECT, 
        project, 
        features
    }
}