import Image from "next/image";

export default function NoResults() {
  return (
    <div className="flex flex-col items-center text-lg">
      <p className="text-center w-full">
        Oh no! We couldn't find what you're looking for :(
        <br />
        Don't worry, here's a cute cat!
      </p>
      <Image
        src="/Taco.jpeg"
        alt="Taco, the DSH cat"
        width={300}
        height={300}
        className="rounded m-5"
      />
    </div>
  );
}
