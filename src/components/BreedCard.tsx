import clsx from "clsx";
import { Breed } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BreedCard({
  name,
  description,
  image,
  priority = false,
}: Breed) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-full rounded overflow-hidden shadow h-[400px] relative select-none">
      <Link
        href="#!"
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
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setLoading(false)}
          priority={priority}
          fill
        />
      </Link>
      <div
        className={clsx({
          "p-4 bg-white absolute bottom-0 group h-36 max-h-36": true,
          "hover:h-fit hover:max-h-full transition-[max-height] ease-in-out duration-300":
            description,
        })}
      >
        <h3 className="font-bold text-base mb-2">{name}</h3>
        {description && (
          <p className="text-neutral-600 select-none line-clamp-4 group-hover:line-clamp-none text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
