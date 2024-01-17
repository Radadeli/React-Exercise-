import { useState } from "react";
import useCounter from "./UseCounter";

export function CounterHook({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button className="button" onClick={onIncrement}>
        Increment
      </button>
      <button className="button" onClick={onDecrement}>
        Decrement
      </button>
      <button className="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default CounterHook;
