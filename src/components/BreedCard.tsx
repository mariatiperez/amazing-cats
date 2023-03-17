import clsx from "clsx";
import { Breed } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function BreedCard(props: Breed) {
  return (
    <>
      <Link
        href="#!"
        className="w-full max-w-xs rounded overflow-hidden shadow h-[448px] relative"
        title={`Go to ${props.name} gallery`}
      >
        <div className="h-72 relative w-full z-0">
          <Image
            className="object-cover"
            src={props.image?.url ?? "/Albatroz.png"}
            alt={`${props.name} Photo`}
            fill
          />
        </div>
        <div
          className={clsx({
            "p-4 bg-white absolute bottom-0 group transition-[height] ease-in-out":
              true,
            "h-40": props.description,
            "hover:h-fit": props.description && props.description.length > 150,
          })}
        >
          <h3 className="font-bold text-xl mb-2">{props.name}</h3>
          {props.description && (
            <p className="text-neutral-600 select-none line-clamp-4 group-hover:line-clamp-none">
              {props.description}
            </p>
          )}
        </div>
      </Link>
    </>
  );
}
