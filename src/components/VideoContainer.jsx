import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { RedBorderedVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

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
      {videos[0] && <RedBorderedVideoCard info={videos[0]} />}

      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideoContainer;
