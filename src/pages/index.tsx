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
import GridContainer from "@/components/GridContainer";

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
            breed.name.toLowerCase().includes(value.toLowerCase()) ||
            breed.alt_names?.toLowerCase().includes(value.toLowerCase())
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
          <GridContainer>
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
          </GridContainer>
        ) : (
          <NoResults>
            {!!search && "We couldn't find what you're looking for :("}
          </NoResults>
        )}
      </main>
    </>
  );
};

export default connect()(Home);
