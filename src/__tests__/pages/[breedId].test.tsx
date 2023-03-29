import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import BreedGallery from "@/pages/[breedId]";
import { renderWithProviders } from "@/utils/test-utils";
import { act } from "react-dom/test-utils";

describe("Home", () => {
  it("renders with empty data", async () => {
    await act(async () => {
      await renderWithProviders(<BreedGallery />);
    });
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByTestId("loader"));

    expect(
      screen.getByRole("heading", {
        name: /Gallery/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId("no-results")).toBeInTheDocument();
  });

  it("renders with data", async () => {
    await act(async () => {
      await renderWithProviders(<BreedGallery />, {
        router: { query: { breedId: "abys" } },
      });
    });
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByTestId("loader"));

    expect(
      screen.getByRole("heading", {
        name: /Gallery/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId("images-container")).toBeInTheDocument();
  });
});
