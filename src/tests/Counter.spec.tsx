import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from "../components/Counter";

test("count", () => {
  const onChange = jest.fn();

  render(<Counter onChange={onChange} />);

  const value = screen.queryByTestId("counter-value");
  expect(value).not.toBeNull();
  expect(value?.textContent).toBe("0");

  const increment = screen.getByTestId("button-increment") as HTMLButtonElement;
  user.click(increment);
  expect(onChange).toHaveBeenLastCalledWith({ value: 1 });

  const decrement = screen.getByTestId("button-decrement") as HTMLButtonElement;
  user.click(decrement);
  expect(onChange).toHaveBeenLastCalledWith({ value: 0 });

  expect(onChange).toHaveBeenCalledTimes(3); // default (0) + 2 clicks

  render(<Counter defaultValue={5} onChange={onChange} />);
  expect(onChange).toHaveBeenLastCalledWith({ value: 5 });
});

test("controlled count", () => {
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();

  const { rerender } = render(
    <Counter value={4} onIncrement={onIncrement} onDecrement={onDecrement} />
  );

  const value = screen.queryByTestId("counter-value");
  expect(value).not.toBeNull();
  expect(value?.textContent).toBe("4");

  const increment = screen.getByTestId("button-increment") as HTMLButtonElement;
  user.click(increment);

  rerender(
    <Counter value={5} onIncrement={onIncrement} onDecrement={onDecrement} />
  );

  const decrement = screen.getByTestId("button-decrement") as HTMLButtonElement;
  user.click(decrement);

  expect(onIncrement).toHaveBeenNthCalledWith(1, 5, 4);
  expect(onDecrement).toHaveBeenNthCalledWith(1, 4, 5);
});
