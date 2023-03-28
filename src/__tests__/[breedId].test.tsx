import { screen } from "@testing-library/react";
import BreedGallery from "@/pages/[breedId]";
import { renderWithProviders } from "@/utils/test-utils";
import { act } from "react-dom/test-utils";

describe("Home", () => {
  it("renders with empty data", async () => {
    await act(async () => {
      await renderWithProviders(<BreedGallery />);
    });

    expect(
      await screen.findByRole("heading", {
        name: /Gallery/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId("no-results")).toBeInTheDocument();
  });
});
