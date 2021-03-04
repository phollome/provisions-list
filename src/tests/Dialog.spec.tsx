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

test("close with background click", () => {
  render(<Dialog visible />);

  const background = screen.getByTestId("dialog-background");
  user.click(background);

  expect(() => screen.getByTestId("dialog")).toThrow();

  render(<Dialog visible important />);

  user.click(background);

  expect(() => screen.getByTestId("dialog")).not.toThrow();
});

test("render children", () => {
  render(
    <Dialog visible>
      <h1 data-testid="test-headline">Headline</h1>
      <p data-testid="test-paragraph">Paragraph</p>
    </Dialog>
  );

  expect(() => screen.getByTestId("test-headline")).not.toThrow();
  expect(() => screen.getByTestId("test-paragraph")).not.toThrow();
});

test("provide custom actions", () => {
  const actions = [
    {
      label: "Custom action 1",
      onClick: jest.fn(),
      "data-testid": "custom-button-1",
    },
    {
      label: "Custom action 2",
      onClick: jest.fn(),
      "data-testid": "custom-button-2",
    },
  ];
  render(<Dialog actions={actions} visible />);

  actions.forEach(action => {
    const button = screen.getByTestId(action["data-testid"]);
    user.click(button);
    expect(action.onClick).toBeCalledTimes(1);
  });
});
