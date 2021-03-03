import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Dialog from "../components/Dialog";

test("show dialog", () => {
  const { rerender } = render(<Dialog />);

  expect(() => screen.getByTestId("dialog")).toThrow();

  rerender(<Dialog visible />);

  expect(() => screen.getByTestId("dialog")).not.toThrow();
});

test("close dialog", () => {
  render(<Dialog visible />);

  const closeButton = screen.getByTestId("close-button");
  user.click(closeButton);

  expect(() => screen.getByTestId("dialog")).toThrow();
});

test("handle submit dialog", () => {
  const onSubmit = jest.fn();

  render(<Dialog onSubmit={onSubmit} visible />);

  const submitButton = screen.getByTestId("submit-button");
  user.click(submitButton);

  expect(onSubmit).toBeCalledTimes(1);
});
