import { getBreedImages, getBreeds } from "@/api";
import { Breed, BreedImage } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

interface InitialState {
  breeds: Breed[];
  images: Record<string, BreedImage[]>;
}

const initialState: InitialState = {
  breeds: [],
  images: {},
};

/**
 * @description Load all breeds
 */
export const loadBreeds = createAsyncThunk("breeds/loadBreeds", async () => {
  return { breeds: await getBreeds() };
});

/**
 * @description Load images by breed
 * @param {Breed["id"]} breedId id of the breed to load images
 */
export const loadBreedImages = createAsyncThunk(
  "breeds/loadBreedImages",
  async (breedId: Breed["id"]) => {
    return { images: await getBreedImages(breedId), breedId };
  }
);

/**
 * @description State from the server
 */
export const hydrate = createAsyncThunk(
  HYDRATE,
  async (state: AppState) => state
);

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBreeds.fulfilled, (state, { payload }) => {
        const { breeds } = payload;
        return {
          ...state,
          breeds,
        };
      })
      .addCase(loadBreedImages.fulfilled, (state, { payload }) => {
        const { images, breedId } = payload;
        return {
          ...state,
          images: {
            ...state.images,
            [breedId]: images,
          },
        };
      })
      .addMatcher(
        ({ type }) => type === HYDRATE,
        (state, { payload }) => {
          if (payload.breeds?.length) state.breeds = payload.breeds;
          if (Object.keys(payload.images)?.length)
            state.images = { ...state.images, ...payload.images };
          return state;
        }
      );
  },
});

export default breedsSlice.reducer;
