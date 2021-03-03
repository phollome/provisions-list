import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Button from "../components/Button";

test("handle click", () => {
  const label = "Click me";
  const handler = jest.fn();

  render(<Button label={label} onClick={handler} />);

  const button = screen.getByTestId("button");
  user.click(button);

  expect(button.textContent).toBe(label);
  expect(handler).toBeCalledTimes(1);
});
