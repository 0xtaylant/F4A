import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasfaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farfaHeart } from '@fortawesome/free-regular-svg-icons';

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function AudioPlayer({ filename, trackName, imgSrc }) {
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [liked, setLiked] = useState(false);
    const [playingContent, setPlayingContent] = useState(trackName);
    const [signedURL, setSignedURL] = useState(null);
    const audioRef = useRef(null);

    useEffect(() => {
        async function fetchSignedURL() {
            try {
                const response = await fetch(`/api/getAudioURL?filename=${filename}`);
                const data = await response.json();
                setSignedURL(data.url);
            } catch (error) {
                console.error('Error fetching signed URL:', error);
            }
        }
        fetchSignedURL();
    }, [filename]);

    useEffect(() => {
        if (!audioRef.current && signedURL) {
            audioRef.current = new Audio(signedURL);
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
    }, [signedURL, playing]);

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

    return (
        <div className="fixed bottom-0 bg-black text-white w-[720px] h-16 flex items-center z-50">
            <img src={imgSrc} alt={trackName} className="h-16 w-16" />
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
}

export default AudioPlayer;
