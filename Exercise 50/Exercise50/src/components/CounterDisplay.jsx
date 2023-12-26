


export function CounterDisplay({ counter, handleCounterDecrement, handleCounterReset }) {

    return (
        <div>
          {/* <h2>Count to {counter}</h2> 
             */}
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}

export default CounterDisplay