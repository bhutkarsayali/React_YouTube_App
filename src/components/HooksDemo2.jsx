import React, { useEffect, useRef, useState } from "react";

const HooksDemo2 = () => {
  const [Y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  console.log("ref =", ref);
  /**
  // not like ==> ref = 0 
  // ref = {current : 0}
  */
  console.log("Rendering");

  const interval = useRef(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      console.log("Namaste Sayali ", Math.random());
    }, 1000);

    return () => clearInterval(interval.current);
  }, []);
  return (
    <>
      <div className="m-4 ml-[260px] p-2 w-96 h-96 border border-black">
        <div className="flex justify-start items-center m-5">
          <button
            onClick={() => {
              x = x + 1;
              console.log("x =", x);
            }}
            type="button"
            className="flex items-center gap-2 px-6 py-2 mb-5 mr-7 mt-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer"
          >
            <span>Increase x</span>
          </button>
          <h1 className="font-bold text-xl">Let : {x}</h1>
        </div>
        <div className="flex justify-start items-center m-5">
          <button
            onClick={() => {
              setY(Y + 1);
              console.log("Y =", Y);
            }}
            type="button"
            className=" flex items-center gap-2 px-6 py-2 my-5 mr-7 bg-orange-600 text-white rounded hover:bg-orange-700 cursor-pointer"
          >
            <span>Increase Y</span>
          </button>
          <h1 className="font-bold text-xl"> State : {Y}</h1>
        </div>

        <div className="flex justify-start items-center m-5">
          <button
            onClick={() => {
              ref.current = ref.current + 1;
              console.log("ref =", ref.current);
            }}
            type="button"
            className=" flex items-center gap-2 px-6 py-2 my-5 mr-7 bg-yellow-600 text-white rounded hover:bg-yellow-700 cursor-pointer"
          >
            <span>Increase Ref</span>
          </button>
          <h1 className="font-bold text-xl"> Ref : {ref.current}</h1>
        </div>
        <div className="flex justify-start items-center mb-5 m-5">
          <button
            onClick={() => clearInterval(interval.current)}
            type="button"
            className="mt-2 flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
          >
            <span>Stop Printing Interval</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HooksDemo2;
