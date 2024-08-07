import React, {useState} from "react";
import CounterStyles from "./Counter.module.css"


function Counter(){
    const [counter, setCounter] =useState(0);


    const incrementCounter=()=>{
        setCounter(counter+1);
    }

    const decrementCounter=()=>{
        setCounter(counter-1);
    }

    const resetCounter=()=>{
        setCounter(0);
    }

    return(
            <>
            <div className={CounterStyles.counter}>
                <p>Counter: {counter}</p>
                <button onClick={incrementCounter} className={CounterStyles.incrementCounter}>Increment counter</button>
                <button onClick={decrementCounter} className={CounterStyles.decrementCounter}>Decrement counter</button>
                <button onClick={resetCounter} className={CounterStyles.resetCounter}>Reset counter</button>
            </div>
            </>

    );
}
export default Counter;