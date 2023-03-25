import { IconButtonProps } from "@/types";

export default function IconButton({
  name,
  title = "",
  className = "",
  onClick,
}: IconButtonProps) {
  return (
    <button
      className={`material-icons rounded-full cursor-pointer ${className}`}
      title={title}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
