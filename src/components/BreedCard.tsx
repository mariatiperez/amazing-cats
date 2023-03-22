import clsx from "clsx";
import { Breed } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

export default function BreedCard({
  id,
  name,
  description,
  image,
  priority = false,
}: Breed) {
  const [isLoading, setLoading] = useState(true);

  const ref = useRef<HTMLDivElement | null>(null);
  const loaded = useRef(false);

  return (
    <div className="w-full rounded overflow-hidden shadow drop-shadow h-[400px] relative select-none">
      <Link
        href={{
          pathname: "/[breedId]",
          query: { breedId: id },
        }}
        className="h-72 block relative w-full z-0"
        title={`Go to ${name} gallery`}
      >
        <Image
          src={image?.url ?? "/Albatroz.jpg"}
          alt={`${name} Photo`}
          sizes="(max-width: 360px) 100vw, (max-width: 640px) 50vw, 33vw"
          className={clsx(
            "object-cover",
            "duration-700 ease-in-out",
            isLoading && !loaded
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => {
            if (!loaded) setLoading(false);
            loaded.current = true;
          }}
          priority={priority}
          fill
        />
      </Link>
      <div
        ref={ref}
        className={clsx(
          "p-4 bg-white dark:bg-neutral-600 absolute bottom-0 h-36 min-h-[9rem] max-h-36 group",
          {
            "transition-[max-height] ease-in-out duration-300 hover:h-fit hover:max-h-full":
              description,
          }
        )}
      >
        <h3 className="font-bold">{name}</h3>
        {description && (
          <p className="text-neutral-600 dark:text-neutral-50 select-none line-clamp-4 text-sm group-hover:line-clamp-none">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
