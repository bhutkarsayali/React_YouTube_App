import React from "react";
import Sidebar from "./Sidebar";
// import MainContainer from "./MainContainer";
// import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col !h-[calc(100vh - 120px)] overflow-auto flex justify-between">
      <Sidebar />
      <Outlet />
        {/* <MainContainer />
        <WatchPage /> */}
    </div>
  );
};

export default Body;
