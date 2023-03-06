import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getDataAPI } from "./modules/slices/getDataAPI";
import playerDataReducer from "./modules/slices/scoreData";

export const store = configureStore({
    reducer: {
        player: playerDataReducer,
        [getDataAPI.reducerPath]: getDataAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getDataAPI.middleware),
});

setupListeners(store.dispatch);