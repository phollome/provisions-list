import { FocusEventHandler, useEffect, useRef, useState } from "react";
import Counter, { CounterState } from "./Counter";

export interface CardProps {
  name: string;
  value?: number;
}

const Card = (props: CardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const keydownHandler = (evt: KeyboardEvent) => {
      if (evt.key === "+") {
        const btn = ref.current?.querySelector(
          "#button-increment"
        ) as HTMLButtonElement;
        if (btn !== null) {
          btn.click();
        }
      }
      if (evt.key === "-") {
        const btn = ref.current?.querySelector(
          "#button-decrement"
        ) as HTMLButtonElement;
        if (btn !== null) {
          btn.click();
        }
      }
    };
    if (focused) {
      window.addEventListener("keydown", keydownHandler);
    } else {
      window.removeEventListener("keydown", keydownHandler);
    }
    return () => window.removeEventListener("keydown", keydownHandler);
  }, [focused]);

  const handleFocus: FocusEventHandler = (event) => {
    if (event.target === ref.current) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  };

  const handleChange = (state: CounterState) => {};

  return (
    <div
      data-testid="card"
      role="button"
      ref={ref}
      tabIndex={0}
      className="flex items-center justify-between w-full px-4 py-2 border rounded"
      onFocus={handleFocus}
    >
      <h2 data-testid="card-name" className="mr-4">
        {props.name}
      </h2>
      <Counter onChange={handleChange} initialValue={props.value} />
    </div>
  );
};

export default Card;
