import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";

function Livesets() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const API_KEY = "AIzaSyCrhlDbp1aY51JJYwTMF5ZO2f7Uiyrckhg";
    const CHANNEL_ID = "UCDR40f8xSnBa2lRESOatAYw";

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
      )
      .then((response) => {
        const latestVideoId = response.data.items[0]?.id.videoId;
        setVideos(response.data.items);
        setCurrentVideo(latestVideoId);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  const playVideo = (videoId) => {
    setCurrentVideo(videoId);
  };

  const closeVideo = () => {
    setCurrentVideo(null);
  };

  const opts = {
    height: "480", // Adjust the height to your preference
    width: "800", // Adjust the width to your preference
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className="flex flex-col items-center pt-32 pl-4 bg-f4a-orange">
        <p className="text-white font-semibold font-Anton text-4xl">LIVESETS</p>
        <p className="text-white font-Anton text-xs mt-2 pb-4">
          Explore the latest live sets from FFA
        </p>
      </div>

      {/* Video rectangle centered at the top */}
      <div className="flex justify-center items-center video-rectangle relative">
        {currentVideo && (
          <div className="absolute top-2 right-2 text-white cursor-pointer">
            <button onClick={closeVideo}>Close</button>
          </div>
        )}
        <YouTube videoId={currentVideo} opts={opts} />
      </div>

      <nav className="your-menu-component"></nav>
      <div className="bg-f4a-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
          {videos.map((video, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => playVideo(video.id.videoId)}
                className="block cursor-pointer"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full h-auto"
                />
                <p className="mt-2">{video.snippet.title}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Livesets;