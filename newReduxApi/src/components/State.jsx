import React from "react";

const State = ({ total }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow my-3">
      <div className="text-2xl font-semibold ">Total Count: {total}</div>
    </div>
  );
};

export default State;
