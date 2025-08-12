import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-10 ml-[240px]" style={{height: "calc(100vh - 120px)"}}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
