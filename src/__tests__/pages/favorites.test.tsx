import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import Favorites from "@/pages/favorites";
import { renderWithProviders } from "@/utils/test-utils";
import { act } from "react-dom/test-utils";
import { favorites } from "@/mocks/data.json";

describe("Home", () => {
  it("renders with empty data", async () => {
    await act(async () => {
      await renderWithProviders(<Favorites limit={0} />);
    });
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByTestId("loader"));

    expect(screen.getByTestId("no-results")).toBeInTheDocument();
    expect(screen.queryByTestId("favorite-button")).not.toBeInTheDocument();
  });

  it("renders with data", async () => {
    await act(async () => {
      await renderWithProviders(<Favorites />);
    });
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByTestId("loader"));

    expect(screen.getByTestId("images-container")).toBeInTheDocument();
    expect(screen.getAllByTestId("favorite-button")).toHaveLength(
      favorites.length
    );
  });
});
