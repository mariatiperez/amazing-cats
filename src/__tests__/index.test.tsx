import { screen } from "@testing-library/react";
import Home from "@/pages/index";
import { renderWithProviders } from "@/utils/test-utils";

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
});
