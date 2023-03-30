import {
  Breed,
  BreedImage,
  BreedImageSchema,
  BreedSchema,
  Favorite,
  FavoriteSchema,
} from "@/types";
import { z } from "zod";

const API = "https://api.thecatapi.com/v1";
const API_KEY = process.env.NEXT_PUBLIC_REACT_APP_API_KEY ?? "";
const OPTIONS = {
  headers: {
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
  },
};

export const BREEDS_URL = `${API}/breeds` as const;
export const IMAGES_SEARCH_URL = `${API}/images/search` as const;
export const FAVORITES_URL = `${API}/favourites` as const;

/**
 * @description Get breeds list
 */
export const getBreeds = async (): Promise<Breed[]> => {
  try {
    return fetch(BREEDS_URL, OPTIONS)
      .then((response) => response.json())
      .then((data) => z.array(BreedSchema).parse(data));
  } catch (e) {
    return <Breed[]>[];
  }
};

/**
 * @description Get images by breed
 */
export const getBreedImages = async (
  breedId: string,
  limit = 20
): Promise<BreedImage[]> => {
  try {
    return fetch(
      `${IMAGES_SEARCH_URL}?breed_ids=${breedId}&limit=${limit}`,
      OPTIONS
    )
      .then((response) => response.json())
      .then((data) => z.array(BreedImageSchema).parse(data));
  } catch (e) {
    return <BreedImage[]>[];
  }
};

/**
 * @description Get images by breed
 */
export const getFavorites = async (limit = 20): Promise<Favorite[]> => {
  try {
    return fetch(`${FAVORITES_URL}?limit=${limit}`, OPTIONS)
      .then((response) => response.json())
      .then((data) => z.array(FavoriteSchema).parse(data));
  } catch (e) {
    return <Favorite[]>[];
  }
};

/**
 * @description Add an image to favorites
 * @returns {boolean} Request was successful
 */
export const postFavorite = async (
  imageId: Breed["id"]
): Promise<{ id?: number; ok: boolean }> => {
  const body = JSON.stringify({
    image_id: imageId,
  });
  try {
    return fetch(FAVORITES_URL, {
      ...OPTIONS,
      method: "POST",
      body,
    })
      .then(async (response) => ({
        body: await response.json(),
        ok: response.ok,
      }))
      .then((data) => ({ id: z.number().parse(data.body.id), ok: data.ok }));
  } catch (e) {
    return { ok: false };
  }
};

/**
 * @description Remove an image from favorites
 * @returns {boolean} Request was successful
 */
export const deleteFavorite = async (
  favoriteId: number
): Promise<{ ok: boolean }> => {
  try {
    return fetch(`${FAVORITES_URL}/${favoriteId}`, {
      ...OPTIONS,
      method: "DELETE",
    }).then((response) => ({ ok: response.ok }));
  } catch (e) {
    return { ok: false };
  }
};
