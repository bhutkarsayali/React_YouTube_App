import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const HooksDemo = () => {
  const [inputValue, setInputValue] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  // console.log("Rendering...");
  //heavy operation
  const prime = useMemo(() => findNthPrime(inputValue), [inputValue]);

  // const prime2 = () => {
  //   console.log("Calculate prime number of", inputValue);
  //   return findNthPrime(inputValue);
  // };
  const prime2 = useMemo(() => findNthPrime(inputValue), [inputValue]);
  return (
    <div
      className={
        "m-4 ml-[260px] p-2 w-96 h-96 border border-black" +
        (isDarkTheme && " bg-gray-900 text-white")
      }
    >
      <div>
        <div>
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            type="botton"
            className="flex items-center gap-2 px-6 py-2 mb-5 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            <span>Toggle Theme</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
        <input
          className={
            "border border-black p-3 bg-white" + (isDarkTheme && " text-black")
          }
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <h1>nth Prime number : {prime}</h1>
        {/* <h1>nth Prime number : {prime2()}</h1> */}
        <h1>nth Prime number : {prime2}</h1>
      </div>
    </div>
  );
};

export default HooksDemo;
