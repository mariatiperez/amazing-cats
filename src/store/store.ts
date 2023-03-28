import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import breedsReducer from "./breedsReducer";

export const setupStore = () =>
  configureStore({
    reducer: breedsReducer,
  });
const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
