import { Reducer, useEffect, useReducer } from "react";
import { CounterProps, CounterState } from "../types";

interface Action {
  type: string;
}

const InitialState = {
  value: 0,
};

const ActionTypes = {
  Increment: "increment",
  Decrement: "decrement",
};

const reducer: Reducer<CounterState, Action> = (
  prevState: CounterState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.Increment:
      return { value: prevState.value + 1 };
    case ActionTypes.Decrement:
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

  return (
    <div className="flex justify-center">
      <button
        id="button-decrement"
        data-testid="button-decrement"
        className="h-10 w-10 border rounded-full flex items-center justify-center"
        onClick={() =>
          props.onDecrement !== undefined && props.value !== undefined
            ? props.onDecrement(props.value - 1, props.value)
            : dispatch({ type: ActionTypes.Decrement })
        }
      >
        -
      </button>
      <div
        data-testid="counter-value"
        className="h-10 w-10 flex items-center justify-center text-lg"
      >
        {props.value !== undefined ? props.value : state.value}
      </div>
      <button
        id="button-increment"
        data-testid="button-increment"
        className="h-10 w-10 border rounded-full flex items-center justify-center"
        onClick={() =>
          props.onIncrement !== undefined && props.value !== undefined
            ? props.onIncrement(props.value + 1, props.value)
            : dispatch({ type: ActionTypes.Increment })
        }
      >
        +
      </button>
    </div>
  );
}

export default Counter;
