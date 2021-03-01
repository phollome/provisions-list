import { useEffect, useReducer } from "react";
import { CounterButtonAction, CounterButtonType, CounterProps } from "../types";
import CounterButton from "./CounterButton";

const InitialState = {
  value: 0,
};

const reducer: CounterButtonAction = (prevState, action) => {
  console.log(prevState, action);
  switch (action.type) {
    case CounterButtonType.Increment:
      return { value: prevState.value + 1 };
    case CounterButtonType.Decrement:
      return { value: prevState.value - 1 };
    default:
      return prevState;
  }
};

function Counter(props: CounterProps) {
  const { onChange } = props;
  const [state, dispatch] = useReducer(
    reducer,
    props.defaultValue !== undefined
      ? { value: props.defaultValue }
      : InitialState
  );

  useEffect(() => {
    if (onChange !== undefined) {
      onChange(state);
    }
  }, [onChange, state]);

  const value = props.value ?? state.value;

  return (
    <div className="flex justify-center">
      <CounterButton
        id="button-decrement"
        type={CounterButtonType.Decrement}
        value={value}
        onChange={props.onDecrement}
        dispatch={dispatch}
      />
      <div
        data-testid="counter-value"
        className="h-10 w-10 flex items-center justify-center text-lg"
      >
        {value}
      </div>
      <CounterButton
        id="button-increment"
        type={CounterButtonType.Increment}
        value={value}
        onChange={props.onIncrement}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Counter;
