import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Card from "../components/Card";

test("show name", () => {
  const name = "Test name";
  render(<Card _id={1} name={name} />);
  const cardName = screen.getByTestId("card-name");
  expect(cardName.textContent).toBe(name);
});

test("counter starts with passed value", () => {
  const item = {
    _id: 1,
    name: "Test name",
    value: 5,
  };
  const onChange = jest.fn();

  render(<Card {...item} onChange={onChange} />);

  const counterValue = screen.getByTestId("counter-value");
  expect(counterValue).not.toBeNull();
  expect(parseInt(counterValue.textContent as string)).toBe(item.value);
  expect(onChange).toHaveBeenNthCalledWith(1, item);
});

test("increment and decrement by keyboard", () => {
  const name = "Test name";

  render(<Card _id={1} name={name} />);

  const card = screen.getByTestId("card");
  const counterValue = screen.getByTestId("counter-value");

  user.type(card, "+");
  expect(counterValue).not.toBeNull();
  expect(parseInt(counterValue.textContent as string)).toBe(1);

  user.type(card, "-");
  expect(counterValue).not.toBeNull();
  expect(parseInt(counterValue.textContent as string)).toBe(0);
});
