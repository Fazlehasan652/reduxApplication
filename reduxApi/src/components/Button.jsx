import React from "react";

const Button = ({ type, handler, children }) => {
  const style =
    type === "denger"
      ? "bg-red-500 text-white px-3 py-2 rounded shadow"
      : "bg-blue-500 text-white px-3 py-2 rounded shadow";
  return (
    <div>
      <button onClick={handler} className={style}>
        {children}
      </button>
    </div>
  );
};

export default Button;
