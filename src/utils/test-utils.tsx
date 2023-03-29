import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AppStore, AppState, setupStore } from "../store/store";
import { initialState } from "../store/breedsReducer";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/shared/lib/router-context";
import userEvent from "@testing-library/user-event";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<AppState>;
  store?: AppStore;
  router?: Partial<NextRouter>;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = initialState,
    store = setupStore(),
    router = {},
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <RouterContext.Provider value={createMockRouter(router)}>
        <Provider store={store}>{children}</Provider>
      </RouterContext.Provider>
    );
  }

  return {
    store,
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    forward: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    domainLocales: [],
    isPreview: false,
    ...router,
  };
}
