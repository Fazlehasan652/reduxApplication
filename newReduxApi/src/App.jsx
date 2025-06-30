import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counters from "./components/Counters";
import State from "./components/State";
import { decrement, increment } from "./features/counters/counterSlice";
import Posts from "./components/Posts";
// import initialdata from "./data/initialdata";

function App() {
  const [showPosts, setShowPosts] = useState(true);
  // const [counters, setCounters] = useState(initialdata);

  // const handleIncrement = (counterId) => {
  //   const updateHandler = counters.map((count) => {
  //     if (count.id === counterId) {
  //       return {
  //         ...count,
  //         value: count.value + 1,
  //       };
  //     }
  //     return count;
  //   });
  //   setCounters(updateHandler);
  // };
  // const handleDecrement = (counterId) => {
  //   const updateHandler = counters.map((count) => {
  //     if (count.id === counterId) {
  //       return {
  //         ...count,
  //         value: count.value - 1,
  //       };
  //     }
  //     return count;
  //   });
  //   setCounters(updateHandler);
  // };

  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  const totalResult = counters.reduce(
    (sum, CurrentValue) => sum + CurrentValue.value,
    0
  );
  return (
    <div className="w-screen h-full p-10  text-slate-700 bg-amber-500">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => {
          return (
            <Counters
              key={counter.id}
              count={counter.value}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
            />
          );
        })}
      </div>
      <State total={totalResult} />

      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        RTK Query
      </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <button
          onClick={() => setShowPosts((prevState) => !prevState)}
          className="bg-blue-600 text-white rounded py-2 px-3"
        >
          Toggle Posts
        </button>
      </div>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {showPosts && <Posts />}
      </div>
    </div>
  );
}

export default App;
