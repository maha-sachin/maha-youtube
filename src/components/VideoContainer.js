import React, { useEffect, useState } from "react";
import { youtubeVideoApi } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([
    {
      statistics: {},
      snippet: {
        channelTitle: "",
        thumbnails: {
          medium: {
            url: "",
          },
        },
        title: "",
      },
    },
  ]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(youtubeVideoApi);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link  key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard  videoInfo={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
