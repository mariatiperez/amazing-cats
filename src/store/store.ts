import {
  Action,
  configureStore,
  PreloadedState,
  ThunkAction,
} from "@reduxjs/toolkit";
import breedsReducer from "./breedsReducer";

export const setupStore = (preloadedState?: PreloadedState<AppState>) =>
  configureStore({
    reducer: breedsReducer,
    preloadedState,
  });
const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<typeof breedsReducer>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
