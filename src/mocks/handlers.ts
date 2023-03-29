// src/mocks/handlers.js
import { BREEDS_URL, FAVORITES_URL, IMAGES_SEARCH_URL } from "@/api";
import { rest } from "msw";

export const handlers = [
  // getBreeds
  rest.get(BREEDS_URL, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "abys",
          name: "Abyssinian",
          description:
            "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
          alt_names: "",
          reference_image_id: "0XYvRd7oD",
          image: {
            id: "0XYvRd7oD",
            width: 1204,
            height: 1445,
            url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
          },
        },
      ]),
      ctx.status(200),
      ctx.delay(150)
    );
  }),
  // getBreedImages
  rest.get(IMAGES_SEARCH_URL, (req, res, ctx) => {
    const images = [
      {
        breeds: [],
        id: "2as",
        url: "https://cdn2.thecatapi.com/images/2as.jpg",
        width: 600,
        height: 399,
      },
      {
        breeds: [],
        categories: [
          {
            id: 6,
            name: "caturday",
          },
        ],
        id: "605",
        url: "https://cdn2.thecatapi.com/images/605.gif",
        width: 320,
        height: 240,
      },
      {
        breeds: [],
        id: "bak",
        url: "https://cdn2.thecatapi.com/images/bak.jpg",
        width: 500,
        height: 272,
      },
      {
        breeds: [],
        id: "cga",
        url: "https://cdn2.thecatapi.com/images/cga.jpg",
        width: 495,
        height: 435,
      },
      {
        breeds: [],
        id: "e27",
        url: "https://cdn2.thecatapi.com/images/e27.jpg",
        width: 696,
        height: 507,
      },
    ];
    return res(
      ctx.json(req.url.searchParams.get("breed_ids") ? images : []),
      ctx.status(200)
    );
  }),
  // getFavorites
  rest.get(FAVORITES_URL, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 101314212,
          user_id: "t2mype",
          image_id: "N-94oSJ5T",
          sub_id: null,
          created_at: "2023-03-25T13:40:56.000Z",
          image: {
            id: "N-94oSJ5T",
            url: "https://cdn2.thecatapi.com/images/N-94oSJ5T.jpg",
          },
        },
        {
          id: 101314213,
          user_id: "t2mype",
          image_id: "h19-vtIeX",
          sub_id: null,
          created_at: "2023-03-25T13:49:04.000Z",
          image: {
            id: "h19-vtIeX",
            url: "https://cdn2.thecatapi.com/images/h19-vtIeX.jpg",
          },
        },
        {
          id: 101314219,
          user_id: "t2mype",
          image_id: "8r4M61iyS",
          sub_id: null,
          created_at: "2023-03-25T14:11:33.000Z",
          image: {
            id: "8r4M61iyS",
            url: "https://cdn2.thecatapi.com/images/8r4M61iyS.jpg",
          },
        },
        {
          id: 101314251,
          user_id: "t2mype",
          image_id: "Hb2N6tYTJ",
          sub_id: null,
          created_at: "2023-03-25T19:00:57.000Z",
          image: {
            id: "Hb2N6tYTJ",
            url: "https://cdn2.thecatapi.com/images/Hb2N6tYTJ.jpg",
          },
        },
      ]),
      ctx.status(200)
    );
  }),
  // postFavorites
  rest.post(FAVORITES_URL, (req, res, ctx) => {
    return res(ctx.json({ id: 1234 }), ctx.status(200));
  }),
  // deleteFavorites
  rest.delete(FAVORITES_URL, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
