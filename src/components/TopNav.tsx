import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-700 p-3 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center text-white select-none">
        <span className="material-icons mr-2">pets</span>
        <Link
          href="/"
          className="font-semibold text-xl tracking-tight"
          title="Go to home page"
        >
          Amazing Cats
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          href="/favorites"
          className="material-icons text-white"
          title="Go to Favorites"
        >
          favorite
        </Link>
      </div>
    </nav>
  );
}
