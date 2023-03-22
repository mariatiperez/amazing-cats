import { IconButtonProps } from "@/types";

export default function IconButton({
  name,
  className,
  onClick,
}: IconButtonProps) {
  return (
    <button
      className={`material-icons rounded-full ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
