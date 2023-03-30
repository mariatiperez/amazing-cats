import { PropsWithChildren } from "react";

export default function GridContainer({ children }: PropsWithChildren<{}>) {
  return (
    <div
      data-testid="images-container"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8 lg:gap-y-12 justify-items-center"
    >
      {children}
    </div>
  );
}
