// context/AudioPlayerContext.js
import React, { createContext, useContext, useState } from 'react';

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {
  console.log("AudioPlayerProvider START children", children);
  const [audioPlayerState, setAudioPlayerState] = useState({
    imgSrc: '',
    filename: '',
    trackName: '',
  });
  console.log("imgSrc, filename, trackName", audioPlayerState.imgSrc, audioPlayerState.filename, audioPlayerState.trackName);
  
  const updateAudioPlayer = (imgSrc, filename, trackName ) => {
    setAudioPlayerState({ imgSrc, filename, trackName  });
  };

  return (
    <AudioPlayerContext.Provider value={{ audioPlayerState, updateAudioPlayer }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
