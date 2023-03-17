import Head from "next/head";
import { getBreeds } from "@/api";
import BreedCard from "@/components/BreedCard";
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
      <Head>
        <title>Amazing Cats</title>
        <meta name="description" content="Catalog of cat breeds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pawprint.png" title="cat icon" />
      </Head>
      <main>
        <h1 className="text-primary font-bold"> List of Breeds </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 lg:gap-y-12 justify-items-center mx-2">
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
