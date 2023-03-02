import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import { getDataAPI } from "./components/slicers/getDataAPI";
import userDataReducer from "./components/slicers/userData";

export const store = configureStore({
    reducer: {
        user: userDataReducer,
        [getDataAPI.reducerPath]: getDataAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getDataAPI.middleware),
  });
  
  setupListeners(store.dispatch);