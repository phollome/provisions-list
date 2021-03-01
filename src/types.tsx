export interface CardData {
  _id: number;
  name: string;
  value?: number;
}

export type CardChangeHandler = (data: CardData) => void;

export interface CardProps extends CardData {
  positiveOnly?: boolean;
  onChange?: CardChangeHandler;
  classList?: string;
}

export interface CounterState {
  value: number;
}

export type CounterStateHandler = (state: CounterState) => void;
export type CounterChangeHandler = (value: number, prevValue: number) => void;

export interface CounterProps {
  defaultValue?: number;
  value?: number;
  onChange?: CounterStateHandler;
  onIncrement?: CounterChangeHandler;
  onDecrement?: CounterChangeHandler;
}

export enum CounterButtonType {
  Increment = "increment",
  Decrement = "decrement",
}

export type CounterButtonAction = (
  prevState: CounterState,
  action: {
    type: CounterButtonType;
  }
) => CounterState;

export type CounterButtonDispatch = (action: {
  type: CounterButtonType;
}) => void;

export interface CounterButtonProps {
  id: string;
  type: CounterButtonType;
  value?: number;
  onChange?: CounterChangeHandler;
  dispatch?: CounterButtonDispatch;
}

export interface ListProps {
  data: CardData[];
  options: { positiveOnly: boolean };
  onChange?: CardChangeHandler;
}

export interface SearchInputProps {
  onChange: React.ChangeEventHandler;
}
