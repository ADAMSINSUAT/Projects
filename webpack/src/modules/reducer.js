import * as actions from "./actionType";

const initState = {
    users: [],
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_USERS_DATA:
            return { ...state, users: action.payload.httpResponse };
        case actions.POST_USER_DATA:
            return { ...state, users: [...state.users, action.payload] };
        case actions.DELETE_USER_DATA:
            return { 
                ...state,
                users: state.users.filter(
                    (val)=>val.id != action.payload
                ),
            }
        default:
            return state;
    }
};