import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import initialCounter from "./data/initalCounter";

function App() {
  const [counters, setCountrs] = useState(initialCounter);

  const handleIncrement = (counterId) => {
    const updatedCounters = counters.map((c) => {
      if (c.id === counterId) {
        return {
          ...c,
          value: c.value + 1,
        };
      }
      return c;
    });
    setCountrs(updatedCounters)
  };
  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map((c) => {
      if (c.id === counterId) {
        return {
          ...c,
          value: c.value - 1,
        };
      }
      return c;
    });
    setCountrs(updatedCounters)
  };
  // derived state
  const totalCount = counters.reduce((sum, cuttert) => sum + cuttert.value, 0);
  return (
    <div className="w-screen h-full p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => ( 
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}

        <Stats totalCount={totalCount} />
      </div>
    </div>
  );
}

export default App;
