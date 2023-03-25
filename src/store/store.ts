import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import breedsReducer from "./breedsReducer";

const makeStore = () =>
  configureStore({
    reducer: breedsReducer,
  });
const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
