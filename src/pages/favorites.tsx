import Card from "@/components/Card";
import GridContainer from "@/components/GridContainer";
import NoResults from "@/components/NoResults";
import PageTitle from "@/components/PageTitle";
import SEO from "@/components/SEO";
import SimpleLoader from "@/components/SimpleLoader";
import TopNav from "@/components/TopNav";
import { loadFavorites, selectFavorites } from "@/store/breedsReducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";

export default function Favorites({ limit = 20 }) {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(true);
  const favorites = useAppSelector(selectFavorites());

  useEffect(() => {
    setLoading(true);
    dispatch(loadFavorites(limit)).then(() => setLoading(false));
  }, [dispatch]);

  return (
    <>
      <SEO />
      <TopNav />
      <main className="mx-10 my-20">
        <PageTitle title="Your Favorite Photos" />
        {isLoading ? (
          <SimpleLoader />
        ) : favorites?.length ? (
          <GridContainer>
            {favorites.map(({ id, image }) => (
              <Card key={id} id={id} image={image} />
            ))}
          </GridContainer>
        ) : (
          <NoResults />
        )}
      </main>
    </>
  );
}
