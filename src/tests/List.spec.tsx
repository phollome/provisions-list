import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";

import List from "../components/List";

test("show placeholder", () => {
  render(<List />);
  expect(screen.getByTestId("placeholder")).toBeTruthy();
});

test("show items", () => {
  const data = [
    { _id: 1, name: "Item 1" },
    { _id: 2, name: "Item 2", value: 3 },
  ];
  render(<List data={data} />);
  const cards = screen.getAllByTestId("card");
  expect(cards.length).toBe(data.length);
});

test("handle changed", () => {
  const onChange = jest.fn();
  const data = [
    { _id: 1, name: "Item 1" },
    { _id: 2, name: "Item 2", value: 3 },
  ];
  render(<List data={data} onChange={onChange} />);

  const firstCard = document.getElementById(
    data[0]._id.toString()
  ) as HTMLElement;
  const firstValue = within(firstCard as HTMLElement).getByTestId(
    "counter-value"
  );
  expect(firstValue.textContent).toBe("0");

  const secondCard = document.getElementById(
    data[1]._id.toString()
  ) as HTMLElement;
  const secondValue = within(secondCard).getByTestId("counter-value");
  expect(secondValue.textContent).toBe("3");

  const firstIncrement = within(firstCard).getByTestId("button-increment");
  user.click(firstIncrement);
  expect(firstValue.textContent).toBe("1");

  user.type(secondCard, "-");
  expect(firstValue.textContent).toBe("1");

  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenNthCalledWith(1, { ...data[0], value: 1 });
  expect(onChange).toHaveBeenNthCalledWith(2, {
    ...data[1],
    value: (data[1].value as number) - 1,
  });
});
