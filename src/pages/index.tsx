import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import TopNav from "@/components/TopNav";
import Card from "@/components/Card";
import Input from "@/components/Input";
import NoResults from "@/components/NoResults";
import PageTitle from "@/components/PageTitle";
import { setAllBreeds } from "@/store/breedsReducer";
import { useAppDispatch } from "@/store/hooks";
import { connect } from "react-redux";
import { Breed } from "@/types";
import { InferGetStaticPropsType, NextPage, GetStaticProps } from "next";
import { getBreeds } from "@/api";

export const getStaticProps: GetStaticProps<{ breeds: Breed[] }> = async () => {
  const breeds = await getBreeds();

  return { props: { breeds } };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  breeds: allBreeds,
}) => {
  const [search, setSearch] = useState("");
  const [breeds, setBreeds] = useState(allBreeds);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setAllBreeds(allBreeds));
  }, [allBreeds, dispatch]);

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value)
      setBreeds(
        allBreeds.filter(
          (breed) =>
            breed.name.toLowerCase().includes(value) ||
            breed.alt_names?.toLowerCase().includes(value)
        )
      );
    else setBreeds(allBreeds);
  };

  return (
    <>
      <SEO />
      <TopNav />
      <main className="mx-10 my-20">
        <div className="flex flex-col md:flex-row justify-between">
          <PageTitle title="List of Breeds" />
          <Input
            id="search"
            label="Search by name"
            value={search}
            onChange={handleSearch}
          />
        </div>
        {breeds?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8 lg:gap-y-12 justify-items-center">
            {breeds.map((breed) => (
              <Card
                key={breed.id}
                id={breed.id}
                breedId={breed.id}
                name={breed.name}
                description={breed.description}
                image={breed.image}
              />
            ))}
          </div>
        ) : (
          <NoResults userSearch={!!search} />
        )}
      </main>
    </>
  );
};

export default connect()(Home);
