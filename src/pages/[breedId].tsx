import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import TopNav from "@/components/TopNav";

export default function BreedGallery() {
  const router = useRouter();
  const breedId = router.query.breedId;
  return (
    <>
      <SEO />
      <TopNav />
      <main className="mx-10 my-20">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="text-green-700 font-bold text-3xl mb-6">
            Breed Gallery: {breedId}
          </h1>
        </div>
      </main>
    </>
  );
}
