import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import TopNav from "@/components/TopNav";
import PageTitle from "@/components/PageTitle";
import { NextPage } from "next";
import Card from "@/components/Card";
import NoResults from "@/components/NoResults";
import {
  loadBreedImages,
  loadFavorites,
  selectBreed,
  selectBreedImages,
} from "@/store/breedsReducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import SimpleLoader from "@/components/SimpleLoader";

const BreedGallery: NextPage = () => {
  const id = (useRouter().query.breedId as string) ?? "";
  const images = useAppSelector(selectBreedImages(id));
  const { name = "" } = useAppSelector(selectBreed(id)) ?? {};
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const load = async () =>
      await Promise.all([
        dispatch(loadBreedImages(id)),
        dispatch(loadFavorites()),
      ]).then(() => setLoading(false));

    load();
  }, [id]);

  return (
    <>
      <SEO />
      <TopNav />
      <main className="mx-10 my-20">
        <PageTitle title={`${name} Gallery`} />
        {isLoading ? (
          <SimpleLoader />
        ) : images?.length ? (
          <div
            data-testid="images-container"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8 lg:gap-y-12 justify-items-center"
          >
            {images.map((image) => (
              <Card
                key={image.id}
                id={image.id}
                imageId={image.id}
                breedId={id}
                image={image}
              />
            ))}
          </div>
        ) : (
          <NoResults userSearch={false} />
        )}
      </main>
    </>
  );
};

export default connect()(BreedGallery);
