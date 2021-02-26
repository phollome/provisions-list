import { FocusEventHandler, useEffect, useRef, useState } from "react";
import Counter from "./Counter";

export interface CardProps {
  name: string;
  value: number;
  positiveOnly?: boolean;
  onChange?: (state: { name: string; value: number }) => void;
}

const Card = (props: CardProps) => {
  const { name, onChange } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(props.value);

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

  useEffect(() => {
    if (onChange !== undefined) {
      onChange({ name, value });
    }
  }, [onChange, name, value]);

  const handleFocus: FocusEventHandler = (event) => {
    if (event.target === ref.current) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  };

  const handleIncrement = (value: number) => {
    if (props.positiveOnly && value < 0) {
      setValue(0);
    } else {
      setValue(value);
    }
  };
  const handleDecrement = (value: number, prevValue: number) => {
    if (props.positiveOnly && value < 0) {
      setValue(prevValue < 0 ? 0 : prevValue);
    } else {
      setValue(value);
    }
  };

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
      <Counter
        value={value}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

Card.defaultProps = {
  value: 0,
  positiveOnly: true,
};

export default Card;
