import clsx from "clsx";
import { Breed } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function BreedCard({ name, description, image }: Breed) {
  return (
    <>
      <Link
        href="#!"
        className="w-full rounded overflow-hidden shadow h-[400px] relative"
        title={`Go to ${name} gallery`}
      >
        <div className="h-72 relative w-full z-0">
          <Image
            className="object-cover"
            src={image?.url ?? "/Albatroz.png"}
            alt={`${name} Photo`}
            fill
          />
        </div>
        <div
          className={clsx({
            "p-4 bg-white absolute bottom-0 group transition-[height] ease-in-out":
              true,
            "h-36": description,
            "hover:h-fit": description && description.length > 140,
          })}
        >
          <h3 className="font-bold text-base mb-2">{name}</h3>
          {description && (
            <p className="text-neutral-600 select-none line-clamp-4 group-hover:line-clamp-none text-sm">
              {description}
            </p>
          )}
        </div>
      </Link>
    </>
  );
}
