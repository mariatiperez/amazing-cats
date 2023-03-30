import { IconButtonProps } from "@/types";

export default function IconButton({
  name,
  title = "",
  className = "",
  dataTestId = "",
  onClick,
}: IconButtonProps) {
  return (
    <button
      data-testid={dataTestId}
      className={`material-icons rounded-full cursor-pointer ${className}`}
      title={title}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
