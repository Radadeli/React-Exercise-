import { useState } from "react";

export function Counter() {
   const [counter, setCounter] = useState(0)

    function handleCounterIncrement() {
        setCounter((c) => c + 1)
   }

   return (
    <div>
        <h2> Counted to {counter}</h2>
        <button onClick={handleCounterIncrement}>Increment</button>
    </div>
   )
    
}

export default Counter