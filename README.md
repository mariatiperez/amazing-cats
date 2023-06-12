# Amazing Cats

Cats catalog made with React, Next.js, TailwindCSS and Redux. Now live [here!](https://amazing-cats.netlify.app/)

## Functional Requirements

- [x] [Page 1: List of Breeds](https://github.com/mariatiperez/amazing-cats/issues/1)
- [x] [Page 2: Breed Gallery](https://github.com/mariatiperez/amazing-cats/issues/2)
- [x] [Page 3: Favorites](https://github.com/mariatiperez/amazing-cats/issues/3)

## Project Setup

```sh
npm install
```

## Run Project

Run the development server with:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```sh
amazing-cats/
│   package.json
│   README.md
│   next.config.js
│   jest.config.js
│   jest.setup.js
│   tailwind.config.js
│
├───src
│   ├───__tests__
│   │   ├───components
│   │   │   Card.test.tsx
│   │   ├───pages
│   │   │   [breedId].test.tsx
│   │   │   index.test.ts
│   │
│   ├───api
│   │   index.ts
│   │
│   ├───components
│   │   Card.tsx
│   │   IconButton.tsx
│   │   Input.tsx
│   │   NoResults.tsx
│   │   PageTitle.tsx
│   │   SEO.tsx
│   │   SimpleLoader.tsx
│   │   TopNav.tsx
│   │
│   ├───mocks
│   │   data.json
│   │   handlers.ts
│   │   server.ts
│   │
│   ├───pages
│   │   _app.tsx
│   │   _document.tsx
│   │   [breedId].tsx
│   │   favorites.tsx
│   │   index.tsx
│   │
│   ├───store
│   │   breedsReducer.ts
│   │   hooks.ts
│   │   store.ts
│   │
│   ├───styles
│   │   globals.css
│   │
│   ├───types
│   │   index.ts
│   │
│   ├───utils
│   │   test-utils.tsx
```
