import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    console.log("items", json.items);
    setVideos(json.items);
  };
  return (
    <div className="m-5 flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key ={video.id} info={video} />
      ))}
       <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideoContainer;
