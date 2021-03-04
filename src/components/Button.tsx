import classnames from "classnames";

export interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler;
  "data-testid"?: string;
  classList?: string;
}

function Button(props: ButtonProps) {
  const classNames = classnames(
    "w-full border rounded px-4 py-2 hover:bg-gray-300 active:bg-gray-100 focus:border-gray-400 focus:outline-none",
    props.classList
  );

  return (
    <button
      data-testid={props["data-testid"]}
      className={classNames}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

Button.defaultProps = {
  "data-testid": "button",
};

export default Button;
