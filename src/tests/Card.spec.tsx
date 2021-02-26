import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Card from "../components/Card";

test("show name", () => {
  const name = "Test name";
  render(<Card name={name} />);
  const cardName = screen.getByTestId("card-name");
  expect(cardName.textContent).toBe(name);
});

test("counter starts with passed value", () => {
  const name = "Test name";
  const value = 5;
  const onChange = jest.fn();

  render(<Card name={name} value={value} onChange={onChange} />);

  const counterValue = screen.getByTestId("counter-value");
  expect(parseInt(counterValue.textContent)).toBe(value);
  expect(onChange).toHaveBeenNthCalledWith(1, { name, value });
});

test("increment and decrement by keyboard", () => {
  const name = "Test name";

  render(<Card name={name} />);

  const card = screen.getByTestId("card");
  const counterValue = screen.getByTestId("counter-value");

  user.type(card, "+");
  expect(parseInt(counterValue.textContent)).toBe(1);

  user.type(card, "-");
  expect(parseInt(counterValue.textContent)).toBe(0);
});
