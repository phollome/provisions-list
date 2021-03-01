import { useRef, useEffect } from "react";
import { SearchInputProps } from "../types";

const SearchInput = (props: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.addEventListener("keydown", (evt) => {
      if ((evt.metaKey || evt.ctrlKey) && evt.key === "k") {
        if (inputRef.current !== null) {
          inputRef.current.focus();
        }
      }
    });
  }, []);

  return (
    <>
      <label htmlFor="search-input">
        <input
          id="search-input"
          data-testid="search-input"
          ref={inputRef}
          className="w-full p-2 border-2 rounded"
          onChange={props.onChange}
          placeholder="Press ⌘K or ^K to search"
          aria-placeholder="press command and K or control and K to search"
          autoComplete="off"
        />
      </label>
    </>
  );
};

export default SearchInput;
