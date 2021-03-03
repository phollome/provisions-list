import { ButtonProps } from "../types";

const Button = (props: ButtonProps) => {
  return (
    <button
      data-testid="button"
      className="w-full border rounded px-4 py-2 hover:bg-gray-300 active:bg-gray-100 focus:border-gray-400 focus:outline-none"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
