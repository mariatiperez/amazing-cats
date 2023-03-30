import Image from "next/image";
import { PropsWithChildren } from "react";

export default function NoResults({ children }: PropsWithChildren<{}>) {
  return (
    <article
      data-testid="no-results"
      className="flex flex-col items-center text-lg"
    >
      <p className="text-center w-full">
        {"Oh no! "} {children || "We don't have anything to show :("}
        <br />
        Don&apos;t worry, here&apos;s a cute cat!
      </p>
      <Image
        src="/Taco.jpeg"
        alt="Taco, the DSH cat"
        width={300}
        height={300}
        className="rounded m-5"
      />
    </article>
  );
}
