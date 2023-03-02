import { createSlice } from "@reduxjs/toolkit";
export const userDataSlice = createSlice({
    name: "user",
    initialState: {
        userData: [],
    },

    reducers: {
        addUsers: (state, action) => {
            state.userData.push(action.payload);
        },
    },
})

export const { addUsers } = userDataSlice.actions;

export default userDataSlice.reducer;