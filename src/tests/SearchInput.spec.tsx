import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import SearchInput from "../components/SearchInput";

test("focus on click", () => {
  const searchString = "Search string";
  const onChange = jest.fn();
  render(<SearchInput onChange={onChange} />);
  const element = screen.queryByTestId("search-input") as HTMLInputElement;
  user.type(element, searchString);
  expect(element.value).toBe(searchString);
  expect(onChange).toHaveBeenCalledTimes(searchString.length);
});

// TODO: test focus on shortcut
