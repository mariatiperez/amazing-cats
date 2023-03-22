import PageTitle from "@/components/PageTitle";
import SEO from "@/components/SEO";
import TopNav from "@/components/TopNav";

export default function Favorites() {
  return (
    <>
      <SEO />
      <TopNav />
      <main className="mx-10 my-20">
        <div className="flex flex-col md:flex-row justify-between">
          <PageTitle title="Your Favorite Photos" />
        </div>
      </main>
    </>
  );
}
