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

export interface ListProps {
  data: CardData[];
  options: { positiveOnly: boolean };
  onChange?: CardChangeHandler;
}

export interface SearchInputProps {
  onChange: React.ChangeEventHandler;
}
