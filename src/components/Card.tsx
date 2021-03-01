import { FocusEventHandler, useEffect, useRef, useState } from "react";
import classnames from "classnames";
import Counter from "./Counter";
import { CardProps } from "../types";

const Card = (props: CardProps) => {
  const { _id, name, onChange } = props;

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
      onChange({ _id, name, value });
    }
  }, [onChange, _id, name, value]);

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
      id={props._id.toString()}
      data-testid="card"
      role="button"
      ref={ref}
      tabIndex={0}
      className={classnames(
        "flex items-center justify-between w-full px-4 py-2 border rounded focus:border-gray-400 focus:outline-none",
        props.classList
      )}
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
