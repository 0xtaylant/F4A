import React, { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faHeart as fasFaHeart, faHeart as farFaHeart } from '@fortawesome/free-solid-svg-icons';
import { useAudioPlayer } from '../src/contexts/AudioPlayerContext';

const AudioPlayer = () => {
    const { audioPlayerState } = useAudioPlayer();
    const { imgSrc, filename, trackName } = audioPlayerState;

    const [playing, setPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [liked, setLiked] = useState(false);
    const audioRef = useRef(null); // Do not initialize Audio here

    // Handle changes to the audio source and auto-play
    useEffect(() => {
        setPlaying(true); // Auto-play the audio when the source changes
        if (filename) {
            // If there's already an audio element initialized
            if (audioRef.current) {
                audioRef.current.pause(); // Pause the current audio
                audioRef.current.src = filename; // Update the source
                audioRef.current.load(); // Reload the audio element to apply the new source
                audioRef.current.play() // Auto-play the new source
                    .catch(error => console.log("Playback failed", error)); // Handle any playback errors (important for browser auto-play policies)
            } else {
                // If the audioRef is not initialized, initialize it with the new filename
                audioRef.current = new Audio(filename);
                audioRef.current.play() // Auto-play the new source
                    .catch(error => console.log("Playback failed", error)); // Handle any playback errors
            }
    
            // Setup event listeners for the new audio element
            const audio = audioRef.current;
            const setAudioData = () => setProgress(audio.currentTime / audio.duration);
            const setAudioTime = () => setProgress(audio.currentTime / audio.duration);
            const handleEnd = () => {
                setPlaying(false);
                // Reset to default state or whatever you prefer when the audio ends
            };
    
            audio.addEventListener('loadeddata', setAudioData);
            audio.addEventListener('timeupdate', setAudioTime);
            audio.addEventListener('ended', handleEnd);
    
            // Cleanup function to remove event listeners when the component unmounts or updates
            return () => {
                audio.removeEventListener('loadeddata', setAudioData);
                audio.removeEventListener('timeupdate', setAudioTime);
                audio.removeEventListener('ended', handleEnd);
            };
        }
    }, [filename]); // Depend on filename to re-run this effect when a new slide is clicked
    
    const togglePlayPause = () => {
        setPlaying(prev => {
            if (prev) {
                audioRef.current?.pause();
            } else {
                audioRef.current?.play().catch(error => console.error("Playback failed:", error));
            }
            return !prev;
        });
    };

    const toggleLike = () => setLiked(prev => !prev);

    // Optionally, hide the player UI if no audio source is set
    if (!filename) {
        return null; // or some placeholder indicating no track selected
    }

    return (
        <div className="fixed bottom-0 bg-black text-white w-[720px] h-16 flex items-center z-50">
            <img src={imgSrc} alt="Track cover" className="h-16 w-16" />
            <button onClick={togglePlayPause} className="bg-black rounded-full focus:outline-none ml-4 h-16 w-16 flex items-center justify-center">
                <FontAwesomeIcon icon={playing ? faPause : faPlay} size="lg" className="text-white" />
            </button>
            <div className="ml-4 flex-grow">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.0001"
                    value={progress}
                    onChange={(e) => {
                        audioRef.current.currentTime = e.target.value * audioRef.current.duration;
                        setProgress(e.target.value);
                    }}
                    className="w-full"
                />
                <p className="text-md">{trackName}</p>
            </div>
            <button onClick={toggleLike} className="ml-4 h-16 w-16 right-0 flex items-center justify-center">
                <FontAwesomeIcon icon={liked ? fasFaHeart : farFaHeart} size="lg" className="text-white" />
            </button>
        </div>
    );
};

export default AudioPlayer;
