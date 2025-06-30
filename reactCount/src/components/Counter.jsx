import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = ({count,onIncrement,onDecrement}) => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   const handleDecrement = () => {
//     setCount((prevCount) => prevCount - 1);
//   };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-y-3 gap-2">
        <Button handler={onIncrement}>Increment</Button>
        <Button type="danger" handler={onDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
