import clsx from "clsx";
import { CardProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import IconButton from "./IconButton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addFavorite,
  removeFavorite,
  selectFavorite,
} from "@/store/breedsReducer";

export default function Card({
  id,
  image,
  breedId = "",
  imageId = "",
  name = "",
  description = "",
}: CardProps) {
  const dispatch = useAppDispatch();
  const favorite = typeof id === "string" && useAppSelector(selectFavorite(id));

  const [isLoading, setLoading] = useState(true);

  const ref = useRef<HTMLDivElement | null>(null);
  const loaded = useRef(false);

  const toggleFavorite = () => {
    if (favorite) dispatch(removeFavorite(favorite.id));
    else dispatch(addFavorite({ imageId, breedId }));
  };

  return (
    <div
      data-testid="card"
      className={clsx(
        "w-full rounded overflow-hidden shadow drop-shadow relative select-none h-64",
        { "h-96": description }
      )}
    >
      <Link
        href={{
          pathname: "/[breedId]",
          query: { breedId },
        }}
        className="h-64 block relative w-full z-0"
        title={name ? `Go to ${name} gallery` : ""}
      >
        <Image
          src={image?.url ?? "/Albatroz.jpg"}
          alt={`${name} Photo`}
          sizes="(max-width: 360px) 100vw, (max-width: 640px) 50vw, 33vw"
          className={clsx(
            "object-cover",
            "duration-700 ease-in-out",
            isLoading && !loaded.current
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => {
            if (!loaded.current) setLoading(false);
            loaded.current = true;
          }}
          fill
        />
      </Link>

      {name || description ? (
        <div
          ref={ref}
          className={clsx(
            "p-4 bg-white dark:bg-neutral-600 group w-full absolute bottom-0",
            {
              "h-36 min-h-[9rem] max-h-36 transition-[max-height] ease-in-out duration-300 hover:h-fit hover:max-h-full":
                description,
            }
          )}
        >
          <div className="flex flex-row justify-between">
            {name && (
              <h3 data-testid="breed-name" className="font-bold">
                {name}
              </h3>
            )}
            {!description && (
              <IconButton name="favorite" onClick={toggleFavorite} />
            )}
          </div>
          {description && (
            <p className="text-neutral-600 dark:text-neutral-50 select-none line-clamp-4 text-sm group-hover:line-clamp-none">
              {description}
            </p>
          )}
        </div>
      ) : (
        <IconButton
          name={favorite ? "favorite" : "favorite_border"}
          className="absolute bottom-0 right-0 m-4 p-1 text-red-500"
          title={favorite ? "Remove from Favorites" : "Add to Favorites"}
          onClick={toggleFavorite}
        />
      )}
    </div>
  );
}
