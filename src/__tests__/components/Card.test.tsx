import { act, screen } from "@testing-library/react";
import Card from "@/components/Card";
import { renderWithProviders } from "@/utils/test-utils";
import { breeds, images, favorites } from "@/mocks/data.json";
import { initialState } from "@/store/breedsReducer";

describe("Card", () => {
  it("renders with props", () => {
    const { id, image, name, description } = breeds[0];
    renderWithProviders(
      <Card
        id={id}
        image={image}
        name={name}
        description={description}
        breedId={id}
      />
    );

    expect(
      screen.getByRole("heading", {
        name,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId("breed-description")).toHaveTextContent(
      description
    );
  });

  it("saves favorite", async () => {
    const image = images[0];
    const { user } = renderWithProviders(
      <Card id={image.id} imageId={image.id} breedId="abys" image={image} />,
      { preloadedState: { ...initialState, favorites } }
    );

    expect(screen.getByTestId("favorite-button")).toHaveTextContent(
      "favorite_border"
    );
    await user.click(screen.getByTestId("favorite-button"));
    expect(screen.getByTestId("favorite-button")).toHaveTextContent("favorite");
  });

  it("removes favorite", async () => {
    const image = images[1];
    const { user } = renderWithProviders(
      <Card id={image.id} imageId={image.id} breedId="aege" image={image} />,
      { preloadedState: { ...initialState, favorites } }
    );

    expect(screen.getByTestId("favorite-button")).toHaveTextContent("favorite");
    await user.click(screen.getByTestId("favorite-button"));
    expect(screen.getByTestId("favorite-button")).toHaveTextContent(
      "favorite_border"
    );
  });
});
