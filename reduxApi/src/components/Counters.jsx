
import Button from "./Button";
import Count from "./Count";


const Counters = ({count,onIncrement,onDecrement}) => {
  
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-y-3 gap-2">
        <Button handler={onIncrement}>Increment</Button>
        <Button handler={onDecrement} type={"denger"}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counters;
