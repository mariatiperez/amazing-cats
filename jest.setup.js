import "@testing-library/jest-dom/extend-expect";
import { server } from "@/mocks/server.ts";
import { fetch } from "whatwg-fetch";

global.fetch = fetch;

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
