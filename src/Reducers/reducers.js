const trelliesReducer = (state = [], action) => {
    if(action.type === "TRELLIES"){
        state = action.payload;
    }
    return state;
}

const rootReducer = (state = {}, action) => {
    return {
        trellies: trelliesReducer(state.trellies, action),
    };     
}

export default rootReducer;