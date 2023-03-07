import { createSlice } from "@reduxjs/toolkit";
import { findIndex } from "lodash";

export const feedBackSlice = createSlice({
    name: "feedback",
    //Creates an initial state
    initialState: {
        feedbackData: [],
    },

    //The reducer function
    reducers: {
        addFeedback: (state, action) => {
            state.feedbackData.push(action.payload);
        },
    },
})

export const { addFeedback } = feedBackSlice.actions;

export default feedBackSlice.reducer;