import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getDataAPI } from "./modules/slices/getDataAPI";
import playerDataReducer from "./modules/slices/scoreData";
import feedBackReducer from "./modules/slices/feedbackData";
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    player: playerDataReducer,
    getDataAPI: getDataAPI.reducer,
    feedback: feedBackReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(({
            serializableCheck: false
        })).concat(getDataAPI.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);