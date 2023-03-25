import {
  getBreedImages,
  getFavorites,
  postFavorite,
  deleteFavorite,
} from "@/api";
import { Breed, BreedImage, Favorite } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

interface InitialState {
  breeds: Breed[];
  images: Record<string, BreedImage[]>;
  favorites: Favorite[];
}

const initialState: InitialState = {
  breeds: [],
  images: {},
  favorites: [],
};

export const selectBreed = (id: string) => (state: AppState) =>
  state.breeds.find(({ id: breedId }) => breedId === id);

export const selectBreedImages = (breedId: string) => (state: AppState) =>
  state.images[breedId];

export const selectImage =
  (imageId: string, breedId: string) => (state: AppState) =>
    state.images[breedId]?.find(({ id }) => id === imageId);

export const selectFavorite = (id: string) => (state: AppState) =>
  state.favorites.find(({ image_id: imageId }) => imageId === id);

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
 * @description Load all favorites
 */
export const loadFavorites = createAsyncThunk(
  "breeds/loadFavorites",
  async () => {
    return { favorites: await getFavorites() };
  }
);

/**
 * @description Add a favorite
 */
export const addFavorite = createAsyncThunk(
  "breeds/addFavorite",
  async ({
    imageId,
    breedId,
  }: {
    imageId: BreedImage["id"];
    breedId: Breed["id"];
  }) => {
    const { id, ok } = await postFavorite(imageId);
    return { id, ok, breedId, imageId };
  }
);

/**
 * @description Remove a favorite
 */
export const removeFavorite = createAsyncThunk(
  "breeds/removeFavorite",
  async (id: Favorite["id"]) => {
    const { ok } = await deleteFavorite(id);
    return { id, ok };
  }
);

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    setAllBreeds: (state, { payload: breeds }) => {
      return { ...state, breeds };
    },
  },
  extraReducers: (builder) => {
    builder
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
      .addCase(loadFavorites.fulfilled, (state, { payload }) => {
        const { favorites } = payload;
        return {
          ...state,
          favorites,
        };
      })
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        const { id, ok, imageId, breedId } = payload;
        const image = selectImage(imageId, breedId)(state);

        return ok && image && id
          ? {
              ...state,
              favorites: [...state.favorites, { id, image_id: imageId, image }],
            }
          : state;
      })
      .addCase(removeFavorite.fulfilled, (state, { payload }) => {
        const { ok, id } = payload;

        return ok && id
          ? {
              ...state,
              favorites: state.favorites.filter(
                ({ id: favoriteId }) => id !== favoriteId
              ),
            }
          : state;
      });
  },
});

export const { setAllBreeds } = breedsSlice.actions;

export default breedsSlice.reducer;
