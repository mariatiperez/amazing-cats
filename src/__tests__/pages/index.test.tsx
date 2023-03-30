import { screen } from "@testing-library/react";
import Home from "@/pages/index";
import { renderWithProviders } from "@/utils/test-utils";
import { breeds } from "@/mocks/data.json";

describe("Home", () => {
  it("renders with empty props", () => {
    renderWithProviders(<Home breeds={[]} />);

    expect(
      screen.getByRole("heading", {
        name: /List of Breeds/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId("no-results")).toBeInTheDocument();
  });

  it("renders with props", () => {
    renderWithProviders(<Home breeds={breeds} />);

    expect(
      screen.getByRole("heading", {
        name: /List of Breeds/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId("images-container")).toBeInTheDocument();
  });

  it("searches by breed name or alt name properly", async () => {
    const { user } = renderWithProviders(<Home breeds={breeds} />);
    const input = screen.getByTestId("search-input");
    let breedNames: HTMLElement[] = [];

    // Looking for Aegean breed by its name
    await user.type(input, "Aeg");
    expect((input as HTMLInputElement).value).toBe("Aeg");
    breedNames = screen.getAllByTestId("breed-name");
    expect(breedNames).toHaveLength(1);
    expect(breedNames[0]).toHaveTextContent("Aegean");

    // Clear search input
    await user.click(screen.getByTestId("clear-search-button"));
    expect(screen.getAllByTestId("breed-name")).toHaveLength(breeds.length);

    // Looking for American Shorthair breed by its alt name
    await user.type(input, "Domestic");
    expect((input as HTMLInputElement).value).toBe("Domestic");
    breedNames = screen.getAllByTestId("breed-name");
    expect(breedNames).toHaveLength(1);
    expect(breedNames[0]).toHaveTextContent("American Shorthair");
  });
});
