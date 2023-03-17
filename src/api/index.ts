import { Breed } from "@/types";

const API = "https://api.thecatapi.com/v1";
const API_KEY = process.env.REACT_APP_API_KEY ?? "";

/**
 * @description Get breeds list
 */
export const getBreeds = async (): Promise<Breed[]> => {
  try {
    return fetch(`${API}/breeds`, {
      headers: {
        "x-api-key": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => data);
  } catch (e) {
    return <Breed[]>[];
  }
};
