import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="video" />
      <ul>
        <li className=" font-bold py-2">{title}</li>
        <li className="font-medium">{channelTitle}</li>
        <li className="font-medium">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
