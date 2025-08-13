import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  // const params = useParams();
  // console.log('params', params);
  // here above params will come empty, we are using search params here not normal params

  //hence using below hook (check query params in react dom documentation)
  const [searchParams] = useSearchParams();
  // console.log("searchParams", searchParams.get("v"));

  const dispatch = useDispatch();
  //As soon as this componnent loads we need to hide sidebar by default hence using it in useEffect hook
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="m-5 p-5 flex flex-col">
      <div className="flex">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="live-chat pl-7 w-[600px]">
          <LiveChat />
        </div>
      </div>

      <div className="comments">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
