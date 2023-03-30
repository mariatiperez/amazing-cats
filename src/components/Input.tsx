import { InputProps } from "@/types";
import IconButton from "./IconButton";

export default function Input({
  id,
  label,
  placeholder = label,
  type = "text",
  value = "",
  onChange,
}: InputProps) {
  return (
    <>
      <label className="hidden" htmlFor={id}>
        {label}
      </label>
      <div className="relative flex flex-row text-neutral-600 dark:text-neutral-50 w-full md:w-96 mb-6">
        <span className="material-icons absolute top-1/2 transform -translate-y-1/2 ml-2">
          search
        </span>
        <input
          id={id}
          data-testid="search-input"
          placeholder={placeholder}
          type={type}
          value={value}
          autoComplete="off"
          className="appearance-none border rounded py-2 pl-8 border-slate-300 focus:border-slate-400 outline-none w-full"
          onChange={(e) => onChange(e.target.value)}
        />
        {value && (
          <IconButton
            name="close"
            dataTestId="clear-search-button"
            className="absolute top-1/2 transform -translate-y-1/2 ml-1 right-0 text-sm mr-1"
            onClick={() => onChange("")}
          />
        )}
      </div>
    </>
  );
}
