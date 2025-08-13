import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { RedBorderedVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    // console.log("items", json.items);
    setVideos(json.items);
  };

  const query = useSelector((state) => state.searchfilter.query);
  const filteredSearchResults = videos.filter((item) =>
    item?.snippet?.title.toLowerCase().includes(query)
  );
  if (filteredSearchResults <= 0) {
    return (
      <h1 className="font-bold text center p-5 m-auto">No resultes found</h1>
    );
  }
  return (
    <div className="m-5 flex flex-wrap">
      {videos[0] && <RedBorderedVideoCard info={videos[0]} />}
      {/* {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))} */}
      {filteredSearchResults.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideoContainer;
