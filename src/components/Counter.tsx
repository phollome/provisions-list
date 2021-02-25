import { Reducer, useEffect, useReducer } from "react";

interface Action {
  type: string;
}

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

const ActionTypes = {
  Increment: "increment",
  Decrement: "decrement",
};

const reducer: Reducer<State, Action> = (prevState: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.Increment:
      return { count: prevState.count + 1 };
    case ActionTypes.Decrement:
      return prevState.count > 0
        ? { count: prevState.count - 1 }
        : { ...prevState };
    default:
      return prevState;
  }
};

function Counter(props: {
  initialValue?: number;
  onChange: (state: { count: number }) => void;
}) {
  const { initialValue, onChange } = props;

  const [state, dispatch] = useReducer(
    reducer,
    initialValue !== undefined && initialValue !== null
      ? { count: initialValue }
      : initialState
  );

  useEffect(() => {
    onChange(state);
  }, [onChange, state]);

  return (
    <div className="flex justify-center">
      <button
        data-testid="button-decrement"
        className="h-10 w-10 border rounded-full flex items-center justify-center"
        onClick={() => dispatch({ type: ActionTypes.Decrement })}
      >
        -
      </button>
      <div className="h-10 w-10 flex items-center justify-center text-lg">
        {state.count}
      </div>
      <button
        data-testid="button-increment"
        className="h-10 w-10 border rounded-full flex items-center justify-center"
        onClick={() => dispatch({ type: ActionTypes.Increment })}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
