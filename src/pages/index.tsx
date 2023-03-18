// Components
import SEO from "@/components/SEO";
import TopNav from "@/components/TopNav";
import BreedCard from "@/components/BreedCard";
import Input from "@/components/Input";
import NoResults from "@/components/NoResults";

// Functions
import { getBreeds } from "@/api";
import { useState } from "react";

// Types
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Breed } from "@/types";
import { ChangeEventHandler } from "react";

export const getStaticProps: GetStaticProps<{ breeds: Breed[] }> = async () => {
  const breeds = await getBreeds();

  return { props: { breeds } };
};

export default function Home({
  breeds: allBreeds,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [search, setSearch] = useState("");
  const [breeds, setBreeds] = useState(allBreeds);

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
          <h1 className="text-green-700 font-bold text-3xl mb-6">
            List of Breeds
          </h1>
          <Input
            id="search"
            label="Search by name"
            value={search}
            onChange={handleSearch}
          />
        </div>
        {breeds.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8 lg:gap-y-12 justify-items-center">
            {breeds.map((breed, index) => (
              <BreedCard
                key={breed.id}
                id={breed.id}
                name={breed.name}
                description={breed.description}
                image={breed.image}
                priority={index < 10}
              />
            ))}
          </div>
        ) : (
          <NoResults />
        )}
      </main>
    </>
  );
}
