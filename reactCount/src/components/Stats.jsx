import React from "react";

const Stats = ({totalCount}) => {
  return (
    <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 rounded shadow">
      <div className="text-2xl font-semibold">
        Total Count: {totalCount}
      </div>
    </div>
  );
};

export default Stats;
