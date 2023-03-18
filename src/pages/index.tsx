// Components
import SEO from "@/components/SEO";
import TopNav from "@/components/TopNav";
import BreedCard from "@/components/BreedCard";

// Functions
import { getBreeds } from "@/api";

// Types
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Breed } from "@/types";

export const getStaticProps: GetStaticProps<{ breeds: Breed[] }> = async () => {
  const breeds = await getBreeds();

  return { props: { breeds } };
};

export default function Home({
  breeds,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO />
      <TopNav />
      <main className="mx-10 mt-20">
        <h1 className="text-green-700 font-bold text-3xl mb-6">
          List of Breeds
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8 lg:gap-y-12 justify-items-center">
          {breeds.map((breed) => (
            <BreedCard
              key={breed.id}
              id={breed.id}
              name={breed.name}
              description={breed.description}
              image={breed.image}
            />
          ))}
        </div>
      </main>
    </>
  );
}
