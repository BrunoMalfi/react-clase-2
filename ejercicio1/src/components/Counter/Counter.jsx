import { useState } from "react";

const Counter = ({initialization,incrementation}) => {
  const [counter, setCounter] = useState(Number(initialization));
  const increment = () => {
    setCounter(counter + Number(incrementation));
  };
  const decrement = () => {
    setCounter(counter - Number(incrementation));
  };
  return (
    <div>
        <button onClick={increment} >+</button>
        <span>{counter}</span>
        <button onClick={decrement} >-</button>

    </div>)
};

export default Counter;
