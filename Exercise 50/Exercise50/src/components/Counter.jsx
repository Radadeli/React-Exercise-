import { useState, useEffect, useRef } from "react";
import CounterDisplay from "./CounterDisplay";
import { Link } from "react-router-dom";

export function Counter({ initialValue }) {
   const [counter, setCounter] = useState(initialValue)
   const directionRef = useRef(null)

   useEffect(() => {
    if (counter > initialValue) {
      directionRef.current = "up";
    } else if (counter < initialValue) {
      directionRef.current = "down";
    } else {
      directionRef.current = null;
    }

    if (directionRef.current !== null) {
      console.log(`Direction: ${directionRef.current}`);
    }
  }, [counter, initialValue]);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }
   return (
    <div>
        <h2> Counted to {counter}</h2>
        <button onClick={handleCounterIncrement}>Increment</button>
        <CounterDisplay
        counter={counter}
        handleCounterDecrement={() => setCounter((c) => c - 1)}
        handleCounterReset={() => setCounter(0)}
      />
       <Link to="/Counter">Counter Exercise</Link>
    </div>
   )
    
}

export default Counter