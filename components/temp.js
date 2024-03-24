import React, { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasfaHeart, faHeart as farfaHeart } from "@fortawesome/free-regular-svg-icons";
import { useAudioPlayer } from '../src/contexts/AudioPlayerContext';

const AudioPlayer = () => {
    const { audioPlayerState } = useAudioPlayer();
    const { imgSrc, filename, trackName } = audioPlayerState;
    
    const [playing, setPlaying] = useState(false);
    const [liked, setLiked] = useState(false);
    const [progress, setProgress] = useState(0);
    const [playingContent, setPlayingContent] = useState(trackName);
    const audioRef = useRef();

    // Handle play/pause toggle
    const togglePlayPause = () => {
        if (playing) {
            setPlaying(false);
        } else {
            setPlaying(true);
        }
    };

    // Update component when the track changes
    useEffect(() => {
        if (filename) {
            const audio = new Audio(filename);
            audioRef.current = audio;

            const setAudioData = () => {
                setProgress(audio.currentTime / audio.duration);
                setPlayingContent(playing ? `${Math.floor(audio.currentTime / 60)}:${Math.floor(audio.currentTime % 60)}` : trackName);
            };

            audio.addEventListener('loadeddata', setAudioData);
            audio.addEventListener('timeupdate', setAudioData);
            audio.addEventListener('play', () => setPlaying(true));
            audio.addEventListener('pause', () => setPlaying(false));
            audio.addEventListener('ended', () => setPlaying(false));

            // Play the new track
            if (playing) {
                audio.play();
            }

            return () => {
                audio.removeEventListener('loadeddata', setAudioData);
                audio.removeEventListener('timeupdate', setAudioData);
                audio.removeEventListener('play', () => setPlaying(true));
                audio.removeEventListener('pause', () => setPlaying(false));
                audio.removeEventListener('ended', () => setPlaying(false));
            };
        }
    }, [filename, trackName]);

    // Clean up on unmount
    useEffect(() => {
        return () => {
            audioRef.current.pause();
        };
    }, []);

    if (!filename) {
        return null; // Don't render the player if there's no track
    }

    return (
        <div className="fixed bottom-0 bg-black text-white w-full h-16 flex items-center z-50">
            {imgSrc && <img src={imgSrc} alt="Track cover" className="h-16 w-16" />}
            <button onClick={togglePlayPause} className="ml-4">
                <FontAwesomeIcon icon={playing ? faPause : faPlay} size="lg" />
            </button>
            <div className="flex-grow mx-4">
                <p>{playingContent || trackName}</p>
                <input type="range" min="0" max="1" step="0.01" value={progress} onChange={(e) => {
                    const currentTime = e.target.value * audioRef.current.duration;
                    audioRef.current.currentTime = currentTime;
                    setProgress(e.target.value);
                }} />
            </div>
            <button onClick={() => setLiked(!liked)}>
                <FontAwesomeIcon icon={liked ? fasfaHeart : farfaHeart} size="lg" />
            </button>
        </div>
    );
};

export default AudioPlayer;
