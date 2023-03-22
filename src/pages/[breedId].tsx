import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import TopNav from "@/components/TopNav";
import PageTitle from "@/components/PageTitle";

export default function BreedGallery() {
  const router = useRouter();
  const breedId = router.query.breedId;
  return (
    <>
      <SEO />
      <TopNav />
      <main className="mx-10 my-20">
        <div className="flex flex-col md:flex-row justify-between">
          <PageTitle title={`Breed Gallery: ${breedId}`} />
        </div>
      </main>
    </>
  );
}
