// src/mocks/handlers.js
import { BREEDS_URL, FAVORITES_URL, IMAGES_SEARCH_URL } from "@/api";
import { rest } from "msw";
import { breeds, images, favorites } from "./data.json";

export const handlers = [
  // getBreeds
  rest.get(BREEDS_URL, (req, res, ctx) => {
    return res(ctx.json(breeds), ctx.status(200), ctx.delay(150));
  }),
  // getBreedImages
  rest.get(IMAGES_SEARCH_URL, (req, res, ctx) => {
    return res(
      ctx.json(req.url.searchParams.get("breed_ids") ? images : []),
      ctx.status(200)
    );
  }),
  // getFavorites
  rest.get(FAVORITES_URL, (req, res, ctx) => {
    return res(ctx.json(favorites), ctx.status(200));
  }),
  // postFavorites
  rest.post(FAVORITES_URL, (req, res, ctx) => {
    return res(ctx.json({ id: 1234 }), ctx.status(200));
  }),
  // deleteFavorites
  rest.delete(`${FAVORITES_URL}/*`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
