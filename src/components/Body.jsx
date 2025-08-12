import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col !h-[calc(100vh - 120px)] overflow-auto">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
