import SEO from "@/components/SEO";
import TopNav from "@/components/TopNav";

export default function Favorites() {
  return (
    <>
      <SEO />
      <TopNav />
      <main className="mx-10 my-20">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="text-green-700 font-bold text-3xl mb-6">
            Your Favorite Photos
          </h1>
        </div>
      </main>
    </>
  );
}
