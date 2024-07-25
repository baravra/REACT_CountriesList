import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { countriesApi } from "./api";

const rootReducer = combineReducers({
  // Adicione aqui os demais reducers da aplicação
  [countriesApi.reducerPath]: countriesApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: { warnAfter: 100 } }).concat(
        countriesApi.middleware
    ),
  devTools: true,
});

export default store;