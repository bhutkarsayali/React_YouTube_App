import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="px-4 py-2 text-sm font-medium rounded bg-gray-300 hover:bg-gray-400 transition shadow-lg m-2">
        {name}
      </button>
    </div>
  );
};

export default Button;
