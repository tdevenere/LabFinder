export default function createReducer(initialState, handlers){
    console.log('Initial State: ', initialState);
    return function reducer(state = initialState, action){
        if(handlers.hasOwnProperty(action.type)){
            return handlers[action.type](state, action);
        }else{
            return state;
        }
    }
}