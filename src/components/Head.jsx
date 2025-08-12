import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col flex items-center justify-between shadow shadow-2xl">
      <div className="flex items-center p-5 col-span-1">
        <img onClick={() => toggleMenuHandler()}
          className="h-10 w-10 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        <img
          className="h-20 w-60 ml-20"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10 p-5">
        <input type="text" className="border rounded-l-full border-r-0 border-black/40 px-4 py-2 rounded w-1/2"/>
        <button className="px-4 py-2 bg-blue-600 text-white border border-black/40 rounded-r-full hover:bg-blue-700 transition cursor-pointer">Search</button>
      </div>
      <div className="col-span-1 p-5">
        <img
          className="h-10 w-10"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
