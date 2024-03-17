import React, { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasfaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farfaHeart } from "@fortawesome/free-regular-svg-icons";
import { AudioPlayerContext } from '../src/contexts/AudioPlayerContext'; // Adjust the import path as necessary
import {useAudioPlayer} from '../src/contexts/AudioPlayerContext'; // Adjust the import path as necessary
const AudioPlayer = () => {
    const { audioPlayerState } = useAudioPlayer();
  
    console.log("animal chatgpt",audioPlayerState); // Check if the state logs correctly
    const { imgSrc, filename, trackName } = audioPlayerState;
    const [progress, setProgress] = React.useState(0);
    const [playingContent, setPlayingContent] = useState(trackName);
    const [playing, setPlaying] = React.useState(false);
    const [liked, setLiked] = React.useState(false);
    const audioRef = useRef(null);
  
    useEffect(() => {
      audioRef.current = new Audio(filename);
      const audio = audioRef.current;

      
  
      const onPlay = () => setPlaying(true);
      const onPause = () => setPlaying(false);
  
      audio.addEventListener('play', onPlay);
      audio.addEventListener('pause', onPause);
  
      return () => {
        audio.removeEventListener('play', onPlay);
        audio.removeEventListener('pause', onPause);
      };
    }, [filename]);
    useEffect(() => {
        if (!audioRef.current && filename) {
            audioRef.current = new Audio(filename);
            const audio = audioRef.current;
    
            const setAudioData = () => setProgress(audio.currentTime / audio.duration);
            const setAudioTime = () => {
                setProgress(audio.currentTime / audio.duration);
                setPlayingContent(playing ? formatTime(audio.currentTime) : trackName);
            };
            const handleEnd = () => {
                setPlaying(false);
                setPlayingContent(trackName);
            };
    
            audio.addEventListener("loadeddata", setAudioData);
            audio.addEventListener("timeupdate", setAudioTime);
            audio.addEventListener("ended", handleEnd);
    
            return () => {
                audio.removeEventListener("loadeddata", setAudioData);
                audio.removeEventListener("timeupdate", setAudioTime);
                audio.removeEventListener("ended", handleEnd);
            };
        }
    }, [filename ,playing]);
  
    const togglePlayPause = () => {
        const prevValue = playing;
        setPlaying(!prevValue);
        
        if (audioRef.current) {
            if (prevValue) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
    };
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);
    const { duration } = audioRef.current || {};
  
    const toggleLike = () => {
      setLiked(!liked);
    };
  
    return (
        <div className="fixed bottom-0 bg-black text-white w-[720px] h-16 flex items-center z-50">
            <img src={imgSrc} className="h-16 w-16"/>
            <button onClick={togglePlayPause} className="bg-black rounded-full focus:outline-none ml-4 h-16 w-16 flex items-center justify-center">
                <FontAwesomeIcon icon={playing ? faPause : faPlay} size="lg" className="text-white" />
            </button>
            {playing && (
                <div className="ml-4 flex-grow">
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.0001}
                        value={progress}
                        onChange={(e) => {
                            audioRef.current.currentTime = e.target.value * duration;
                            setProgress(e.target.value);
                        }}
                        className="w-full"
                    />
                    <p className="text-md">{playingContent}</p>
                </div>
            )}
            <button onClick={() => setLiked(!liked)} className="ml-4 h-16 w-16 right-0 flex items-center justify-center">
                <FontAwesomeIcon icon={liked ? fasfaHeart : farfaHeart} size="lg" className="text-white" />
            </button>
        </div>
    );
  };
  
export default AudioPlayer;

