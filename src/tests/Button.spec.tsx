import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Button from "../components/Button";

test("handle click", () => {
  const label = "Click me";
  const onClick = jest.fn();

  render(<Button label={label} onClick={onClick} />);

  const button = screen.getByTestId("button");
  user.click(button);

  expect(button.textContent).toBe(label);
  expect(onClick).toBeCalledTimes(1);
});
