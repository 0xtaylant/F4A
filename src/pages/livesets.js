import React, { useState } from "react";
import YouTube from "react-youtube";

function Livesets() {
  const [currentVideo, setCurrentVideo] = useState(null);

  const hardcodedLivesets = [
    { title: "Istanbul Live Set 2023", youtubeID: "F-H_9wzmo90" },
    { title: "New York Live Set 2023", youtubeID: "fderYcBxDp0" },
    { title: "Paris Live Set 2023", youtubeID: "bm1zl23uwy0" },
    // Add more livesets with titles and YouTube IDs
  ];

  const playVideo = (youtubeID) => {
    setCurrentVideo(youtubeID);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="bg-f4a-orange w-screen h-screen text-center p-8 pt-16 align-middle">
      <div className="grid grid-cols-2 gap-4">
        {hardcodedLivesets.map((liveset, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => playVideo(liveset.youtubeID)}
              className="block cursor-pointer"
            >
              <p className="mt-2">{liveset.title}</p>
            </button>
          </div>
        ))}
      </div>
      {currentVideo && (
        <div className="mt-4">
          <YouTube videoId={currentVideo} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default Livesets;
