import React from "react";

const VideoCard = ({ info }) => {
  // console.log("info", info);

  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 shadow-lg w-72">
      <img
        alt="thumbnail"
        src={info?.snippet?.thumbnails?.medium?.url}
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold">{info?.snippet?.title}</li>
        <li className="text-gray-500 pt-2">
          {info?.snippet?.infochannelTitle}
        </li>
        <li className="text-gray-500">
          Views {info?.statistics?.commentCount}{" "}
        </li>
      </ul>
    </div>
  );
};

// Higher order component or you can create HOC for youtube video cards that has ads
// export const RedBorderedVideoCard = (VideoCard) => {
//   return <VideoCard />;
// };
export const RedBorderedVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      Higher Order Componnent
      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard;
