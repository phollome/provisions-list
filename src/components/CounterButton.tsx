import { CounterButtonProps, CounterButtonType } from "../types";

function CounterButton(props: CounterButtonProps) {
  const label = props.type === CounterButtonType.Increment ? "+" : "-";
  return (
    <button
      id={props.id}
      data-testid={props.id}
      className="h-10 w-10 border rounded-full flex items-center justify-center hover:bg-gray-300 active:bg-gray-100 focus:border-gray-400 focus:outline-none"
      onClick={() =>
        props.onChange !== undefined && props.value !== undefined
          ? props.onChange(
              props.type === CounterButtonType.Increment
                ? props.value + 1
                : props.value - 1,
              props.value
            )
          : props.dispatch!({ type: props.type })
      }
    >
      {label}
    </button>
  );
}

export default CounterButton;
