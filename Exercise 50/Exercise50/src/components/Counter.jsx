import { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

export function Counter() {
   const [counter, setCounter] = useState(0)

    function handleCounterIncrement() {
        setCounter((c) => c + 1)
       
        
   }
   useEffect(() =>{
    console.log(`The value of the counter is ${counter}`)
   }, [counter])

   return (
    <div>
        <h2> Counted to {counter}</h2>
        <button onClick={handleCounterIncrement}>Increment</button>
        <CounterDisplay
        counter={counter}
        handleCounterDecrement={() => setCounter((c) => c - 1)}
        handleCounterReset={() => setCounter(0)}
      />
        
    </div>
   )
    
}

export default Counter