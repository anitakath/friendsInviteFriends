

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";
import toggleReducer from "./toggleReducer";
import invitationReducer from './invitationsReducer'


const rootReducer = combineReducers({
  auth: authReducer,
  toggle: toggleReducer,
  invitations: invitationReducer

});


const persistConfig = {
  key: "root",
  storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
