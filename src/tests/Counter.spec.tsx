import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from "../components/Counter";

test("increment", () => {
  const onChange = jest.fn();
  render(<Counter onChange={onChange} />);
  const button = screen.queryByTestId("button-increment") as HTMLButtonElement;
  user.click(button);
  expect(onChange).toHaveBeenLastCalledWith({ count: 1 });
});

test("initial value and decrement", () => {
  const onChange = jest.fn();
  render(<Counter onChange={onChange} initialValue={5} />);
  const button = screen.queryByTestId("button-decrement") as HTMLButtonElement;
  user.click(button);
  expect(onChange).toHaveBeenLastCalledWith({ count: 4 });
});
