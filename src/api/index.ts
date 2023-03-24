import { Breed, BreedImage, BreedImageSchema, BreedSchema } from "@/types";
import { z } from "zod";

const API = "https://api.thecatapi.com/v1";
const API_KEY = process.env.REACT_APP_API_KEY ?? "";
const OPTIONS = {
  headers: {
    "x-api-key": API_KEY,
  },
};

/**
 * @description Get breeds list
 */
export const getBreeds = async (): Promise<Breed[]> => {
  try {
    return fetch(`${API}/breeds`, OPTIONS)
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
      `${API}/images/search?breed_ids=${breedId}&limit=${limit}`,
      OPTIONS
    )
      .then((response) => response.json())
      .then((data) => z.array(BreedImageSchema).parse(data));
  } catch (e) {
    return <BreedImage[]>[];
  }
};
