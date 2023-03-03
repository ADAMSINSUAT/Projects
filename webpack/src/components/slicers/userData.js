import { createSlice } from "@reduxjs/toolkit";

//Creates a new slice
export const userDataSlice = createSlice({
    //Sets the slice name to "user"
    name: "user",
    //Creates an initial state
    initialState: {
        //State array for holding the data from getDataAPI's getAllUserQuery() endpoint function
        data: [],
    },

    //The reducer function
    reducers: {
        //A reducer function for pushing the data from the dispatched data from the APIDisplay component
        addUsers: (state, action) => {
            //Pushes the payload data received from the responseInfo variable from te component APIDisplay
            //to the data state 
            state.data.push(action.payload);
        },
    },
})

//Add the addUsers reducer to the userDataSlice's actions
export const { addUsers } = userDataSlice.actions;

export default userDataSlice.reducer;