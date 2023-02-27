import * as actions from './actionType';
//Central Storeage
const initState = {
    count: 0,
};

const reducer = (state = initState, action) => {
    console.log(action);

    switch (action.type) {
        case actions.INC:
            return { ...state, count: state.count + action.payload };
        case actions.DEC:
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
    return state;
}

export default reducer;